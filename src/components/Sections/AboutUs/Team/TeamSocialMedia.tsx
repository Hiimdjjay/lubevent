import { Facebook } from '@/components/UI/Icons/Facebbok';
import { Instagram } from '@/components/UI/Icons/Instagram';

type TeamSocialProps = {
	socialMedia: {
		facebook: string;
		instagram: string;
	};
};

export function TeamSocialMedia({ socialMedia }: TeamSocialProps) {
	return (
		<div className='flex flex-col items-center gap-4 absolute top-0 left-0 w-11 bg-white p-3 rounded-br-xl md:p-5 md:gap-6 lg:p-3 lg:gap-4'>
			<a
				href={socialMedia.facebook}
				target='_blank'
				rel='noopener'
				className='flex justify-center items-center bg-bg-sectionLabel w-6 h-6 rounded hover:bg-linear-to-r hover:from-bg-btn-blue hover:to-bg-btn-purple transition-colors duration-300 md:w-8 md:h-8 lg:w-7 lg:h-7'>
				<Facebook size={20} />
			</a>
			<a
				href={socialMedia.instagram}
				target='_blank'
				rel='noopener'
				className='flex justify-center items-center bg-bg-sectionLabel w-6 h-6 rounded hover:bg-linear-to-r hover:from-bg-btn-blue hover:to-bg-btn-purple transition-colors duration-300 md:w-8 md:h-8 lg:w-7 lg:h-7'>
				<Instagram size={18} />
			</a>
		</div>
	);
}
