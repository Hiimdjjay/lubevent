export type NavItem = {
	name: string;
	path: string;
};

export type SocialItem = {
	name: string;
	path: string;
	icon: 'instagram' | 'facebook';
};

export type FooterNav = {
	name: string;
	path: string;
};

export const NavItems: NavItem[] = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Oferta', path: '/oferta' },
	{ name: 'Kontakt', path: '/kontakt' }
];

export const footerNav: FooterNav[] = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Oferta', path: '/oferta' },
	{ name: 'Kontakt', path: '/kontakt' },
	{ name: 'Polityka prywatności', path: '/polityka-prywatności' },
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
