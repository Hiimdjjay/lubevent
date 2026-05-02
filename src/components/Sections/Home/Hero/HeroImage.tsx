import Image from 'next/image';

type SingleImageProps = {
	src: string;
	alt: string;
};

export function HeroImage({ src, alt }: SingleImageProps) {
	return (
		<div className='overflow-hidden relative shrink-0 rounded-2xl  h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'>
			<Image className='object-cover' src={src} fill alt={alt} />
		</div>
	);
}
