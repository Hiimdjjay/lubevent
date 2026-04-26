import { FAQData } from '@/constans/FAQData';
import { FAQSingleItem } from './FAQSingleItem';

export function FAQList() {
	return (
		<div className='flex flex-col gap-5 '>
			{FAQData.map((item, index) => {
				return <FAQSingleItem key={index} item={item}></FAQSingleItem>;
			})}
		</div>
	);
}
