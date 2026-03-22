import { Buttons } from './Buttons';
import { TestimonialsCard } from './TestimonialsCard';

const testimonials = [
	{ id: 1, name: 'Jakub' },
	{ id: 2, name: 'Magdalena' }
];

export function TestimonialsCarousel() {
	return (
		<div>
			<TestimonialsCard />
			<Buttons />
		</div>
	);
}
