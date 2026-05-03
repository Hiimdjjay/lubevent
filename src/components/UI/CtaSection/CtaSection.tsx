import { Wrapper } from '@/components/UI/Wrapper';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';
import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import Image from 'next/image';
import BACKGROUND from '../../../../public/photos/hero/conference-pexels.jpg';

type CtaSectionProps = {
	primaryText: string;
	primaryPath: string;
	secondaryText: string;
	secondaryPath: string;
};

export function CtaSection({ primaryText, primaryPath, secondaryText, secondaryPath }: CtaSectionProps) {
	return (
		<section className='relative py-20 md:py-25 lg:py-30'>
			<Image
				src={BACKGROUND}
				alt='Koncert - tło sekcji kontaktowej'
				placeholder='blur'
				fill
				className='object-cover -z-2'
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
						<PrimaryButton path={primaryPath}>{primaryText}</PrimaryButton>
						<SecondaryButton textWhite arrowRight path={secondaryPath}>
							{secondaryText}
						</SecondaryButton>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
