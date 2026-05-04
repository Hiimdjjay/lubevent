import { IMAGES_HERO_1, IMAGES_HERO_2 } from '@/constants/homeData';
import { HeroCarouselTrack } from './HeroCarouselTrack';


const repeatCarousel1 = [...IMAGES_HERO_1, ...IMAGES_HERO_1];
const repeatCarousel2 = [...IMAGES_HERO_2, ...IMAGES_HERO_2];

export function HeroCarousel() {
	return (
		<div className='overflow-hidden w-full max-h-215 flex flex-col gap-4 lg:gap-10 lg:flex-row  '>
			<div className='flex lg:flex-col lg:w-full'>
				<HeroCarouselTrack imagesData={repeatCarousel1} animationClass='animate-carousel-1' />
				<HeroCarouselTrack imagesData={repeatCarousel1} animationClass='animate-carousel-1' isClone />
			</div>
			<div className='flex lg:flex-col  lg:w-full'>
				<HeroCarouselTrack imagesData={repeatCarousel2} animationClass='animate-carousel-2' />
				<HeroCarouselTrack imagesData={repeatCarousel2} animationClass='animate-carousel-2' isClone />
			</div>
		</div>
	);
}
