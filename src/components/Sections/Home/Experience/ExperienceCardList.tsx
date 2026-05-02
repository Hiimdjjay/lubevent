import { EXPERIENCE_DATA } from '@/constants/homeData';
import { ExperienceImageCard } from './ExperienceImageCard';
import { ExperienceStatisticsCard } from './ExperienceStatisticsCard';

export function ExperienceCardList() {
	return (
		<div className='grid gap-y-3 gap-x-2 md:grid-cols-[30%_30%_1fr] md:grid-rows-[320px_30px_270px]'>
			{EXPERIENCE_DATA.map(card => {
				if (card.variant === 'statistics') {
					return <ExperienceStatisticsCard key={card.id} {...card} />;
				}
				if (card.variant === 'image') {
					return <ExperienceImageCard key={card.id} {...card} />;
				}
			})}
		</div>
	);
}
