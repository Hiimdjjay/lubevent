import { PrimaryButton } from '@/components/UI/PrimaryButton';
import { SecondaryButton } from '@/components/UI/SecondaryButton';
import { HeroLabel } from './HeroLabel';
import { MainTitle } from '../../../UI/MainTitle';
import { ImagesCarousel } from './ImagesCarousel';
import { Wrapper } from '@/components/UI/Wrapper';

export function SubpageHero() {
	return (
		<section className='bg-bg-hero pt-30 pb-20 md:pt-45 md:pb-25 lg:pt-0 lg:pb-0 lg:px-7.5'>
			<Wrapper noPaddingX>
				<div className='grid grid-cols-1 items-center gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2'>
					<div className='flex flex-col justify-start gap-3 md:gap-4 px-4 md:px-5 lg:px-0'>
						<HeroLabel>Dostępne terminy w tym roku!</HeroLabel>
						<MainTitle>
							Twoje wydarzenie. <br /> Nasza realizacja.
						</MainTitle>
						<h2 className='text-subtitle md:text-lg font-medium'>
							Z pasją budujemy niepowtarzalny klimat, <br className='hidden md:block' />{' '}
							który na długo pozostaje w pamięci naszych gości.
						</h2>
						<div className='flex justify-start align-center mt-2 lg:gap-4'>
							<PrimaryButton link='/formularz'>Darmowa wycena</PrimaryButton>
							<SecondaryButton href='/oferta' arrowRight>
								Sprawdź ofertę
							</SecondaryButton>
						</div>
					</div>
					<ImagesCarousel />
				</div>
			</Wrapper>
		</section>
	);
}
