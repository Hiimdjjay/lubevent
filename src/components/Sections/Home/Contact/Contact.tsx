import { PrimaryButton } from '@/components/UI/PrimaryButton';
import { SecondaryButton } from '@/components/UI/SecondaryButton';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import Image from 'next/image';
import BgImg from '../../../../../public/LandingPage/Concert-unsplash.png';

export function Contact() {
	return (
		<section className='relative'>
			<Image src={BgImg} fill className='object-cover -z-2' alt='Koncer - tło sekcji kontaktowej' />
			<div className='absolute inset-0 bg-black/70 -z-1'></div>

			<div className=' max-w-95 mx-auto w-full px-4 py-20 md:max-w-170 md:px-7 md:py-20  lg:py-30'>
				<div className='flex flex-col gap-3 items-center'>
					<SectionLabel bgColor='bg-white'>Zacznijmy współpracę</SectionLabel>
					<SectionTitle textCenter textColor>
						Zorganizujemy Twoje wydarzenie bez chaosu i niedomówień.
					</SectionTitle>
					<div className='flex flex-col justify-center items-center gap-y-3 mt-3 md:flex-row md:gap-x-5 md:mt-6'>
						<PrimaryButton link='/formularz'>Darmowa Wycena</PrimaryButton>
						<SecondaryButton textWhite href='/kontakt'>
							Skontaktuj się
						</SecondaryButton>
					</div>
				</div>
			</div>
		</section>
	);
}
