import { Wrapper } from '@/components/UI/Wrapper';

export function Video() {
	return (
		<section className='pt-20 md:pt-25 lg:pt-30 bg-whiteSection'>
			<Wrapper noMargin>
				<div className='relative rounded-2xl overflow-hidden px-12 py-18 md:h-110 lg:px-25 lg:h-180'>
					<video autoPlay muted loop playsInline className='absolute inset-0 w-full h-full object-cover'>
						<source src='/Video/Aftermovie.mp4' type='video/mp4' />
					</video>
					<div className='absolute inset-0 bg-black/35'></div>
					<div className='max-w-325 m-auto w-full lg:px-7.5'>
						<h2 className='relative z-10 text-white text-xl font-semibold md:text-[32px] md:max-w-md lg:max-w-155 lg:text-[44px]'>
							Każde wydarzenie zasługuje na coś wyjątkowego
							<span className='absolute -left-4 bottom-0 w-1 h-full bg-linear-to-b from-bg-btn-blue to-bg-btn-purple '></span>
						</h2>
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
