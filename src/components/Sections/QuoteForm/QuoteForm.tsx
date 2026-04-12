import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Wrapper } from '@/components/UI/Wrapper';
import { Form } from './Form';

export function QuoteForm() {
	return (
		<section className='py-30 md:py-45 lg:py-60 '>
			<Wrapper>
				<div className="flex flex-col gap-8">
					<div className='flex flex-col justify-center items-center'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Darmowa wycena</SectionLabel>
						<SectionTitle>Sprawdź wstępny koszt</SectionTitle>
					</div>
					<Form />
				</div>
			</Wrapper>
		</section>
	);
}
