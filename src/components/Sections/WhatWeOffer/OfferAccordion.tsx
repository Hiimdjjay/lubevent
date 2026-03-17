'use client';
import { useState } from 'react';
import { AccordionTab } from './AccordionTab';

const accordionData = [
	{
		name: 'Organizacja imprez'
	},
	{
		name: 'Oprawa muzyczna'
	},
	{
		name: 'Technika sceniczna'
	},
	{
		name: 'Prowadzenie wydarzeń'
	},
	{
		name: 'Atrakcje eventowe'
	}
];

export function OfferAccordion() {

	return (
		<div className='text-white'>
			{accordionData.map(({ name }, index) => (
				<AccordionTab key={index} >
					{name}
				</AccordionTab>
			))}
		</div>
	);
}
