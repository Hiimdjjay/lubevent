import Image from 'next/image';
import { StaticImageData } from 'next/image';

type SingleImageProps = {
	imageSrc: StaticImageData;
	alt: string;
};

export function HeroImage({ imageSrc, alt }: SingleImageProps) {
	return (
		<div className='overflow-hidden relative shrink-0 rounded-2xl  h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'>
			<Image src={imageSrc} alt={alt} placeholder='blur' fill className='object-cover' />
		</div>
	);
}
