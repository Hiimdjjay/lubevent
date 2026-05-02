import { Achivements } from '@/components/Sections/AboutUs/Achievements/Achievements';
import { AboutUsSection } from '@/components/Sections/AboutUs/AboutUs/AboutUsSection';
import { Team } from '@/components/Sections/AboutUs/Team/Team';
import { SubpageHero } from '@/components/Sections/AboutUs/SubpageHero/SubpageHero';
import { CtaSection } from '@/components/UI/CtaSection/CtaSection';

export default function AboutUs() {
	return (
		<main>
			<SubpageHero />
			<AboutUsSection />
			<Achivements />
			<Team />
			<CtaSection
				primaryText='Darmowa wycena'
				primaryPath='/formularz'
				secondaryText='Sprawdź ofertę'
				secondaryPath='/uslugi'
			/>
		</main>
	);
}
