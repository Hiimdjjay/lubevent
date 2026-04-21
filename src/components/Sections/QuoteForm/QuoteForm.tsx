import { Wrapper } from '@/components/UI/Wrapper';
import { Form } from './Form';

export function QuoteForm() {
	return (
		<section className='pb-5 py-30 md:py-40 md:pb-5 '>
			<Wrapper>
				<div className='flex flex-col gap-8 max-w-160 m-auto'>
					<Form />
				</div>
			</Wrapper>
		</section>
	);
}
