'use client';
import { Logo } from '../../UI/Logo';
import { usePathname } from 'next/navigation';
import { SocialForFooter } from './SocialForFooter';
import { NavForFooter } from './NavForFooter';

export function Footer() {
	const activePath = usePathname();
	return (
		<footer>
			<div className='max-w-325 m-auto w-full p-4 py-10 md:p-5 md:pb-10 md:pt-20 lg:p-7.5 lg:pb-10 lg:pt-20'>
				<div className='flex flex-col justify-between md:flex-row'>
					<div className='mb-8 '>
						<Logo size='h-12 md:h-16 lg:h-18' />
					</div>
					<NavForFooter activePath={activePath} />
				</div>
				<div>
					<hr className='mt-10 mb-5 text-black/20 md:mt-15 lg:mt-25' />
				</div>
				<div className='flex flex-col justify-between gap-5 sm:flex-row'>
					<p>Strona wykonana przez Jakub Rafalski</p>
					<SocialForFooter />
				</div>
			</div>
		</footer>
	);
}
