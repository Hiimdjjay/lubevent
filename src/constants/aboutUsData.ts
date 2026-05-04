import type { StaticImageData } from 'next/image';

import CONFERENCE_2_IMG from '@/assets/photos/hero-and-offer/conference-2-shutterstock.jpg';
import FESTIVAL_CROWD_IMG from '@/assets/photos/hero-and-offer/festival-crowd-shutterstuck.jpg';
import CONCERT_UNSPLASH_IMG from '@/assets/photos/hero-and-offer/concert-unsplash.jpg';
import CORPORATE_EVENT_CHECK_IMG from '@/assets/photos/hero-and-offer/corporate-event-check.jpg';
import SINGER_UNSPLASH_IMG from '@/assets/photos/hero-and-offer/singer-unsplash.jpg';
import GARDEN_EVENT_TENT_IMG from '@/assets/photos/hero-and-offer/garden-event-tent.jpg';
import CORPORATE_NETWORKING_IMG from '@/assets/photos/home/corporate-networking.jpg';
import WEDDING_PARTY_IMG from '@/assets/photos/hero-and-offer/wedding-party.jpg';
import DOMINIK_BERWERTZ_IMG from '@/assets/photos/team/domonik-berwertz.jpg';

type ImagesAboutUsData = {
	id: number;
	imageSrc: StaticImageData;
	alt: string;
};

export const IMAGES_ABOUTUS_DATA: ImagesAboutUsData[] = [
	{ id: 1, imageSrc: CONFERENCE_2_IMG, alt: 'Konferencja' },
	{ id: 2, imageSrc: FESTIVAL_CROWD_IMG, alt: 'Festiwal' },
	{ id: 3, imageSrc: CONCERT_UNSPLASH_IMG, alt: 'Koncert' },
	{ id: 4, imageSrc: CORPORATE_EVENT_CHECK_IMG, alt: 'Event korporacyjny' },
	{ id: 5, imageSrc: SINGER_UNSPLASH_IMG, alt: 'Piosenkarz na scenie' },
	{ id: 6, imageSrc: GARDEN_EVENT_TENT_IMG, alt: 'Event plenerowy' },
	{ id: 7, imageSrc: CORPORATE_NETWORKING_IMG, alt: 'Networking korporacyjny' },
	{ id: 8, imageSrc: WEDDING_PARTY_IMG, alt: 'Przyjęcie weselne' }
];

type IconName = 'UserStar' | 'ClockCheck' | 'Expand';

type AboutUsCards = { id: number; name: string; icon: IconName };

export const ABOUTUS_FEATURE_ITEMS: AboutUsCards[] = [
	{ id: 1, name: 'Indywidualne podejście do klienta', icon: 'UserStar' },
	{ id: 2, name: 'Punktualność oraz terminowość', icon: 'ClockCheck' },
	{ id: 3, name: 'Kompleksowa obsługa wydarzeń', icon: 'Expand' }
];

type AchievementsData = {
	id: number;
	title: string;
	number: string;
	mark: string;
};

export const ACHIEVEMENTS_DATA: AchievementsData[] = [
	{ id: 1, title: 'Zrealizowanych wydarzeń', number: '1,500', mark: '+' },
	{ id: 2, title: 'Doświadczenie zawodowe', number: '10', mark: '+ Lat' },
	{ id: 3, title: 'Rozpoznawalne marki', number: '20', mark: '+' },
	{ id: 4, title: 'Zadowolonych klientów', number: '1000', mark: '+' }
];

type TeamMemberData = {
	id: number;
	name: string;
	jobTitle: string;
	imageSrc: StaticImageData;
	alt: string;
	socialMediaURLs: { facebook: string; instagram: string };
};

export const TEAM_DATA: TeamMemberData[] = [
	{
		id: 1,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		imageSrc: DOMINIK_BERWERTZ_IMG,
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	},
	{
		id: 2,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		imageSrc: DOMINIK_BERWERTZ_IMG,
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	},
	{
		id: 3,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		imageSrc: DOMINIK_BERWERTZ_IMG,
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	},
	{
		id: 4,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		imageSrc: DOMINIK_BERWERTZ_IMG,
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	}
];
