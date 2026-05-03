import { StaticImageData } from 'next/image';

import CONFERENCE from '@/assets/photos/hero/conference-pexels.jpg';
import STUDIO from '@/assets/photos/hero/studio-conference.jpg';
import CORPORATE_EVENT from '@/assets/photos/hero/corporate-event-check.jpg';
import FESTIVAL_CROWD from '@/assets/photos/hero/festival-crowd-shutterstuck.jpg';
import GARDEN_EVENT from '@/assets/photos/hero/garden-event-tent.jpg';
import CONCERTE from '@/assets/photos/hero/concert-unsplash.jpg';
import MASCOT_SPORT from '@/assets/photos/hero/mascot-event-sport.jpg';
import WEDDING_PARTY from '@/assets/photos/hero/wedding-party.jpg';
import NEWLYWEDS from '@/assets/photos/hero/newlyweds-unsplash.jpg';
import SINGER from '@/assets/photos/hero/singer-unsplash.jpg';
import CONFERENCE_SECOND from '@/assets/photos/hero/conference-2-shutterstock.jpg';
import TEAM from '@/assets/photos/hero/team-celebration-confetti.jpg';
import LARGE_SCREEN from '@/assets/photos/home/large-screen-conference.jpg';
import WEDDING_TOAST from '@/assets/photos/home/wedding-toast.jpg';
import CONFERECE_GUY from '@/assets/photos/team/conference-guy.png';

import { ListCheck, HandCoins, AlarmClock, UserStar, type LucideIcon } from 'lucide-react';

type ImageProps = {
	id: number;
	imageSrc: StaticImageData;
	alt: string;
};

export const IMAGES_HERO_1: ImageProps[] = [
	{ id: 1, imageSrc: CONFERENCE, alt: 'Description' },
	{ id: 2, imageSrc: STUDIO, alt: 'Description' },
	{ id: 3, imageSrc: CORPORATE_EVENT, alt: 'Description' },
	{ id: 4, imageSrc: FESTIVAL_CROWD, alt: 'Description' },
	{ id: 5, imageSrc: GARDEN_EVENT, alt: 'Description' },
	{ id: 6, imageSrc: CONCERTE, alt: 'Description' }
];

export const IMAGES_HERO_2: ImageProps[] = [
	{ id: 1, imageSrc: MASCOT_SPORT, alt: 'Description' },
	{ id: 2, imageSrc: WEDDING_PARTY, alt: 'Description' },
	{ id: 3, imageSrc: NEWLYWEDS, alt: 'Description' },
	{ id: 4, imageSrc: SINGER, alt: 'Description' },
	{ id: 5, imageSrc: CONFERENCE_SECOND, alt: 'Description' },
	{ id: 6, imageSrc: TEAM, alt: 'Description' }
];

type AboutUsCardsData = {
	id: number;
	name: string;
	icon: LucideIcon;
};

export const ABOUT_US_CARDS_DATA: AboutUsCardsData[] = [
	{ id: 1, name: 'Kompleksowa organizacja ', icon: ListCheck },
	{ id: 2, name: 'Jasny i kontrolowany budżet', icon: HandCoins },
	{ id: 3, name: 'Realizacja zawsze na czas', icon: AlarmClock },
	{ id: 4, name: 'Indywidualne dopasowanie', icon: UserStar }
];

type StatisticsCardData = {
	id: number;
	variant: 'statistics';
	title: string;
	target: number;
	content: string;
	className?: string;
	imageSrc?: StaticImageData;
	alt?: string;
	classNameText?: string;
};

type ImageCardData = {
	id: number;
	variant: 'image';
	imageSrc: StaticImageData;
	alt: string;
	className?: string;
};

type CardData = StatisticsCardData | ImageCardData;

export const EXPERIENCE_DATA: CardData[] = [
	{
		id: 1,
		variant: 'statistics',
		title: 'Zrealizowanych wydarzeń',
		target: 300,
		content:
			'Od eventów firmowych po duże realizacje sceniczne. Scena, dźwięk, światło i koordynacja w jednym miejscu.',
		imageSrc: CONFERECE_GUY,
		alt: 'Zdjęcie konfenansjera przemawiąjącego do publiczności',
		className:
			' text-white bg-linear-to-r from-bg-btn-blue to-bg-btn-purple h-110 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2',
		classNameText: 'md:w-[50%]'
	},
	{
		id: 2,
		variant: 'image',
		imageSrc: WEDDING_TOAST,
		alt: 'Rozbawieni zadowoleni goście',
		className: 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3'
	},
	{
		id: 3,
		variant: 'statistics',
		title: 'Doświadczenie zawodowe',
		target: 10,
		content:
			'Nasza pasja do kreowania eventów to lata praktyki, które przekładamy na sukces. Zaufaj profesjonalizmowi i sprawdź nas!',
		className: 'text-black bg-white md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4'
	},
	{
		id: 4,
		variant: 'image',
		imageSrc: LARGE_SCREEN,
		alt: 'Prezentacja produktu na sali wypełnionej ludźmi i dobrą atmosferą',
		className: 'md:h-full md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4'
	},
	{
		id: 5,
		variant: 'statistics',
		title: 'Rozpoznawalne marki',
		target: 20,
		content:
			'Współpracujemy z liderami rynku, tworząc projekty, które budują silny wizerunek. Twoja marka zasługuje na najlepsze!',
		className: 'text-white bg-black md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4'
	}
];

