import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { TeamCards } from './TeamCardList';
import { Wrapper } from '@/components/UI/Wrapper';

export function Team() {
	return (
		<section className='py-20 md:py-25 lg:py-30 bg-whiteSection'>
			<Wrapper>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3 md:gap-5'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Zespół</SectionLabel>
						<SectionTitle>Eksperci stojący za Twoim wydarzeniem</SectionTitle>
					</div>
					<TeamCards />
				</div>
			</Wrapper>
		</section>
	);
}
