import { ImgCard } from './ImgCard';
import Conferencier from '../../../../public/Conference-guy.png';
import HappyGuests from '../../../../public/LandingPage/Group-of-people-Chat-GPT .png';
import BusinessMeeting from '../../../../public/Business-meeting2.jpg';
import { StatisticsCard } from './StatisticsCard';
import { StaticImageData } from 'next/image';

type StatisticsCardData = {
	id: number;
	variant: 'statistics';
	title: string;
	target: number;
	content: string;
	className?: string;
	src?: StaticImageData;
	imageAlt?: string;
	classNameText?: string;
};

type ImageCardData = {
	id: number;
	variant: 'image';
	src: StaticImageData;
	imageAlt: string;
	className?: string;
};

type CardData = StatisticsCardData | ImageCardData;

const cardsData: CardData[] = [
	{
		id: 1,
		variant: 'statistics',
		title: 'Zrealizowanych wydarzeń',
		target: 300,
		content:
			'Od eventów firmowych po duże realizacje sceniczne. Scena, dźwięk, światło i koordynacja w jednym miejscu.',
		src: Conferencier,
		imageAlt: 'Zdjęcie konfenansjera przemawiąjącego do publiczności',
		className:
			' text-white bg-linear-to-r from-bg-btn-blue to-bg-btn-purple h-110 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2',
		classNameText: 'md:w-[50%]'
	},
	{
		id: 2,
		variant: 'image',
		src: HappyGuests,
		imageAlt: 'Rozbawieni zadowoleni goście',
		className: 'md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-3'
	},
	{
		id: 3,
		variant: 'statistics',
		title: 'Doświadczenie zawodowe',
		target: 10,
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates omnis ab suscipit ab!',
		src: undefined,
		imageAlt: undefined,
		className:
			'text-black bg-white md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-4'
	},
	{
		id: 4,
		variant: 'image',
		src: BusinessMeeting,
		imageAlt: 'Prezentacja produktu na sali wypełnionej ludźmi i dobrą atmosferą',
		className: 'md:h-full md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-4'
	},
	{
		id: 5,
		variant: 'statistics',
		title: 'Rozpoznawalne marki',
		target: 20,
		content: 'Współpracujemy z firmami i markami, które stawiają na jakości.',
		src: undefined,
		imageAlt: undefined,
		className:
			'text-white bg-black md:col-start-3 md:col-end-4 md:row-start-3 md:row-end-4'
	}
];

export function CardsLayout() {
	return (
		<div className='grid gap-y-3 gap-x-2 md:grid-cols-[30%_30%_1fr] md:grid-rows-[320px_30px_220px]'>
			{cardsData.map(card => {
				if (card.variant === 'statistics') {
					return (
						<StatisticsCard
							key={card.id}
							title={card.title}
							target={card.target}
							content={card.content}
							src={card.src}
							imageAlt={card.imageAlt}
							className={card.className}
							classNameText={card.classNameText}></StatisticsCard>
					);
				}
				if (card.variant === 'image') {
					return (
						<ImgCard
							key={card.id}
							src={card.src}
							alt={card.imageAlt}
							className={card.className}
						/>
					);
				}
			})}
		</div>
	);
}
