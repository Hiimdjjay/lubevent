import { IMAGES_ABOUTUS_DATA } from '@/constants/aboutUsData';
import { SubpageHeroImage } from './SubpageHeroImage';

const REPEATED_IMAGES_DATA = [...IMAGES_ABOUTUS_DATA, ...IMAGES_ABOUTUS_DATA];

export function SubpageHeroCarousel() {
	return (
		<div className='flex h-65 md:h-90 lg:h-135'>
			<div className='flex aboutUsCarousel'>
				{REPEATED_IMAGES_DATA.map((singleImage, index) => {
					return <SubpageHeroImage key={index} {...singleImage} />;
				})}
			</div>
			<div className='aria-disabled flex aboutUsCarousel'>
				{REPEATED_IMAGES_DATA.map((singleImage, index) => {
					return <SubpageHeroImage key={index} {...singleImage} />;
				})}
			</div>
		</div>
	);
}
