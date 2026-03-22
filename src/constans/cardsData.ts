import { icons } from '@/components/UI/Card';

type CardsData = {
	name: string;
	icon: keyof typeof icons;
};

export const cardsData: CardsData[] = [
	{ name: 'Kompleksowa organizacja ', icon: 'ListCheck' },
	{ name: 'Jasny i kontrolowany budżet', icon: 'HandCoins' },
	{ name: 'Realizacja zawsze na czas', icon: 'AlarmClock' },
	{ name: 'Indywidualne dopasowanie', icon: 'UserStar' }
];
