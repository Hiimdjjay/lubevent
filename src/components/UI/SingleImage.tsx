import Image from 'next/image';

type SingleImageProps = {
	src: string;
	alt: string;
	className: string;
};

export function SingleImage({ src, alt, className }: SingleImageProps) {
	return (
		<div className={`relative shrink-0 rounded-2xl overflow-hidden ${className}`}>
			<Image className='object-cover' src={src} fill alt={alt} />
		</div>
	);
}
