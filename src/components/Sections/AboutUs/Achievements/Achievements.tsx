import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { AchievementsCards } from './AchivementsCards';

export function Achivements() {
	return (
		<section className='border-b border-black/20'>
			<div className='max-w-325 w-full m-auto p-4 pb-20 md:p-5 md:pb-25 lg:p-7.5 lg:pb-30'>
				<div className='flex flex-col justify-between gap-5 lg:flex-row'>
					<div className='flex flex-col gap-3 md:gap-5 lg:max-w-100'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Zaufali nam</SectionLabel>
						<SectionTitle>
							Liczby mówią same <br className=''/> za siebie
						</SectionTitle>
					</div>
					<AchievementsCards />
				</div>
			</div>
		</section>
	);
}
