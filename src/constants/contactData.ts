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
