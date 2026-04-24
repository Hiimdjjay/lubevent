import { Wrapper } from '@/components/UI/Wrapper';
import { Form } from './Form';

export function MultiStepForm() {
	return (
		<section className='pb-8 py-30 md:py-40 md:pb-5 '>
			<Wrapper>
				<div className='flex flex-col gap-8 max-w-140 m-auto'>
					<Form />
				</div>
			</Wrapper>
		</section>
	);
}
