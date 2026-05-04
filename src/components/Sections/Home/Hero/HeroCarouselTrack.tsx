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
	isClone?: boolean;
};

export function HeroCarouselTrack({ imagesData, animationClass, isClone }: CarouselTrackProps) {
	return (
		<div
			aria-hidden={isClone ? 'true' : undefined}
			className={`${animationClass}  flex gap-2 pr-2 w-max lg:flex-col lg:pr-0 lg:gap-5 lg:pt-5 lg:w-full `}>
			{imagesData.map(({ imageSrc, alt }, index) => {
				return <HeroImage key={index} imageSrc={imageSrc} alt={alt} eager={isClone} />;
			})}
		</div>
	);
}
