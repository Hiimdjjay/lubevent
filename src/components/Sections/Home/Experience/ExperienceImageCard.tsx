import Image from 'next/image';

type ImageCardProps = {
	src: string;
	alt: string;
	className?: string;
};

export function ExperienceImageCard({ src, alt, className }: ImageCardProps) {
	return (
		<div className={` relative w-full h-87.5 rounded-2xl overflow-hidden md:h-full ${className}`}>
			<Image src={src} className='object-cover ' fill alt={alt} />
		</div>
	);
}
