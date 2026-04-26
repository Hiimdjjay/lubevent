import { SingleImage } from '@/components/UI/SingleImage';

type ImageItem = {
	src: string;
	alt: string;
};

type CarouselTrackProps = {
	imageData: ImageItem[];
	className?: string;
};

export function CarouselTrack({ imageData, className }: CarouselTrackProps) {
	return (
		<div
			className={`${className}  flex gap-2 pr-2 w-max lg:flex-col lg:pr-0 lg:gap-5 lg:pt-5 lg:w-full `}>
			{imageData.map(({ src, alt }, index) => {
				return (
					<SingleImage
						key={index}
						src={src}
						alt={alt}
						className='h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'
					/>
				);
			})}
		</div>
	);
}
