import { Facebook, Instagram } from 'lucide-react';
import { ReactNode } from 'react';

export type NavItem = {
	name: string;
	path: string;
};

export type SocialItem = {
	name: string;
	path: string;
	icon: ReactNode;
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
		icon: <Instagram className='text-black/80 w-6.5 h-auto md:w-7.5' />
	},
	{
		name: 'Facebook',
		path: 'https://www.facebook.com',
		icon: <Facebook className='text-black/80 w-6.5 h-auto md:w-7.5' />
	}
];
