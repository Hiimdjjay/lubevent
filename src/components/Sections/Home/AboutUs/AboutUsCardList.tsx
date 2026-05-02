import { AboutsUsCard } from '@/components/Sections/Home/AboutUs/AboutUsCard';
import { ABOUT_US_CARDS_DATA } from '@/constants/homeData';

export function AboutUsCardList() {
	return (
		<div className='grid grid-cols-1 gap-x-3.5 gap-y-5 w-full md:grid-cols-2'>
			{ABOUT_US_CARDS_DATA.map(card => (
				<AboutsUsCard key={card.id} {...card} />
			))}
		</div>
	);
}
