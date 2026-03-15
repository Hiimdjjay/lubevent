import Image, { StaticImageData } from 'next/image';

type SingleImageProps = {
	name: string;
	src: StaticImageData;
};

export function SingleImage({ name, src }: SingleImageProps) {
	return (
		<div className='relative h-36 w-50 shrink-0 md:h-50 md:w-70 lg:h-90 lg:w-full rounded-2xl'>
			<Image className='rounded-2xl object-cover' src={src} fill alt={name} />
		</div>
	);
}
