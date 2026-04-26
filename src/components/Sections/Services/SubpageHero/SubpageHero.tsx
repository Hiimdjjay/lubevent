import { MainTitle } from '@/components/UI/MainTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Wrapper } from '@/components/UI/Wrapper';
import { ServicesCards } from './ServicesCards';

export function SubpageHero() {
	return (
		<section className=' pt-30 pb-20 md:pt-45 md:pb-25 lg:pt-60 lg:pb-30'>
			<Wrapper>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col justify-center items-center gap-5'>
						<MainTitle textCenter>Nasze usługi</MainTitle>
						<div className='md:w-140'>
							<Subtitle textCenter>
								Zapewniamy pełen zakres usług eventowych,dzięki którym każde wydarzenie staje się wyjątkowym
								przeżyciem dla Ciebie i Twoich gości.
							</Subtitle>
						</div>
					</div>
					<ServicesCards />
				</div>
			</Wrapper>
		</section>
	);
}
