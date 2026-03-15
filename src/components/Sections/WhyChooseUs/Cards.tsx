import { Card } from '@/components/UI/Card';
import { cardsData } from '../../../constans/AboutUs';

export function Cards() {
	return (
		<div className='flex flex-col gap-x-3.5 gap-y-5 w-full'>
			{cardsData.map(({ name, icon }, index) => (
				<Card key={index} icon={icon}>
					{name}
				</Card>
			))}
		</div>
	);
}
