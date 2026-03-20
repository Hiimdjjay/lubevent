import { SocialItems } from '../../../constans/navigation';
import { Facebook, Instagram } from 'lucide-react';

const socialTranslate = {
	instagram: <Instagram size={18} />,
	facebook: <Facebook size={18} />
};

export function SocialForFooter() {
	return (
		<div className='flex gap-5 font-medium'>
			{SocialItems.map(({ name, path, icon }, index) => {
				return (
					<a key={index} href={path}>
						<div className='flex items-center gap-1'>
							{socialTranslate[icon]}
							{name}
						</div>
					</a>
				);
			})}
		</div>
	);
}
