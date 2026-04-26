import { FormSection } from '@/components/Sections/Contact/Form/FormSection';
import { SubpageHero } from '@/components/Sections/Contact/SubpageHero/SubpageHero';
import { CtaSection } from '@/components/UI/CtaSection/CtaSection';

export default function Contact() {
	return (
		<main>
			<SubpageHero />
			<FormSection />
			<CtaSection />
		</main>
	);
}
