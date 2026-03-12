import { ImagesCarousel } from '@/components/Landing-page/ImagesCarousel';
import { PrimaryButton } from '@/components/PrimaryButton/PrimaryButton';
import { SecondaryButton } from '@/components/SecondaryButton/SecondaryButton';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<section className='p-4 py-30'>
				<div className='grid gap-5'>
					<div className='flex flex-col justify-start gap-2 '>
						<div className='flex w-fit items-center gap-2 py-2 px-4 rounded-lg bg-white'>
							<span className='relative flex items-center justify-center h-3 w-3'>
								<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40 [animation-duration:2s]'></span>

								<span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-black'></span>
							</span>
							<p className='font-medium text-black/60'>Dostępne terminy w tym roku!</p>
						</div>
						<h1 className='text-[40px] font-extrabold'>
							Twoje wydarzenie.
							<br />
							Nasza realizacja.
						</h1>
						<h2 className='text-subtitle'>
							Z pasją i precyzją budujemy niepowtarzalny klimat, który na długo pozostaje
							w pamięci gości i sprawia, że każda chwila staje się wyjątkowa.
						</h2>
						<div className='flex justify-start align-center mt-2'>
							<PrimaryButton>Zacznij Współpracę</PrimaryButton>
							<SecondaryButton>Sprawdź ofertę</SecondaryButton>
						</div>
					</div>
					<ImagesCarousel />
				</div>
			</section>
		</main>
	);
}
