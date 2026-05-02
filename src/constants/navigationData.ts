export type NavItem = {
	id: number;
	name: string;
	path: string;
};

export const NAVIGATION_ITEMS: NavItem[] = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'O nas', path: '/o-nas' },
	{ id: 3, name: 'Usługi', path: '/uslugi' },
	{ id: 4, name: 'Kontakt', path: '/kontakt' },
	{ id: 5, name: 'Polityka Prywatności', path: '/polityka-prywatnosci' },
	{ id: 6, name: 'Regulamin', path: '/regulamin' },
	{ id: 7, name: 'Formularz', path: '/formularz' }
];

export type socialItem = {
	id: number;
	name: string;
	path: string;
	icon: 'instagram' | 'facebook';
};

export const SOCIAL_ITEMS: socialItem[] = [
	{
		id: 1,
		name: 'Instagram',
		path: 'https://www.instagram.com',
		icon: 'instagram'
	},
	{
		id: 2,
		name: 'Facebook',
		path: 'https://www.facebook.com',
		icon: 'facebook'
	}
];
