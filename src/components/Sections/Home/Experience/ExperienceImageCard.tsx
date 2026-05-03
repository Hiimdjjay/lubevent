import Image from 'next/image';

type ImageCardProps = {
	imageSrc: string;
	alt: string;
	className?: string;
};

export function ExperienceImageCard({ imageSrc, alt, className }: ImageCardProps) {
	return (
		<div className={` relative w-full h-87.5 rounded-2xl overflow-hidden md:h-full ${className}`}>
			<Image src={imageSrc} alt={alt} placeholder='blur' fill className='object-cover' />
		</div>
	);
}
