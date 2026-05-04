import Image from 'next/image';
import { StaticImageData } from 'next/image';

type SingleImageProps = {
	imageSrc: StaticImageData;
	alt: string;
	eager?: boolean;
};

export function HeroImage({ imageSrc, alt, eager }: SingleImageProps) {
	return (
		<div className='overflow-hidden relative shrink-0 rounded-2xl h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'>
			{eager ? (
				<Image src={imageSrc} alt={alt} fill className='object-cover' loading='eager' />
			) : (
				<Image src={imageSrc} alt={alt} fill className='object-cover' placeholder='blur' />
			)}
		</div>
	);
}
