import { experienceData } from '@/constans/cardsData';
import { ExperienceImageCard } from './ExperienceImageCard';
import { ExperienceStatisticsCard } from './ExperienceStatisticsCard';

export function ExperienceCardList() {
	return (
		<div className='grid gap-y-3 gap-x-2 md:grid-cols-[30%_30%_1fr] md:grid-rows-[320px_30px_270px]'>
			{experienceData.map((card, index) => {
				if (card.variant === 'statistics') {
					return (
						<ExperienceStatisticsCard
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
					return <ExperienceImageCard key={index} src={card.src} alt={card.alt} className={card.className} />;
				}
			})}
		</div>
	);
}
