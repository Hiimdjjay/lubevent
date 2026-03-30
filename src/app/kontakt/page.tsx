import { FormSection } from '@/components/Sections/Contact/Form/FormSection';
import { SubpageHero } from '@/components/Sections/Contact/SubpageHero/SubpageHero';
import { ContactCTA } from '@/components/UI/ContactCTA/ContactCTA';

export default function Contact() {
	return (
		<main>
			<SubpageHero />
			<FormSection />
			<ContactCTA />
		</main>
	);
}
