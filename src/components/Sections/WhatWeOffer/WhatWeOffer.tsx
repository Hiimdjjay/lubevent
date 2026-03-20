import Image from 'next/image';

import Conference from '../../../../public/LandingPage/conference-2-unsplash.png';
import Conference2 from '../../../../public/LandingPage/Premiere.png';
import Gala from '../../../../public/LandingPage/Concert-unsplash.png';
import Corporate from '../../../../public/LandingPage/Corporate-event-2-ChatGPT.png';
import Singer from '../../../../public/LandingPage/Singer-unsplash.jpg';
import Outdoor from '../../../../public/LandingPage/outdoor-party.png';
import People from '../../../../public/LandingPage/Group-of-people-Chat-GPT .png';
import People2 from '../../../../public/LandingPage/Group-of-people-ChatGPT.png';
import Conference3 from '../../../../public/LandingPage/conference-grok.png';
import Newlyweds from '../../../../public/LandingPage/newlyweds-unsplash.png';
import Weddingparty from '../../../../public/LandingPage/wedding-party.webp';
import Corporate2 from '../../../../public/LandingPage/Corporate-event-ChatGPT.png';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { OfferAccordion } from './OfferAccordion';
import { PrimaryButton } from '@/components/UI/PrimaryButton';

export function WhatWeOffer() {
	return (
		<section className='bg-black'>
			<div className='flex flex-col max-w-325 m-auto lg:flex-row'>
				<div className='relative min-h-70 w-full md:min-h-120 lg:max-w-1/2'>
					<Image
						src={Corporate2}
						alt='Realizacja eventu, scena i oświetlenie'
						fill
						className='object-cover'
					/>
				</div>
				<div className='flex flex-col p-4 py-7 gap-10 md:gap-13 md:p-5 md:py-10 lg:pr-7.5 lg:p-23'>
					<div className='flex flex-col gap-3'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Co oferujemy</SectionLabel>
						<SectionTitle textColor>Oferujemy szeroki zakres usług.</SectionTitle>
					</div>
					<OfferAccordion />
					<PrimaryButton link='/oferta'>Sprawdź ofertę</PrimaryButton>
				</div>
			</div>
		</section>
	);
}
