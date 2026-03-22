import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { CardsLayout } from './CardsLayout';

export function Experience() {
	return (
		<section className='bg-bg-sectionLabel'>
			<div className='max-w-325 mx-auto w-full px-4 py-20 md:px-5 md:py-25 lg:px-7.5 lg:py-30'>
				<div className='flex flex-col w-full items-center gap-5'>
					<div className='flex flex-col w-full items-center gap-3'>
						<SectionLabel bgColor='bg-white'>Nasze doświadczenie</SectionLabel>
						<SectionTitle textCenter smallFont>
							Najlepsza impreza to taka, na której wszystko działa — a Ty nie musisz się o
							nic martwić. To nie tylko światło, dźwięk i logistyka, ale pewność, że każdy
							element jest dopracowany w najmniejszym szczególe.
						</SectionTitle>
					</div>
					<CardsLayout />
				</div>
			</div>
		</section>
	);
}
