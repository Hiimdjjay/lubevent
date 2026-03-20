import Image, { StaticImageData } from 'next/image';

type ImgCardProps = {
	src: StaticImageData;
	alt: string;
};

export function ImgCard({ src, alt }: ImgCardProps) {
	return (
		<div className='relative w-full h-70 rounded-2xl  overflow-hidden '>
			<Image src={src} className='object-cover object-top' fill alt={alt} />
		</div>
	);
}
