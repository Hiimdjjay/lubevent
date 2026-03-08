'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BurgerButton } from './BurgerButton';
import { useState } from 'react';
import Logo from '../../../../public/Logo/lubevent-logo.svg';

const NavItems = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Oferta', path: '/oferta' },
	{ name: 'Realizacje', path: '/realizacje' },
	{ name: 'Kontakt', path: '/kontakt' }
];

export function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className='fixed w-full z-100 p-5'>
			<div className='flex justify-between items-center p-3  bg-bg-white-blur backdrop-blur-md border-white/40 shadow-lg rounded-lg'>
				<Link href='/'>
					<Image src={Logo} alt='LubEvent' className='h-8 w-auto' />
				</Link>
				<BurgerButton open={open} setOpen={setOpen}></BurgerButton>
			</div>
		</header>
	);
}
