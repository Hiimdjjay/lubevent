import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const data = await request.json();

	const { personalDetails, placeAndDate, eventDetails, services, message, additionalServices } = data;

	const selectedServices = Object.entries(services ?? {})
		.filter(([, value]) => value === true)
		.map(([key]) => key)
		.join(', ');

	const text = `
DANE OSOBOWE
Imię i nazwisko: ${personalDetails?.name} ${personalDetails?.surname}
Email: ${personalDetails?.email}
Telefon: ${personalDetails?.telephone}
Firma: ${personalDetails?.companyName || 'Nie podano'}

MIEJSCE I DATA
Data: ${placeAndDate?.date}
Wybrane miejsce: ${placeAndDate?.isPlaceChoosed}
${placeAndDate?.city ? `Miejscowość: ${placeAndDate.city}` : ''}
${placeAndDate?.adress ? `Adres / nazwa lokalu: ${placeAndDate.adress}` : ''}

RODZAJ WYDARZENIA
Typ: ${eventDetails?.eventType}
${eventDetails?.eventDescription ? `Opis (inne): ${eventDetails.eventDescription}` : ''}
Liczba gości: ${eventDetails?.totalGuests}
Budżet: ${eventDetails?.estimatedBudget || 'Nie podano'}

USŁUGI
Wybrane usługi: ${selectedServices || 'Brak'}
${additionalServices ? `Dodatkowe usługi: ${additionalServices}` : ''}

DODATKOWE INFORMACJE
Wiadomość: ${message?.message || 'Brak'}

Skąd się o nas doweidziałeś: ${message?.referralSource || 'Nie podano'}
${message?.additionalReferralSource ? `Inne źródło: ${message.additionalReferralSource}` : ''}
`.trim();

	const { error } = await resend.emails.send({
		from: 'Formularz wyceny <kontakt@lubevent.pl>',
		to: 'biuro@lubevent.pl',
		subject: `Nowe zapytanie o wycenę od ${personalDetails?.name} ${personalDetails?.surname}`,
		text
	});

	if (error) {
		return NextResponse.json({ error }, { status: 500 });
	}

	return NextResponse.json({ success: true });
}
