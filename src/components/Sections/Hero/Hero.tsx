import { ImagesCarousel } from '@/components/Sections/Hero/ImagesCarousel';
import { PrimaryButton } from '@/components/UI/PrimaryButton';
import { SecondaryButton } from '@/components/UI/SecondaryButton';
import { HeroLabel } from '@/components/Sections/Hero/HeroLabel';
import { MainTitle } from './MainTitle';

export function Hero() {
	return (
		<section className='bg-bg-hero pb-20 lg:px-7.5 lg:pb-0 '>
			<div className='max-w-325  w-full m-auto '>
				<div className='grid grid-cols-1 items-center gap-8 md:gap-10 lg:gap-12 lg:grid-cols-2 '>
					<div className='flex flex-col justify-start pt-30 px-4 gap-4 md:gap-3 md:px-5 md:pt-44 lg:pt-0 lg:px-0'>
						<HeroLabel>Dostępne terminy w tym roku!</HeroLabel>
						<MainTitle />
						<h2 className='text-subtitle md:text-lg'>
							Z pasją budujemy niepowtarzalny klimat, <br className='hidden md:block' />{' '}
							który na długo pozostaje w pamięci naszych gości.
						</h2>
						<div className='flex justify-start align-center mt-2 lg:gap-4'>
							<PrimaryButton>Zacznij Współpracę</PrimaryButton>
							<SecondaryButton>Sprawdź ofertę</SecondaryButton>
						</div>
					</div>
					<ImagesCarousel />
				</div>
			</div>
		</section>
	);
}
