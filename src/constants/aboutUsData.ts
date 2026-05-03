import type { StaticImageData } from 'next/image';

import conference2Img from '@/assets/photos/hero/conference-2-shutterstock.jpg';
import festivalCrowdImg from '@/assets/photos/hero/festival-crowd-shutterstuck.jpg';
import concertUnsplashImg from '@/assets/photos/hero/concert-unsplash.jpg';
import corporateEventCheckImg from '@/assets/photos/hero/corporate-event-check.jpg';
import singerUnsplashImg from '@/assets/photos/hero/singer-unsplash.jpg';
import gardenEventTentImg from '@/assets/photos/hero/garden-event-tent.jpg';
import corporateNetworkingImg from '@/assets/photos/home/corporate-networking.jpg';
import weddingPartyImg from '@/assets/photos/hero/wedding-party.jpg';
import dominikBerwertzImg from '@/assets/photos/team/domonik-berwertz.jpg';
import teamPlanningImg from '@/assets/photos/team/team-planning.jpg';
import teamWorkingImg from '@/assets/photos/team/team-working.jpg';

type ImagesAboutUsData = {
	id: number;
	src: StaticImageData;
	alt: string;
};

export const IMAGES_ABOUTUS_DATA: ImagesAboutUsData[] = [
	{ id: 1, src: conference2Img, alt: 'Konferencja' },
	{ id: 2, src: festivalCrowdImg, alt: 'Festiwal' },
	{ id: 3, src: concertUnsplashImg, alt: 'Koncert' },
	{ id: 4, src: corporateEventCheckImg, alt: 'Event korporacyjny' },
	{ id: 5, src: singerUnsplashImg, alt: 'Piosenkarz na scenie' },
	{ id: 6, src: gardenEventTentImg, alt: 'Event plenerowy' },
	{ id: 7, src: corporateNetworkingImg, alt: 'Networking korporacyjny' },
	{ id: 8, src: weddingPartyImg, alt: 'Przyjęcie weselne' }
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
		imageSrc: dominikBerwertzImg,
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
		imageSrc: dominikBerwertzImg,
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
		imageSrc: teamPlanningImg,
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
		imageSrc: teamWorkingImg,
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	}
];
