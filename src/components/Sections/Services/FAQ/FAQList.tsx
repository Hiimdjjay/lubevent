import { FAQ_DATA } from '@/constants/servicesData';
import { FAQSingleItem } from './FAQSingleItem';

export function FAQList() {
	return (
		<div className='flex flex-col gap-5 '>
			{FAQ_DATA.map(item => {
				return <FAQSingleItem key={item.id} item={item}></FAQSingleItem>;
			})}
		</div>
	);
}
