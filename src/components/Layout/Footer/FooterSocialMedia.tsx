import { Instagram } from '@/components/UI/Icons/Instagram';
import { Facebook } from '@/components/UI/Icons/Facebbok';
import { SOCIAL_ITEMS } from '../../../constants/navigationData';

const socialTranslate = {
	instagram: <Instagram size={18} />,
	facebook: <Facebook size={18}  />
};

export function FooterSocialMedia() {
	return (
		<div className='flex gap-5 font-medium'>
			{SOCIAL_ITEMS.map(({ name, path, icon }, index) => {
				return (
					<a key={index} href={path}>
						<div className='flex items-center gap-1.5'>
							{socialTranslate[icon]}
							{name}
						</div>
					</a>
				);
			})}
		</div>
	);
}
