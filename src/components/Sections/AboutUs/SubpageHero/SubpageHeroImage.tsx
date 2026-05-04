import Image, { StaticImageData } from 'next/image';

type SingleImageProps = {
	imageSrc: StaticImageData;
	alt: string;
};

export function SubpageHeroImage({ imageSrc, alt }: SingleImageProps) {
	return (
		<div className='relative shrink-0 rounded-2xl overflow-hidden h-full w-80 md:w-115 lg:w-180 mr-3 lg:mr-5 '>
			<Image src={imageSrc} alt={alt} fill className='object-cover' placeholder='blur' />
		</div>
	);
}
