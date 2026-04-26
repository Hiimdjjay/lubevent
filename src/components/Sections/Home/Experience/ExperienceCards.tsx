import { experienceCardsData } from '@/constans/cardsData';
import { ImageCard } from './ImageCard';
import { StatisticsCard } from './StatisticsCard';

export function ExperienceCards() {
	return (
		<div className='grid gap-y-3 gap-x-2 md:grid-cols-[30%_30%_1fr] md:grid-rows-[320px_30px_220px]'>
			{experienceCardsData.map((card, index) => {
				if (card.variant === 'statistics') {
					return (
						<StatisticsCard
							key={index}
							title={card.title}
							target={card.target}
							content={card.content}
							src={card.src}
							imageAlt={card.alt}
							className={card.className}
							classNameText={card.classNameText}
						/>
					);
				}
				if (card.variant === 'image') {
					return <ImageCard key={index} src={card.src} alt={card.alt} className={card.className} />;
				}
			})}
		</div>
	);
}
