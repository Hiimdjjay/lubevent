import { SOCIAL_ITEMS } from '../../../constants/navigationData';
import { Facebook, Instagram } from 'lucide-react';

const icons = {
	instagram: <Instagram className='text-black/80 w-6.5 h-auto md:w-7.5' />,
	facebook: <Facebook className='text-black/80 w-6.5 h-auto md:w-7.5' />
};

export function NavSocialMedia() {
	return (
		<div className='flex justify-center gap-4'>
			{SOCIAL_ITEMS.map(({ name, path, icon }) => (
				<a key={name} href={path} target='_blank' rel='noopener noreferrer'>
					{icons[icon]}
				</a>
			))}
		</div>
	);
}
