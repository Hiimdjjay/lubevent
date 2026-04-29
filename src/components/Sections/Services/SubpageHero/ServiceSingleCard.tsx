import Image from 'next/image';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';

type CardProps = {
	title: string;
	subtitle: string;
	category: string;
	image: string;
	alt: string;
	path: string;
};

type Card = {
	card: CardProps;
};

export function ServiceSingleCard({ card: { title, subtitle, category, image, alt, path } }: Card) {
	return (
		<div className='flex flex-col justify-between gap-2 p-4 h-full rounded-2xl bg-white'>
			<div className='overflow-hidden relative flex flex-col items-end w-full p-3 aspect-4.5/3 rounded-xl md:'>
				<Image src={image} alt={alt} fill className='object-cover' />
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
