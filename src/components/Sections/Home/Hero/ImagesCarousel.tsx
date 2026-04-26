import { imagesHero1, imagesHero2 } from '@/constans/imagesData';
import { CarouselTrack } from './CarouselTrack';

const repeatCarousel1 = [...imagesHero1, ...imagesHero1];
const repeatCarousel2 = [...imagesHero2, ...imagesHero2];

export function ImagesCarousel() {
	return (
		<div className='overflow-hidden w-full max-h-215 flex flex-col gap-4 lg:gap-10 lg:flex-row  '>
			<div className='flex lg:flex-col lg:w-full'>
				<CarouselTrack imageData={repeatCarousel1} className='animate-carousel-1' />
				<CarouselTrack imageData={repeatCarousel1} className='animate-carousel-1 aria-hidden' />
			</div>
			<div className='flex lg:flex-col  lg:w-full'>
				<CarouselTrack imageData={repeatCarousel2} className='animate-carousel-2' />
				<CarouselTrack imageData={repeatCarousel2} className='animate-carousel-2 aria-hidden' />
			</div>
		</div>
	);
}
