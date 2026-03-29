import { SingleImage } from '@/components/UI/SingleImage';
type ImageItem = {
	src: string;
	alt: string;
};

const imagesData: ImageItem[] = [
	{ src: '/LandingPage/conference-2-unsplash.png', alt: 'Description' },
	{ src: '/LandingPage/Premiere.png', alt: 'Description' },
	{ src: '/LandingPage/Concert-unsplash.png', alt: 'Description' },
	{ src: '/LandingPage/Corporate-event-2-ChatGPT.png', alt: 'Description' },
	{ src: '/LandingPage/Singer-unsplash.jpg', alt: 'Description' },
	{ src: '/LandingPage/outdoor-party.png', alt: 'Description' },
	{ src: '/LandingPage/Group-of-people-Chat-GPT.png', alt: 'Description' },
	{ src: '/LandingPage/Group-of-people-ChatGPT.png', alt: 'Description' }
];

const repeatedImages = [...imagesData, ...imagesData];

export function AboutUsCarousel() {
	return (
		<div className='flex'>
			<div className='flex h-65 lg:h-140 aboutUsCarousel'>
				{repeatedImages.map(({ src, alt }, index) => {
					return (
						<SingleImage
							key={index}
							src={src}
							alt={alt}
							className='h-full w-80 lg:w-180 mr-3 lg:mr-5 '></SingleImage>
					);
				})}
			</div>
			<div className='aria-disabled flex h-65 lg:h-140 aboutUsCarousel'>
				{repeatedImages.map(({ src, alt }, index) => {
					return (
						<SingleImage
							key={index}
							src={src}
							alt={alt}
							className='h-full w-80 lg:w-180 mr-3 lg:mr-5 '></SingleImage>
					);
				})}
			</div>
		</div>
	);
}
