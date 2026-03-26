import { WhyChooseUs } from '@/components/Sections/Home/WhyChooseUs/WhyChooseUs';
import { Hero } from '@/components/Sections/Home/Hero/Hero';
import { WhatWeOffer } from '@/components/Sections/Home/WhatWeOffer/WhatWeOffer';
import { Experience } from '@/components/Sections/Home/Experience/Experience';
import { Contact } from '@/components/Sections/Home/Contact/Contact';
import { Testimonials } from '@/components/Sections/Home/Testimonials/Testimonials';
import { Video } from '@/components/Sections/Home/Video/Video';

export default function Home() {
	return (
		<main>
			<Hero />
			<WhyChooseUs />
			<WhatWeOffer />
			<Experience />
			<Video/>
			<Testimonials />
			<Contact />
		</main>
	);
}
