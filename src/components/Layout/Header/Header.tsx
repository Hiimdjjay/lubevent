'use client';

import { useState } from 'react';
import { BurgerButton } from './BurgerButton';
import { usePathname } from 'next/navigation';
import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { Logo } from '../../UI/Logo';
import { DesktopNav } from './DesktopNav';
import { SocialMedias } from './SocialMedias';
import { MobileNav } from './MobileNav';

export function Header() {
	const [open, setOpen] = useState(false);
	const activePath = usePathname();

	return (
		<header className='fixed top-0 left-0 w-full z-50 p-4 md:p-5 lg:p-7.5 lg:absolute '>
			<div className='flex items-center justify-between mx-auto max-w-325 p-3 rounded-lg bg-bg-white-blur backdrop-blur-md border border-white/40 shadow-lg md:p-3.5 lg:grid lg:grid-cols-[1fr_auto_1fr]'>
				<Logo setOpen={setOpen} size='h-8.5 md:h-10.5 ' />
				<DesktopNav activePath={activePath} />
				<div className='hidden lg:flex lg:justify-self-end'>
					<PrimaryButton link='/formularz'>Darmowa Wycena</PrimaryButton>
				</div>
				<div className='flex justify-center items-center lg:hidden'>
					<BurgerButton open={open} setOpen={setOpen} />
				</div>
			</div>
			<div
				className={`overflow-hidden mt-3 rounded-lg origin-top  transition-all duration-300 ease-out lg:hidden ${open ? 'max-h-150 opacity-100  translate-y-0' : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'}`}>
				<div className='bg-bg-white-blur backdrop-blur-md border border-white/40 shadow-lg rounded-lg'>
					<div
						className={`flex flex-col items-center gap-4 p-3 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 delay-250' : 'opacity-0 -translate-y-2'}`}>
						<MobileNav activePath={activePath} setOpen={setOpen} />
						<PrimaryButton onClick={() => setOpen(false)} link='/formularz'>
							Darmowa Wycena
						</PrimaryButton>
						<SocialMedias />
					</div>
				</div>
			</div>
		</header>
	);
}
