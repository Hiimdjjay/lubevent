import { SocialItems } from '../../constans/Header';

export function SocialMedias() {
	return (
		<div className='flex justify-center gap-4'>
			{SocialItems.map(({ name, path, icon }) => (
				<a key={name} href={path} target='_blank' rel='noopener noreferrer'>
					{icon}
				</a>
			))}
		</div>
	);
}
