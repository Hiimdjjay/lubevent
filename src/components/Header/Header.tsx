'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BurgerButton } from './BurgerButton';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '../../../public/Logo/lubevent-logo.svg';
import { HighlightedButton } from '@/components/HighlightedButton/HighlightedButton';
import { Facebook, Instagram } from 'lucide-react';

const NavItems = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Oferta', path: '/oferta' },
	{ name: 'Realizacje', path: '/realizacje' },
	{ name: 'Kontakt', path: '/kontakt' }
];

const SocialItems = [
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

export function Header() {
	const [open, setOpen] = useState(false);
	const activePath = usePathname();

	return (
		<header className='fixed top-0 left-0 w-full z-50 p-4 md:p-5 lg:p-7.5 '>
			<div className='  mx-auto max-w-325 flex justify-between items-center p-3 md:p-3.5 bg-bg-white-blur backdrop-blur-md border-white/40 shadow-lg rounded-lg'>
				<Link href='/'>
					<Image src={Logo} alt='LubEvent' className='h-8.5 w-auto md:h-10.5 lg:h-13' />
				</Link>
				<div className='hidden items-center gap-6 font-semibold lg:flex'>
					{NavItems.map(({ name, path }) => {
						return (
							<Link
								key={name}
								href={path}
								className={`text-black/60 transition-colors duration-200 hover:text-black ${activePath === path ? 'active' : ''}`}>
								{name}
							</Link>
						);
					})}
				</div>
				<div className='hidden lg:block'>
					<HighlightedButton>Zacznij współpracę</HighlightedButton>
				</div>
				<BurgerButton open={open} setOpen={setOpen}></BurgerButton>
			</div>
			<div
				className={`mt-3 rounded-lg origin-top overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-150 opacity-100  translate-y-0' : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'}`}>
				<div className='bg-bg-white-blur backdrop-blur-md border-white/40 shadow-lg rounded-lg'>
					<div
						className={`flex flex-col items-center gap-4 p-3 transition-all duration-300 ${open ? 'opacity-100 translate-0 delay-250' : 'opacity-0 -translate-y-2'}`}>
						<nav className='flex flex-col items-center gap-4 '>
							{NavItems.map(({ name, path }) => {
								return (
									<Link
										key={name}
										href={path}
										className={`text-black/60 font-medium text-lg md:text-xl transition-colors duration-200 hover:text-black ${activePath === path ? 'active' : ''}`}
										onClick={() => setOpen(false)}>
										{name}
									</Link>
								);
							})}
							<HighlightedButton>Zacznij Współprace</HighlightedButton>
						</nav>

						<div className='flex justify-center gap-4'>
							{SocialItems.map(({ name, path, icon }) => {
								return (
									<Link key={name} href={path}>
										{icon}
									</Link>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
