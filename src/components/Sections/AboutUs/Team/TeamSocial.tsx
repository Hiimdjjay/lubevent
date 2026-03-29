import Image from 'next/image';
import Link from 'next/link';

type TeamSocialProps = {
	socialMediaURLs: {
		facebook: string;
		instagram: string;
	};
};

export function TeamSocial({ socialMediaURLs }: TeamSocialProps) {
	return (
		<div className='flex flex-col items-center gap-4 absolute top-0 left-0 w-11 bg-white p-3 rounded-br-xl'>
			<div className='flex justify-center items-center bg-bg-sectionLabel w-6 h-6 rounded hover:bg-linear-to-r hover:from-bg-btn-blue hover:to-bg-btn-purple transition-colors duration-300'>
				<Link href={socialMediaURLs.facebook} target='_blank'>
					<Image src='/Icons/facebook-grey.svg' width={16} height={16} alt='facebook' />
				</Link>
			</div>
			<div className='flex justify-center items-center bg-bg-sectionLabel w-6 h-6 rounded hover:bg-linear-to-r hover:from-bg-btn-blue hover:to-bg-btn-purple transition-colors duration-300 '>
				<Link href={socialMediaURLs.instagram} target='_blank'>
					<Image
						src='/Icons/instagram-stroke-grey.svg'
						width={16}
						height={16}
						alt='facebook'
					/>
				</Link>
			</div>
		</div>
	);
}
