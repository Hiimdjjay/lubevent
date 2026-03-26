'use client';

export function Video() {
	return (
		<section className=''>
			<div className='px-4 pt-20 md:px-5 md:py-25 lg:px-7.5 lg:py-30'>
				<div className='relative rounded-2xl overflow-hidden px-12 py-15'>
					<video autoPlay muted loop playsInline className='absolute inset-0 '>
						<source src='/Aftermovie.mp4' type='video/mp4' />
					</video>
					<div className='absolute inset-0 bg-black/35'></div>
					<h2 className='relative z-10 text-white text-xl font-semibold'>
						Każde wydarzenie zasługuje na coś wyjątkowego
						<span className='absolute -left-4 bottom-0 w-1 h-full bg-linear-to-b from-bg-btn-blue to-bg-btn-purple '></span>
					</h2>
				</div>
			</div>
		</section>
	);
}
