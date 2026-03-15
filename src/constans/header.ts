export type NavItem = {
	name: string;
	path: string;
};

export type SocialItem = {
	name: string;
	path: string;
	icon: 'instagram' | 'facebook';
};

export const NavItems: NavItem[] = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Oferta', path: '/oferta' },
	{ name: 'Realizacje', path: '/realizacje' },
	{ name: 'Kontakt', path: '/kontakt' }
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
