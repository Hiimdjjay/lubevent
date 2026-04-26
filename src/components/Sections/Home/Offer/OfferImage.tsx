import Image from 'next/image';

export function OfferImage() {
	return (
		<div className='relative min-h-70 w-full md:min-h-120 lg:max-w-1/2'>
			<Image
				src='/Photos/image.jpg'
				alt='Realizacja eventu, scena i oświetlenie'
				fill
				className='object-cover object-[50%_65%]'
			/>
		</div>
	);
}
