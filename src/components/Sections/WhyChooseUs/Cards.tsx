import { Card } from '@/components/UI/Card';
import { cardsData } from '@/constans/aboutUs';

export function Cards() {
	return (
		<div className='grid grid-cols-1 gap-x-3.5 gap-y-5 w-full md:grid-cols-2'>
			{cardsData.map(({ name, icon }, index) => (
				<Card key={index} icon={icon}>
					{name}
				</Card>
			))}
		</div>
	);
}
