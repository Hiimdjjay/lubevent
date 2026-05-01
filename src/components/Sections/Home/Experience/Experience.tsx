import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { ExperienceCardList } from './ExperienceCardList';
import { Wrapper } from '@/components/UI/Wrapper';

export function Experience() {
	return (
		<section className='bg-bg-sectionLabel py-20 md:py-25 lg:py-30'>
			<Wrapper>
				<div className='flex flex-col w-full items-center gap-5'>
					<div className='flex flex-col w-full items-center gap-3'>
						<SectionLabel bgColor='bg-white'>Nasze doświadczenie</SectionLabel>
						<div className='lg:w-[90%]'>
							<SectionTitle textCenter smallFont>
								Najlepsza impreza to taka, na której wszystko działa — a Ty nie musisz się o nic martwić. To
								nie tylko światło, dźwięk i logistyka, ale pewność, że każdy element jest dopracowany w
								najmniejszym szczególe.
							</SectionTitle>
						</div>
					</div>
					<ExperienceCardList />
				</div>
			</Wrapper>
		</section>
	);
}
