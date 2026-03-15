import { WhyChooseUs } from '@/components/Sections/WhyChooseUs/WhyChooseUs';
import { BusinessPartners } from '@/components/Sections/BusinessPartners/BusinessPartners';
import { Hero } from '@/components/Sections/Hero/Hero';

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <BusinessPartners /> */}
			<WhyChooseUs />
		</main>
	);
}
