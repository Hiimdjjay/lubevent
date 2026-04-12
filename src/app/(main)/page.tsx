import { SubpageHero } from '@/components/Sections/Home/SubpageHero/SubpageHero';
import { AboutsUs } from '@/components/Sections/Home/AboutUs/AboutUs';
import { Offer } from '@/components/Sections/Home/Offer/Offer';
import { Experience } from '@/components/Sections/Home/Experience/Experience';
import { ContactCTA } from '@/components/UI/ContactCTA/ContactCTA';
import { Testimonials } from '@/components/Sections/Home/Testimonials/Testimonials';
import { Video } from '@/components/Sections/Home/Video/Video';

export default function Home() {
	return (
		<main>
			<SubpageHero />
			<AboutsUs />
			<Offer />
			<Experience />
			<Video />
			<Testimonials />
			<ContactCTA />
		</main>
	);
}
