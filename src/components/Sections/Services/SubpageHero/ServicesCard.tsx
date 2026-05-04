import Image, { StaticImageData } from 'next/image';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';

type ServiceProps = {
	id: number;
	title: string;
	subtitle: string;
	category: string;
	imageSrc: StaticImageData;
	alt: string;
	path: string;
};

export function ServicesCard({ title, subtitle, category, imageSrc, alt, path }: ServiceProps) {
	return (
		<div className='flex flex-col justify-between gap-2 p-4 h-full rounded-2xl bg-white'>
			<div className='overflow-hidden relative flex flex-col items-end w-full p-3 aspect-4.5/3 rounded-xl md:'>
				<Image src={imageSrc} alt={alt} placeholder='blur' fill className='object-cover' />
				<div className='px-2.5 py-1.5 z-2 rounded-full bg-white'>
					<span className='font-semibold text-black/70 text-sm'>{category}</span>
				</div>
			</div>
			<div className='flex flex-col justify-between gap-4 p-2 flex-1'>
				<div className='flex flex-col gap-1'>
					<h3 className='text-xl font-semibold'>{title}</h3>
					<p className='font-medium text-black/70'>{subtitle}</p>
				</div>
				<div className='self-center'>
					<SecondaryButton path={path} arrowRight>
						Dowiedz się więcej
					</SecondaryButton>
				</div>
			</div>
		</div>
	);
}
