import { WhyChooseUs } from '@/components/Sections/WhyChooseUs/WhyChooseUs';
import { Hero } from '@/components/Sections/Hero/Hero';
import { WhatWeOffer } from '@/components/Sections/WhatWeOffer/WhatWeOffer';
import { Experience } from '@/components/Sections/Experience/Experience';

export default function Home() {
	return (
		<main>
			<Hero />
			<WhyChooseUs />
			<WhatWeOffer />
			<Experience />
		</main>
	);
}
