import { SingleImage } from './SingleImage';
import Conference from '../../../../../public/LandingPage/conference-2-unsplash.png';
import Conference2 from '../../../../../public/LandingPage/Premiere.png';
import Gala from '../../../../../public/LandingPage/Concert-unsplash.png';
import Corporate from '../../../../../public/LandingPage/Corporate-event-2-ChatGPT.png';
import Singer from '../../../../../public/LandingPage/Singer-unsplash.jpg';
import Outdoor from '../../../../../public/LandingPage/outdoor-party.png';
import People from '../../../../../public/LandingPage/Group-of-people-Chat-GPT .png';
import People2 from '../../../../../public/LandingPage/Group-of-people-ChatGPT.png';
import Conference3 from '../../../../../public/LandingPage/conference-grok.png';
import Newlyweds from '../../../../../public/LandingPage/newlyweds-unsplash.png';
import Weddingparty from '../../../../../public/LandingPage/wedding-party.webp';
import Corporate2 from '../../../../../public/LandingPage/Corporate-event-ChatGPT.png';

const images = [
	{ name: 'Corporate', src: Corporate },
	{ name: 'Gala', src: Gala },
	{ name: 'Concert', src: Conference },
	{ name: 'People2', src: People2 },
	{ name: 'Outdoor', src: Outdoor },
	{ name: 'Conference2', src: Conference2 }
];

const images2 = [
	{ name: 'Weddingparty', src: Weddingparty },
	{ name: 'Newlyweds', src: Newlyweds },
	{ name: 'Corporate2', src: Corporate2 },
	{ name: 'Singer', src: Singer },
	{ name: 'Conference3', src: Conference3 },
	{ name: 'People', src: People }
];



const imagesForCarousel = [...images, ...images];
const imagesForCarousel2 = [...images2, ...images2];

export function ImagesCarousel() {
	return (
		<div className='overflow-hidden w-full max-h-190 flex flex-col gap-4 lg:gap-10 lg:flex-row  '>
			<div className='flex lg:flex-col lg:w-full'>
				<div className='flex gap-2 pr-2 w-max animate-carousel-1 lg:flex-col lg:pr-0 lg:gap-5 lg:pt-5  lg:w-full'>
					{imagesForCarousel.map(({ name, src }, index) => {
						return <SingleImage key={index} src={src} name={name} />;
					})}
				</div>
				<div className='aria-hidden flex gap-2 pr-2 w-max animate-carousel-1 lg:flex-col lg:pr-0  lg:gap-5  lg:w-full'>
					{imagesForCarousel.map(({ name, src }, index) => {
						return <SingleImage key={index} src={src} name={name} />;
					})}
				</div>
			</div>
			<div className='flex lg:flex-col  lg:w-full'>
				<div className='flex gap-2 pr-2 w-max animate-carousel-2 lg:flex-col lg:pr-0  lg:gap-5 lg:pt-5  lg:w-full'>
					{imagesForCarousel2.map(({ name, src }, index) => {
						return <SingleImage key={index} src={src} name={name} />;
					})}
				</div>
				<div className='aria-hidden flex gap-2 pr-2 w-max  animate-carousel-2 lg:flex-col lg:pr-0  lg:gap-5 lg:pt-5  lg:w-full'>
					{imagesForCarousel2.map(({ name, src }, index) => {
						return <SingleImage key={index} src={src} name={name} />;
					})}
				</div>
			</div>
		</div>
	);
}
