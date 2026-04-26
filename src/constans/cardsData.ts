import { ListCheck, HandCoins, AlarmClock, UserStar, type LucideIcon } from 'lucide-react';

type aboutUsCardsData = {
	name: string;
	icon: LucideIcon;
};

export const aboutUsCardsData: aboutUsCardsData[] = [
	{ name: 'Kompleksowa organizacja ', icon: ListCheck },
	{ name: 'Jasny i kontrolowany budżet', icon: HandCoins },
	{ name: 'Realizacja zawsze na czas', icon: AlarmClock },
	{ name: 'Indywidualne dopasowanie', icon: UserStar }
];

export const offerData = [
	{ name: 'Organizacja imprez', path: '/oferta' },
	{ name: 'Oprawa muzyczna', path: '/oferta' },
	{ name: 'Technika sceniczna', path: '/oferta' },
	{ name: 'Atrakcje eventowe', path: '/oferta' }
];

type StatisticsCardData = {
	variant: 'statistics';
	title: string;
	target: number;
	content: string;
	className?: string;
	src?: string;
	alt?: string;
	classNameText?: string;
};

type ImageCardData = {
	variant: 'image';
	src: string;
	alt: string;
	className?: string;
};

type CardData = StatisticsCardData | ImageCardData;

export const experienceCardsData: CardData[] = [
	{
		variant: 'statistics',
		title: 'Zrealizowanych wydarzeń',
		target: 300,
		content:
			'Od eventów firmowych po duże realizacje sceniczne. Scena, dźwięk, światło i koordynacja w jednym miejscu.',
		src: '/Photos/Conference-guy.png',
		alt: 'Zdjęcie konfenansjera przemawiąjącego do publiczności',
		className:
			' text-white bg-linear-to-r from-bg-btn-blue to-bg-btn-purple h-110 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2',
		classNameText: 'md:w-[50%]'
	},
	{
		variant: 'image',
		src: '/Photos/wedding-toast.png',
		alt: 'Rozbawieni zadowoleni goście',
		className: 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3'
	},
	{
		variant: 'statistics',
		title: 'Doświadczenie zawodowe',
		target: 10,
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates omnis ab suscipit ab!',
		className: 'text-black bg-white md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4'
	},
	{
		variant: 'image',
		src: '/Photos/Business-meeting2.jpg',
		alt: 'Prezentacja produktu na sali wypełnionej ludźmi i dobrą atmosferą',
		className: 'md:h-full md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4'
	},
	{
		variant: 'statistics',
		title: 'Rozpoznawalne marki',
		target: 20,
		content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, modi. Corrupti, modi.',
		className: 'text-white bg-black md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4'
	}
];
