import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { TeamCards } from './TeamCards';
import { Subtitle } from '@/components/UI/Subtitle';

export function Team() {
	return (
		<section>
			<div className='max-w-325 w-full m-auto p-4 py-20 md:p-5 md:py-25 lg:p-7.5 lg:py-30'>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3 md:gap-5'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Zespół</SectionLabel>
						<SectionTitle>Eksperci stojący za Twoim wydarzeniem</SectionTitle>
						<Subtitle>asdfasdf</Subtitle>
					</div>
					<TeamCards />
				</div>
			</div>
		</section>
	);
}
