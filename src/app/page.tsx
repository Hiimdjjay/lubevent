import { WhyChooseUs } from '@/components/Sections/WhyChooseUs/WhyChooseUs';
import { Hero } from '@/components/Sections/Hero/Hero';
import { WhatWeOffer } from '@/components/Sections/WhatWeOffer/WhatWeOffer';

export default function Home() {
	return (
		<main>
			<Hero />
			<WhyChooseUs />
			<WhatWeOffer />
		</main>
	);
}
