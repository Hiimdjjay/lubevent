import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	const { name, email, tel, message } = await request.json();

	const { error } = await resend.emails.send({
		from: 'Formularz kontaktowy <kontakt@lubevent.pl>',
		to: 'biuro@lubevent.pl',
		subject: `Nowa wiadomość od ${name}`,
		text: `Imię i nazwisko: ${name}\nEmail: ${email}\nTelefon: ${tel}\nWiadomość: ${message}`
	});

	if (error) {
		return NextResponse.json({ error }, { status: 500 });
	}

	return NextResponse.json({ success: true });
}
