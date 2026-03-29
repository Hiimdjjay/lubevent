import Image from 'next/image';

const teamData = [
	{
		id: 1,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		src: '/Dominik-Berwertz.jpg',
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	},
	{
		id: 2,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		src: '/Dominik-Berwertz.jpg',
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	},
	{
		id: 3,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		src: '/Dominik-Berwertz.jpg',
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	},
	{
		id: 4,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		src: '/Dominik-Berwertz.jpg',
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	}
];

export function TeamCards() {
	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-4'>
			{teamData.map(({ id, name, jobTitle, src, alt }) => {
				return (
					<div key={id} className=''>
						<div className='relative w-full aspect-square rounded-3xl overflow-hidden'>
							<Image src={src} fill alt={alt} className='object-cover' />
						</div>
						<div className='p-2'>
							<h3 className='font-semibold text-xl'>{name}</h3>
							<p className='font-medium text-black/70'>{jobTitle}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
