import { SectionLabel } from '@/components/UI/SectionLabel';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Wrapper } from '@/components/UI/Wrapper';

export function Testimonials() {
	return (
		<section className='py-20 md:py-25 lg:py-30 bg-whiteSection'>
			<div className='flex flex-col gap-5 md:gap-10'>
				<Wrapper>
					<div className='flex flex-col gap-5'>
						<div className='flex flex-col gap-3'>
							<SectionLabel bgColor='bg-bg-sectionLabel'>Zaufali nam</SectionLabel>
							<div className='w-[80%]'>
								<SectionTitle>
									Kiedy światła gasną,
									<br className='hidden lg:inline' /> zostają opinie. Sprawdź je.
								</SectionTitle>
							</div>
						</div>
					</div>
				</Wrapper>
				<TestimonialsCarousel />
			</div>
		</section>
	);
}
