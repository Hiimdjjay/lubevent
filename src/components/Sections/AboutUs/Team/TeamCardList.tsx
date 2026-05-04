import Image from 'next/image';
import { TeamSocialMedia } from './TeamSocialMedia';
import { TEAM_DATA } from '@/constants/aboutUsData';

export function TeamCards() {
	return (
		<div className='grid grid-cols-2 grid-rows-2 gap-4 lg:grid-cols-4 lg:grid-rows-1'>
			{TEAM_DATA.map(({ id, name, jobTitle, imageSrc, alt, socialMediaURLs }) => {
				return (
					<div key={id} className='relative '>
						<div className='relative w-full aspect-square rounded-3xl overflow-hidden'>
							<Image src={imageSrc} alt={alt} placeholder='blur' fill className='object-cover' />
						</div>
						<div className='p-2'>
							<h3 className='font-semibold text-xl'>{name}</h3>
							<p className='font-medium text-black/70'>{jobTitle}</p>
						</div>
						<TeamSocialMedia socialMedia={socialMediaURLs} />
					</div>
				);
			})}
		</div>
	);
}
