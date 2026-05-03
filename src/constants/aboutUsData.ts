type ImagesAboutUsData = {
	id: number;
	src: string;
	alt: string;
};

export const IMAGES_ABOUTUS_DATA: ImagesAboutUsData[] = [
	{ id: 1, src: '/Photos/conference-2-unsplash.png', alt: 'Description' },
	{ id: 2, src: '/Photos/Premiere.png', alt: 'Description' },
	{ id: 3, src: '/Photos/Concert-unsplash.png', alt: 'Description' },
	{ id: 4, src: '/Photos/Corporate-event-2-ChatGPT.png', alt: 'Description' },
	{ id: 5, src: '/Photos/Singer-unsplash.jpg', alt: 'Description' },
	{ id: 6, src: '/Photos/outdoor-party.png', alt: 'Description' },
	{ id: 7, src: '/Photos/Group-of-people-Chat-GPT.png', alt: 'Description' },
	{ id: 8, src: '/Photos/Group-of-people-ChatGPT.png', alt: 'Description' }
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

type TEAM_DATA = {
	id: number;
	name: string;
	jobTitle: string;
	src: string;
	alt: string;
	socialMediaURLs: { facebook: string; instagram: string };
};

export const TEAM_DATA = [
	{
		id: 1,
		name: 'Dominik Berwertz',
		jobTitle: 'Founder & CEO',
		imageSrc: '/Team/Dominik-Berwertz.png',
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
		imageSrc: '/Team/Dominik-Berwertz.png',
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
		imageSrc: '/Team/Dominik-Berwertz.png',
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
		imageSrc: '/Team/Dominik-Berwertz.png',
		alt: 'Zdjęcie prezentujące CEO & Founder',
		socialMediaURLs: {
			facebook: 'https://www.facebook.com/',
			instagram: 'https://www.instagram.com/'
		}
	}
];
