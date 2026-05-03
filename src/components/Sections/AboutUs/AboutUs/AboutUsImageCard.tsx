import Image, { StaticImageData } from 'next/image';
import dominikBerwertzImg from '@/assets/photos/team/domonik-berwertz.jpg';

type ImageCardProps = {
	src: StaticImageData;
	alt: string;
	quote: string;
};

export function AboutUsImageCard({ src, alt, quote }: ImageCardProps) {
	return (
		<div className='flex flex-col justify-end relative w-full h-85 p-5 rounded-2xl overflow-hidden lg:h-108'>
			<Image src={src} fill alt={alt} className='object-cover' />
			<div className=' flex flex-col gap-4 bg-white p-5 rounded-2xl z-1'>
				<p className='font-medium lg:text-lg'>{quote}</p>
				<div className='flex items-center gap-3 text-sm font-medium '>
					<div className='relative w-9 h-9 rounded-full overflow-hidden '>
						<Image
							src={dominikBerwertzImg}
							width={50}
							height={50}
							alt='Dominik Berwertz - CEO'
							className='object-cover object-top scale-130'
						/>
					</div>
					<p className='text-black/70 text-sm font-semibold'>Dominik Berwertz, Founder & CEO</p>
				</div>
			</div>
		</div>
	);
}
