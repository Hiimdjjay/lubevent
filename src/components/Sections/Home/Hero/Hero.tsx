import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';
import { MainTitle } from '../../../UI/MainTitle';
import { HeroCarousel } from './HeroCarousel';
import { Wrapper } from '@/components/UI/Wrapper';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { PulsingDot } from '@/components/UI/PulsingDot';
import { Subtitle } from '@/components/UI/Subtitle';

export function Hero() {
	return (
		<section className='bg-hero-pattern pt-30 pb-20 md:pt-45 md:pb-25 lg:pt-0 lg:pb-0 lg:px-7.5 '>
			<Wrapper noPaddingX>
				<div className='grid grid-cols-1 items-center gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2'>
					<div className='flex flex-col justify-start gap-3 md:gap-4 px-4 md:px-5 lg:px-0'>
						<SectionLabel bgColor='bg-white'>
							<PulsingDot />
							Dostępne terminy w tym roku!
						</SectionLabel>
						<MainTitle>
							Twoje wydarzenie. <br /> Nasza realizacja.
						</MainTitle>
						<Subtitle>
							Z pasją budujemy <span className='hidden md:inline'>niepowtarzalny</span> klimat,{' '}
							<br className='hidden md:block' /> który na długo pozostaje w pamięci naszych gości.
						</Subtitle>
						<div className='flex justify-start align-center flex-wrap gap-2 mt-2 lg:gap-4'>
							<PrimaryButton path='/formularz'>Darmowa wycena</PrimaryButton>
							<SecondaryButton path='/uslugi' arrowRight>
								Sprawdź ofertę
							</SecondaryButton>
						</div>
					</div>
					<HeroCarousel />
				</div>
			</Wrapper>
		</section>
	);
}
