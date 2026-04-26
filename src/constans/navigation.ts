export type NavItem = {
	name: string;
	path: string;
};

export type SocialItem = {
	name: string;
	path: string;
	icon: 'instagram' | 'facebook';
};

export const navigation: NavItem[] = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Usługi', path: '/uslugi' },
	{ name: 'Kontakt', path: '/kontakt' },
	{ name: 'Polityka prywatności', path: '/polityka-prywatnosci' },
	{ name: 'Regulamin', path: '/regulamin' },
	{ name: '404', path: '/404' }
];

export const SocialItems: SocialItem[] = [
	{
		name: 'Instagram',
		path: 'https://www.instagram.com',
		icon: 'instagram'
	},
	{
		name: 'Facebook',
		path: 'https://www.facebook.com',
		icon: 'facebook'
	}
];
