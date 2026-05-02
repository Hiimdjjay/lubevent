import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { AchievementsCards } from './AchivementsCardList';
import { Wrapper } from '@/components/UI/Wrapper';

export function Achivements() {
	return (
		<section className='border-b border-black/20 pb-20 md:pb-25 lg:pb-30 bg-whiteSection'>
			<Wrapper>
				<div className='flex flex-col justify-between gap-5 lg:flex-row'>
					<div className='flex flex-col gap-3 md:gap-5 lg:max-w-100'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Zaufali nam</SectionLabel>
						<SectionTitle>
							Liczby mówią same <br className='' /> za siebie
						</SectionTitle>
					</div>
					<AchievementsCards />
				</div>
			</Wrapper>
		</section>
	);
}
