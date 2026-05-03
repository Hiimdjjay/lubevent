import Image from 'next/image';
import CORPORATE_NETWORKING from '@/assets/photos/home/corporate-networking.jpg';

export function OfferImage() {
	return (
		<div className='relative min-h-70 w-full md:min-h-120 lg:max-w-1/2'>
			<Image
				src={CORPORATE_NETWORKING}
				alt='Realizacja eventu, scena i oświetlenie'
				placeholder='blur'
				fill
				className='object-cover object-[50%_65%]'
			/>
		</div>
	);
}
