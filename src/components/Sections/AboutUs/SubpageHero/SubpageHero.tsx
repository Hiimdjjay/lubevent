import { MainTitle } from '@/components/UI/MainTitle';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { AboutUsCarousel } from './AboutUsCarousel';
import { Wrapper } from '@/components/UI/Wrapper';

export function SubpageHero() {
	return (
		<section className=' overflow-hidden pt-30 pb-20 md:pt-45 md:pb-25 lg:pt-60 lg:pb-30'>
			<Wrapper noPaddingX>
				<div className='flex flex-col gap-5 md:gap-8 lg:gap-10'>
					<div className='flex flex-col justify-start px-4 gap-4 md:gap-3 md:px-5 lg:px-7.5 '>
						<SectionLabel bgColor='bg-white'>O nas</SectionLabel>
						<MainTitle>
							Poznaj zespół, który tworzy <br className='hidden md:inline' /> wyjątkowe
							wydarzenia
						</MainTitle>
					</div>
					<AboutUsCarousel></AboutUsCarousel>
				</div>
			</Wrapper>
		</section>
	);
}
