import { Achivements } from '@/components/Sections/AboutUs/Achievements/Achievements';
import { Description } from '@/components/Sections/AboutUs/Description/Description';
import { Images } from '@/components/Sections/AboutUs/Images/Images';
import { SubpageHero } from '@/components/Sections/AboutUs/SubpageHero/SubpageHero';
import { Team } from '@/components/Sections/AboutUs/Team/Team';
import { Contact } from '@/components/UI/Contact/Contact';

export default function AboutUs() {
	return (
		<>
			<SubpageHero />
			<Description />
			<Images />
			<Achivements />
			<Team />
			<Contact />
		</>
	);
}
