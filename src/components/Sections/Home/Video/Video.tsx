'use client';

export function Video() {
	return (
		<section className=''>
			<div className='px-4 pt-20 md:px-5 md:pt-25 lg:px-7.5 lg:py-30'>
				<div className='relative rounded-2xl overflow-hidden px-12 py-18 md:h-110 lg:px-25 lg:h-180'>
					<video
						autoPlay
						muted
						loop
						playsInline
						className='absolute inset-0 w-full h-full object-cover'>
						<source src='/Aftermovie.mp4' type='video/mp4' />
					</video>
					<div className='absolute inset-0 bg-black/35'></div>
					<div className='max-w-325 m-auto w-full lg:px-7.5'>
						<h2 className='relative z-10 text-white text-xl font-semibold md:text-[32px] md:max-w-112 lg:max-w-155 lg:text-[44px]'>
							Każde wydarzenie zasługuje na coś wyjątkowego
							<span className='absolute -left-4 bottom-0 w-1 h-full bg-linear-to-b from-bg-btn-blue to-bg-btn-purple '></span>
						</h2>
					</div>
				</div>
			</div>
		</section>
	);
}
