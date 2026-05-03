import { CONTACT_DATA } from '@/constants/contactData';
import { SupageHeroCard } from './SupageHeroCard';

export function SubpageHeroCardList() {
	return (
		<div className='grid grid-rows-3 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2 '>
			{CONTACT_DATA.map(card => {
				return <SupageHeroCard key={card.id} {...card} />;
			})}
		</div>
	);
}
