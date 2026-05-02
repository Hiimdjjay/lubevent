import Image from 'next/image';

type SingleImageProps = {
	src: string;
	alt: string;
};

export function SubpageHeroImage({ src, alt }: SingleImageProps) {
	return (
		<div className='relative shrink-0 rounded-2xl overflow-hidden h-full w-80 md:w-115 lg:w-180 mr-3 lg:mr-5 '>
			<Image className='object-cover' src={src} fill alt={alt} />
		</div>
	);
}
