import { AboutsUsCard } from '@/components/Sections/Home/AboutUs/AboutUsCard';
import { aboutUsCardsData } from '@/constans/cardsData';

export function AboutUsCards() {
	return (
		<div className='grid grid-cols-1 gap-x-3.5 gap-y-5 w-full md:grid-cols-2'>
			{aboutUsCardsData.map(({ name, icon }, index) => (
				<AboutsUsCard key={index} icon={icon}>
					{name}
				</AboutsUsCard>
			))}
		</div>
	);
}
