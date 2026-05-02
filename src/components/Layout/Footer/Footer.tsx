'use client';
import { Logo } from '../../UI/Logo';
import { usePathname } from 'next/navigation';
import { FooterSocialMedia } from './FooterSocialMedia';
import { FooterNav } from './FooterNav';
import { Wrapper } from '@/components/UI/Wrapper';

export function Footer() {
	const activePath = usePathname();
	return (
		<footer className='py-10 md:pt-20 md:pb-8 lg:pt-25'>
			<Wrapper>
				<div className='flex flex-col justify-between md:flex-row'>
					<div className='mb-8 '>
						<Logo size='h-12 md:h-16 lg:h-18' />
					</div>
					<FooterNav activePath={activePath} />
				</div>
				<div>
					<hr className='mt-10 mb-5 text-black/20 md:mt-15 lg:mt-25' />
				</div>
				<div className='flex flex-col justify-between gap-5 sm:flex-row'>
					<p className='font-medium'>
						Strona wykonana przez <span className='underlineText'>Jakub Rafalski </span>
					</p>
					<FooterSocialMedia />
				</div>
			</Wrapper>
		</footer>
	);
}
