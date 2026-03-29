import { SectionLabel } from '@/components/UI/SectionLabel';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { SectionTitle } from '@/components/UI/SectionTitle';

export function Testimonials() {
	return (
		<section>
			<div className='flex flex-col gap-5 py-20 md:py-25 lg:py-30"'>
				<div className='max-w-325 w-full m-auto px-4 md:px-5 lg:px-7.5  '>
					<div className='flex flex-col gap-5'>
						<div className='flex flex-col gap-3'>
							<SectionLabel bgColor='bg-bg-sectionLabel'>Zaufali nam</SectionLabel>
							<div className='w-[80%]'>
								<SectionTitle>
									Kiedy światła gasną, zostają opinie. <br className='hidden lg:inline' />
									Sprawdź je.
								</SectionTitle>
							</div>
						</div>
					</div>
				</div>
				<TestimonialsCarousel />
			</div>
		</section>
	);
}
