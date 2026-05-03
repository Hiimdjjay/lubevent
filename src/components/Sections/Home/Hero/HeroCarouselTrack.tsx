import { HeroImage } from '@/components/Sections/Home/Hero/HeroImage';
import { StaticImageData } from 'next/image';

type ImageItem = {
	id: number;
	imageSrc: StaticImageData;
	alt: string;
};

type CarouselTrackProps = {
	imagesData: ImageItem[];
	animationClass?: string;
};

export function HeroCarouselTrack({ imagesData, animationClass }: CarouselTrackProps) {
	return (
		<div
			className={`${animationClass}  flex gap-2 pr-2 w-max lg:flex-col lg:pr-0 lg:gap-5 lg:pt-5 lg:w-full `}>
			{imagesData.map(({ imageSrc, alt }, index) => {
				return <HeroImage key={index} imageSrc={imageSrc} alt={alt} />;
			})}
		</div>
	);
}
