import { FAQ } from '@/components/Sections/Services/FAQ/FAQ';
import { SubpageHero } from '@/components/Sections/Services/SubpageHero/SubpageHero';
import { CtaSection } from '@/components/UI/CtaSection/CtaSection';

export default function Services() {
	return (
		<main>
			<SubpageHero />
			<FAQ />
			<CtaSection />
		</main>
	);
}
