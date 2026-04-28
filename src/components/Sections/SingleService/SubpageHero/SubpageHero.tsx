import { MainTitle } from '@/components/UI/MainTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Wrapper } from '@/components/UI/Wrapper';
import Image from 'next/image';

export function SubpageHero() {
	return (
		<section className='pt-30 pb-20 md:pt-45 md:pb-25 lg:pt-60 lg:pb-30'>
			<Wrapper>
				<div>
					<div className='flex flex-col gap-5'>
						<MainTitle textCenter>Tytuł</MainTitle>
						<Subtitle textCenter>Podtytuł</Subtitle>
					</div>
					<div className=' w-full aspect-4/3'>
						{/* <Image src={src} alt={alt} fill className='object-cover' /> */}
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
