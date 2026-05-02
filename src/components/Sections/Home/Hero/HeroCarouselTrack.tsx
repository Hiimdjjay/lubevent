import { HeroImage } from '@/components/Sections/Home/Hero/HeroImage';

type ImageItem = {
	id: number;
	src: string;
	alt: string;
};

type CarouselTrackProps = {
	imagesData: ImageItem[];
	className?: string;
};

export function HeroCarouselTrack({ imagesData, className }: CarouselTrackProps) {
	return (
		<div className={`${className}  flex gap-2 pr-2 w-max lg:flex-col lg:pr-0 lg:gap-5 lg:pt-5 lg:w-full `}>
			{imagesData.map(({ src, alt }, index) => {
				return <HeroImage key={index} src={src} alt={alt} />;
			})}
		</div>
	);
}
