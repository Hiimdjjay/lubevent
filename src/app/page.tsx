import { WhyChooseUs } from '@/components/Sections/Home/WhyChooseUs/WhyChooseUs';
import { Hero } from '@/components/Sections/Home/Hero/Hero';
import { Offer } from '@/components/Sections/Home/WhatWeOffer/Offer';
import { Experience } from '@/components/Sections/Home/Experience/Experience';
import { Contact } from '@/components/UI/Contact/Contact';
import { Testimonials } from '@/components/Sections/Home/Testimonials/Testimonials';
import { Video } from '@/components/Sections/Home/Video/Video';

export default function Home() {
	return (
		<main>
			<Hero />
			<WhyChooseUs />
			<Offer />
			<Experience />
			<Video/>
			<Testimonials />
			<Contact />
		</main>
	);
}
