import { SingleImage } from '../../../UI/SingleImage';

const images1 = [
	{ id: 1, src: '/LandingPage/Corporate-event-2-ChatGPT.png', alt: 'Description' },
	{ id: 2, src: '/LandingPage/Concert-unsplash.png', alt: 'Description' },
	{ id: 3, src: '/LandingPage/conference-2-unsplash.png', alt: 'Description' },
	{ id: 4, src: '/LandingPage/Group-of-people-ChatGPT.png', alt: 'Description' },
	{ id: 5, src: '/LandingPage/outdoor-party.png', alt: 'Description' },
	{ id: 6, src: '/LandingPage/Premiere.png', alt: 'Description' }
];

const images2 = [
	{ id: 1, src: '/LandingPage/wedding-party.webp', alt: 'Description' },
	{ id: 2, src: '/LandingPage/newlyweds-unsplash.png', alt: 'Description' },
	{ id: 3, src: '/LandingPage/Corporate-event-ChatGPT.png', alt: 'Description' },
	{ id: 4, src: '/LandingPage/Singer-unsplash.jpg', alt: 'Description' },
	{ id: 5, src: '/LandingPage/conference-grok.png', alt: 'Description' },
	{ id: 6, src: '/LandingPage/Group-of-people-Chat-GPT.png', alt: 'Description' }
];

const repeatCarousel1 = [...images1, ...images1];
const repeatCarousel2 = [...images2, ...images2];

export function ImagesCarousel() {
	return (
		<div className='overflow-hidden w-full max-h-190 flex flex-col gap-4 lg:gap-10 lg:flex-row  '>
			<div className='flex lg:flex-col lg:w-full'>
				<div className='flex gap-2 pr-2 w-max animate-carousel-1 lg:flex-col lg:pr-0 lg:gap-5 lg:pt-5 lg:w-full'>
					{repeatCarousel1.map(({ src, alt }, index) => {
						return (
							<SingleImage
								key={index}
								src={src}
								alt={alt}
								className='h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'
							/>
						);
					})}
				</div>
				<div className='aria-hidden flex gap-2 pr-2 w-max animate-carousel-1 lg:flex-col lg:pr-0 lg:gap-5 lg:w-full'>
					{repeatCarousel1.map(({ src, alt }, index) => {
						return (
							<SingleImage
								key={index}
								src={src}
								alt={alt}
								className='h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'
							/>
						);
					})}
				</div>
			</div>
			<div className='flex lg:flex-col  lg:w-full'>
				<div className='flex gap-2 pr-2 w-max animate-carousel-2 lg:flex-col lg:pr-0  lg:gap-5 lg:pt-5  lg:w-full'>
					{repeatCarousel2.map(({ src, alt }, index) => {
						return (
							<SingleImage
								key={index}
								src={src}
								alt={alt}
								className='h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'
							/>
						);
					})}
				</div>
				<div className='aria-hidden flex gap-2 pr-2 w-max  animate-carousel-2 lg:flex-col lg:pr-0  lg:gap-5 lg:pt-5  lg:w-full'>
					{repeatCarousel2.map(({ src, alt }, index) => {
						return (
							<SingleImage
								key={index}
								src={src}
								alt={alt}
								className='h-36 w-50 md:h-50 md:w-70 lg:h-90 lg:w-full'
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
