import type { IconName } from '../components/UI/Card';

type CardsData = {
    name: string;
    icon: IconName;
};

export const cardsData: CardsData[] = [
    { name: 'Kompleksowa organizacja wydarzeń', icon: 'ListCheck' },
    { name: 'Jasny i kontrolowany budżet', icon: 'HandCoins' },
    { name: 'Realizacja zawsze na czas', icon: 'AlarmClock' },
    { name: 'Indywidualne dopasowanie do potrzeb klienta', icon: 'UserStar' }
];




