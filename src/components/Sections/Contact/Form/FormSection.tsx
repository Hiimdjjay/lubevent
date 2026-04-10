import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Wrapper } from '@/components/UI/Wrapper';
import { FormComponent } from './FormComponent';

export function FormSection() {
	return (
		<section className='py-20 md:py-25 lg:py-30'>
			<Wrapper>
				<div className='flex flex-col items-center justify-center gap-5'>
					<div className='flex flex-col justify-center items-center gap-3'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Potrzebujesz pomocy?</SectionLabel>
						<SectionTitle>Masz pytania? Napisz do nas.</SectionTitle>
					</div>
					<FormComponent />
				</div>
			</Wrapper>
		</section>
	);
}
