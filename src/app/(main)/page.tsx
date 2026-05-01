import { Hero } from '@/components/Sections/Home/Hero/Hero';
import { AboutsUs } from '@/components/Sections/Home/AboutUs/AboutUs';
import { Offer } from '@/components/Sections/Home/Offer/Offer';
import { Experience } from '@/components/Sections/Home/Experience/Experience';
import { CtaSection } from '@/components/UI/CtaSection/CtaSection';
import { Testimonials } from '@/components/Sections/Home/Testimonials/Testimonials';
import { Video } from '@/components/Sections/Home/Video/Video';

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutsUs />
			<Offer />
			<Experience />
			<Video />
			<Testimonials />
			<CtaSection
				primaryText='Darmowa wycena'
				primaryPath='/formularz'
				secondaryText='Skontaktuj się'
				secondaryPath='/kontakt'
			/>
		</main>
	);
}
