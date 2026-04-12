import Image from 'next/image';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { OfferAccordion } from './OfferAccordion';
import { PrimaryButton } from '@/components/UI/PrimaryButton';
import { Wrapper } from '@/components/UI/Wrapper';

export function Offer() {
	return (
		<section className='bg-black'>
			<Wrapper noPaddingX>
				<div className='flex flex-col lg:flex-row'>
					<div className='relative min-h-70 w-full md:min-h-120 lg:max-w-1/2'>
						<Image
							src='/Photos/conference-3-unsplash.jpg'
							alt='Realizacja eventu, scena i oświetlenie'
							fill
							className='object-cover'
						/>
					</div>
					<div className='flex flex-col gap-10 px-4 py-7 md:gap-13 md:px-5 md:py-10 lg:pr-7.5 lg:p-23 '>
						<div className='flex flex-col gap-3'>
							<SectionLabel bgColor='bg-bg-sectionLabel'>Co oferujemy</SectionLabel>
							<SectionTitle textColor>Oferujemy szeroki zakres usług.</SectionTitle>
						</div>
						<OfferAccordion />
						<PrimaryButton link='/oferta'>Sprawdź ofertę</PrimaryButton>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
