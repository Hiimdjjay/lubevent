export type IconKey = 'telephone' | 'email' | 'location-pin';

type CardData = {
	id: number;
	name: string;
	details: string;
	icon: IconKey;
};

export const CONTACT_DATA: CardData[] = [
	{
		id: 1,
		name: 'Telefon',
		details: '+48 500 500 500',
		icon: 'telephone'
	},
	{
		id: 2,
		name: 'Email',
		details: 'biuro@lubevent.pl',
		icon: 'email'
	},
	{
		id: 3,
		name: 'Adres',
		details: `ul. Krakowskie Przedmieście 15, \n20-002 Lublin`,
		icon: 'location-pin'
	}
];

type contactFormInputsTypes = {
	id: number;
	label: string;
	name: string;
	placeholder: string;
};

export const contactFormInputs = [
	{ id: 1, label: 'Imię i nazwisko', name: 'name', placeholder: 'Jan Kowalski' },
	{ id: 2, label: 'Ares e-mail', name: 'email', placeholder: 'jankowalski@gmail.com' },
	{ id: 3, label: 'Numer telefonu (opcjonalnie)', name: 'tel', placeholder: '+48 500 200 100' },
	{ id: 4, label: 'Wiadomość', name: 'message', placeholder: 'Podaj treść swojej wiadomości' },
	{
		id: 5,
		label: 'Akceptując politykę prywatności, potwierdzasz, że zapoznałeś się z informacjami o tym, kto jest administratorem Twoich danych osobowy.',
		name: 'privacyPolicy',
		placeholder: ''
	}
];
