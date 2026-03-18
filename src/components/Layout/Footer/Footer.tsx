'use client';
import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '../../UI/Logo';
import { SocialItems } from '../../../constans/header';

const footerNav = [
	{ name: 'Home', path: '/' },
	{ name: 'O nas', path: '/o-nas' },
	{ name: 'Oferta', path: '/oferta' },
	{ name: 'Realizacje', path: '/realizacje' },
	{ name: 'Kontakt', path: '/kontakt' },
	{ name: 'Polityka prywatności', path: '/polityka-prywatności' },
	{ name: 'Regulamin', path: '/regulamin' },
	{ name: '404', path: '/404' }
];

const socialTranslate = {
	instagram: <Instagram size={18} />,
	facebook: <Facebook size={18} />
};

export function Footer() {
	return (
		<footer>
			<div className='max-w-325 m-auto w-full p-4 py-10 md:p-5 md:pb-10 md:pt-20 lg:p-7.5 lg:pb-10 lg:pt-20'>
				<div className='flex flex-col justify-between sm:flex-row'>
					<div className='mb-8 '>
						<Logo size='h-12 md:h-16 lg:h-18' />
					</div>
					<div className='flex flex-col gap-5 w-full md:w-[30%]'>
						<h2 className='text-xl font-semibold lg:text-2xl'>Podstrony</h2>
						<div className='flex text-sm font-medium md:text-base'>
							<div className='flex flex-col justify-start w-1/2 gap-2 '>
								{footerNav.slice(0, 5).map(({ name, path }, index) => {
									return (
										<Link key={index} href={path}>
											{name}
										</Link>
									);
								})}
							</div>
							<div className='flex flex-col justify-start w-1/2 gap-2'>
								{footerNav.slice(5, 7).map(({ name, path }, index) => {
									return (
										<Link key={index} href={path}>
											{name}
										</Link>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div>
					<hr className='mt-10 mb-5 text-black/20 md:mt-15 lg:mt-25' />
				</div>
				<div className='flex flex-col justify-between gap-5 sm:flex-row'>
					<p>Strona wykonana przez Jakub Rafalski</p>
					<div className='flex gap-5 font-medium'>
						{SocialItems.map(({ name, path, icon }, index) => {
							return (
								<a key={index} href={path}>
									<div className='flex items-center gap-1'>
										{socialTranslate[icon]}
										{name}
									</div>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</footer>
	);
}
