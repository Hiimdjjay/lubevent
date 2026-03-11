'use client';

import { useState } from 'react';
import { BurgerButton } from './BurgerButton';
import { usePathname } from 'next/navigation';
import { HighlightedButton } from '@/components/HighlightedButton/HighlightedButton';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { SocialMedias } from './SocialMedias';
import { MobileNav } from './MobileNav';

export function Header() {
	const [open, setOpen] = useState(false);
	const activePath = usePathname();

	return (
		<header className='fixed top-0 left-0 w-full z-50 p-4 md:p-5 lg:p-7.5'>
			<div className='mx-auto flex max-w-325 items-center justify-between rounded-lg p-3  bg-bg-white-blur backdrop-blur-md border border-white/40 shadow-lg md:p-3.5 lg:grid lg:grid-cols-[1fr_auto_1fr]'>
				<Logo setOpen={setOpen} />
				<DesktopNav activePath={activePath} />
				<div className='hidden lg:block lg:justify-self-end'>
					<HighlightedButton>Zacznij współpracę</HighlightedButton>
				</div>
				<div className='lg:hidden'>
					<BurgerButton open={open} setOpen={setOpen} />
				</div>
			</div>
			<div
				className={`mt-3 rounded-lg origin-top overflow-hidden transition-all duration-300 ease-out lg:hidden ${open ? 'max-h-150 opacity-100  translate-y-0' : 'max-h-0 opacity-0 -translate-y-3 pointer-events-none'}`}>
				<div className='bg-bg-white-blur backdrop-blur-md border border-white/40 shadow-lg rounded-lg'>
					<div
						className={`flex flex-col items-center gap-4 p-3 transition-all duration-300 ${open ? 'opacity-100 translate-y-0 delay-250' : 'opacity-0 -translate-y-2'}`}>
						<MobileNav activePath={activePath} setOpen={setOpen} />
						<HighlightedButton>Zacznij współpracę</HighlightedButton>
						<SocialMedias />
					</div>
				</div>
			</div>
		</header>
	);
}
