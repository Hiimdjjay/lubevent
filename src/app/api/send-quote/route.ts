import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const data = await request.json();

	const { personalDetails, date, place, eventType, guestsQuantity, services, message, referralSource, additionalReferralSource } = data;

	const selectedServices = Object.entries(services ?? {})
		.filter(([key, value]) => key !== 'additionalService' && value === true)
		.map(([key]) => key)
		.join(', ');

	const text = `
DANE OSOBOWE
Imię i nazwisko: ${personalDetails?.name} ${personalDetails?.surname}
Email: ${personalDetails?.email}
Telefon: ${personalDetails?.telephone}
Firma: ${personalDetails?.companyName || 'Nie podano'}

MIEJSCE I DATA
Data: ${date}
Wybrane miejsce: ${place?.isPlaceChoosed}
${place?.place ? `Miejscowość: ${place.place}` : ''}
${place?.venuePlace ? `Adres / nazwa lokalu: ${place.venuePlace}` : ''}

RODZAJ WYDARZENIA
Typ: ${eventType?.eventType}
${eventType?.describeEventType ? `Opis (inne): ${eventType.describeEventType}` : ''}
Liczba gości: ${guestsQuantity}
Budżet: ${eventType?.budgetSelected}

USŁUGI
Wybrane usługi: ${selectedServices || 'Brak'}
${services?.additionalService ? `Dodatkowe usługi: ${services.additionalService}` : ''}

DODATKOWE INFORMACJE
Wiadomość: ${message || 'Brak'}
Skąd o nas: ${referralSource || 'Nie podano'}
${additionalReferralSource ? `Inne źródło: ${additionalReferralSource}` : ''}
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
