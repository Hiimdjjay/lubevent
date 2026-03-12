import Image from 'next/image';
import Conference from '../../../public/LandingPage/conference-2-unsplash.png';
import Gala from '../../../public/LandingPage/Concert-unsplash.png';
import Corporate from '../../../public/LandingPage/Corporate-event-2-ChatGPT.png';
import Singer from '../../../public/LandingPage/Singer-unsplash.jpg';

const images = [
	{ name: 'Corporate', src: Corporate, id: 3 },
	{ name: 'Gala', src: Gala, id: 1 },
	{ name: 'Concert', src: Conference, id: 2 },
	{ name: 'Singer', src: Singer, id: 4 }
];

export function ImagesCarousel() {
	return (
		<div>
			<div className='flex gap-2'>
				{images.map(({ name, src, id }) => {
					return (
						<div key={id} className='relative h-40 w-[200px]'>
							<Image
								className='rounded-xl '
								src={src}
								fill
								style={{ objectFit: 'cover' }}
								alt={name}
							/>
						</div>
					);
				})}
			</div>
			<div></div>
		</div>
	);
}
