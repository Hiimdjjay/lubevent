import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Wrapper } from '@/components/UI/Wrapper';
import { FAQList } from './FAQList';

export function FAQ() {
	return (
		<section className='py-20 md:py-25 lg:py-30 bg-white'>
			<Wrapper>
				<div className='flex flex-col justify-center gap-5'>
					<div className='flex flex-col items-center gap-5'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Potrzebujesz pomocy?</SectionLabel>
						<SectionTitle>FAQ</SectionTitle>
					</div>
					<FAQList />
				</div>
			</Wrapper>
		</section>
	);
}
