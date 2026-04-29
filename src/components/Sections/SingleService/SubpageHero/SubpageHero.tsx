import { MainTitle } from '@/components/UI/MainTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Wrapper } from '@/components/UI/Wrapper';
import Image from 'next/image';

export function SubpageHero({ subpageData: { title, subtitle, image, alt } }) {
	return (
		<section className='pt-30 pb-10 md:pt-45 md:pb-12 lg:pt-60 lg:pb-15'>
			<Wrapper>
				<div className='flex flex-col gap-5 md:gap-8 lg:gap-10'>
					<div className='flex flex-col gap-5'>
						<MainTitle textCenter>{title}</MainTitle>
						<Subtitle textCenter>{subtitle}</Subtitle>
					</div>
					<div className='relative w-full aspect-6/3 rounded-3xl overflow-hidden'>
						<Image src={image} alt={alt} fill className='object-cover' />
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
