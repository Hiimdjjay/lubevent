import { SectionLabel } from '@/components/UI/SectionLabel';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { SectionTitle } from '@/components/UI/SectionTitle';

export function Testimonials() {
	return (
		<section>
			<div className='max-w-325 w-full m-auto px-4 py-20 md:px-5 md:py-25 lg:px-7.5 lg:py-30'>
				<div className="flex flex-col gap-5">
					<div className="flex flex-col gap-3">
						<SectionLabel bgColor='bg-bg-sectionLabel'>Zaufali nam</SectionLabel>
						<SectionTitle>Kiedy światła gasną, zostają opinie. Sprawdź je.</SectionTitle>
					</div>
					<TestimonialsCarousel />
				</div>
			</div>
		</section>
	);
}
