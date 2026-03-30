import Image from 'next/image';

type ImageComponent = {
	src: string;
};

export function ImageComponent({ src }: ImageComponent) {
	return (
		<div className='relative w-full aspect-3/4 md:aspect-square'>
			
			<Image src={src} fill alt='' className='object-cover' />
		</div>
	);
}