type TestimonialsData = {
	id: number;
	type: string;
	name: string;
	surname: string;
	content: string;
};

export const TESTIMONIALS: TestimonialsData[] = [
	{
		id: 1,
		type: 'private',
		name: 'Jakub',
		surname: 'Stachyra',
		content:
			'Po dwóch weselach, na których grał Dominik wiedziałam, że na moim weselu nie zagra nikt inny - nawet termin ślubu był dopasowany tak, żeby zgrać DJa i salę. Parkiet nawet przez chwilę nie był pusty (niektórzy tańczyli też podczas przerw na jedzenie).'
	},
	{
		id: 2,
		type: 'private',
		name: 'Zuzanna',
		surname: 'Telega',
		content:
			'Bardzo gorąco polecam DJ-a z Lublina. Nie tylko jest to cudowny artysta lecz również wspaniała osoba. Muzyka wybrana pod nas, świetne zabawy oczepinowe, Dominik również pięknie śpiewa.'
	},
	{
		id: 3,
		type: 'private',
		name: 'Weronika',
		surname: 'Pewelec',
		content:
			'Bardzo gorąco polecam DJ-a z Lublina. Nie tylko jest to cudowny artysta lecz również wspaniała osoba. Muzyka wybrana pod nas, świetne zabawy oczepinowe, Dominik również pięknie śpiewa.'
	},
	{
		id: 4,
		type: 'private',
		name: 'Michał',
		surname: 'Wawszczak',
		content:
			'Chłopaki to absolutny strzał w dziesiątkę! Poprowadził nasze wesele z niesamowitą energią i wyczuciem. Muzyka była doskonale dobrana — każdy znalazł coś dla siebie, a parkiet był pełen od pierwszego do ostatniego tańca! '
	},
	{
		id: 5,
		type: 'private',
		name: 'Kinga',
		surname: 'Studzińska',
		content:
			'Serdecznie polecamy usługi Dominika. Odpowiedni człowiek na odpowiednim miejscu! 😊 Wiedzieliśmy, że wybór ekipy Dominika na nasze wesele to będzie świetny pomysł i się nie zawiedliśmy, a mogę z pełnym przekonaniem stwierdzić... 😁'
	},
	{
		id: 6,
		type: 'private',
		name: 'Dominika',
		surname: 'Józefczuk',
		content:
			'Mieliśmy ogromną przyjemność współpracować z DJ Dominikiem i jesteśmy absolutnie zachwyceni! Od pierwszego kontaktu aż do ostatniego utworu, pełen profesjonalizm, świetna komunikacja i niesamowite wyczucie klimatu imprezy.'
	},
	{
		id: 7,
		type: 'private',
		name: 'Paweł',
		surname: 'Zyśko',
		content:
			'DJ z Lublina to właśnie on rozkręcił i porwał na parkiet naszych gości weselnych nawet tych którzy sceptycznie są nastawieni do DJ-ów na weselach. Potrafi tak dobrać utwory muzyczne, że parkiet aż płonie.'
	},
	{
		id: 8,
		type: 'private',
		name: 'Halina',
		surname: 'Podleśna',
		content:
			'Z całego serca dziękujemy Wam – za wspaniałe poprowadzenie naszego wesela! Dzięki Wam parkiet tętnił życiem do samego rana, a każdy moment – od pierwszego tańca po ostatni hit – był dopracowany i pełen energii.'
	},
	{
		id: 9,
		type: 'private',
		name: 'Weronika',
		surname: 'Pielach',
		content:
			'Mieliśmy przyjemność być gośćmi na weselu, na którym oprawę muzyczną zapewniał DJ z Lublina– i musimy przyznać, że zrobił świetną robotę 😁 Zabawa była fantastyczna, parkiet cały czas pełen, a muzyka trafiała...'
	},
	{
		id: 10,
		type: 'private',
		name: 'Adrianna',
		surname: 'Kusyk',
		content:
			'Jeśli szukacie najlepszego DJ w Lublinie, to właśnie Dominik! Zrobi wam taką imprezę że przejdzie to wasze wszelkie oczekiwania!!! Jesteśmy mega zadowoleni, pełna empatia a przy tym luz i wspaniały głos !! Polecamy z całego serca 😎'
	}
];
