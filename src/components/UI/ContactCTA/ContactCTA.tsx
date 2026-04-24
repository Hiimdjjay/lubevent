import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import Image from 'next/image';
import { Wrapper } from '../Wrapper';

export function ContactCTA() {
	return (
		<section className='relative py-20 md:py-30 lg:py-40'>
			<Image
				src='/Photos/Concert-unsplash.png'
				fill
				className='object-cover -z-2'
				alt='Koncer - tło sekcji kontaktowej'
			/>
			<div className='absolute inset-0 bg-black/70 -z-1'></div>
			<Wrapper>
				<div className='flex flex-col gap-3 items-center'>
					<SectionLabel bgColor='bg-white'>Zacznijmy współpracę</SectionLabel>
					<div className='max-w-90 md:max-w-100 lg:max-w-160'>
						<SectionTitle textCenter textColor>
							Zorganizujemy Twoje wydarzenie bez chaosu i niedomówień.
						</SectionTitle>
					</div>
					<div className='flex flex-col justify-center items-center gap-y-3 mt-3 md:flex-row md:gap-x-5 md:mt-6'>
						<PrimaryButton link='/formularz'>Darmowa Wycena</PrimaryButton>
						<SecondaryButton textWhite href='/kontakt'>
							Skontaktuj się
						</SecondaryButton>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
