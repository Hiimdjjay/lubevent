import Image from 'next/image';

type ImageComponent = {
	src: string;
};

export function ImageComponent({ src }: ImageComponent) {
	return (
		<div className='relative h-20 w-20'>
			<Image src={src} fill alt='' />
		</div>
	);
}
