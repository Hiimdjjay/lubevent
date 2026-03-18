'use client';

import { AccordionTab } from './AccordionTab';

const accordionData = [
	{
		name: 'Organizacja imprez',
		path: '/oferta'
	},
	{
		name: 'Oprawa muzyczna',
		path: '/oferta'
	},
	{
		name: 'Technika sceniczna',
		path: '/oferta'
	},

	{
		name: 'Atrakcje eventowe',
		path: '/oferta'
	}
];

export function OfferAccordion() {
	return (
		<div className='text-white'>
			{accordionData.map(({ name }, index) => (
				<AccordionTab key={index}>{name}</AccordionTab>
			))}
		</div>
	);
}
