'use client';

import { servicesData } from '@/constans/servicesData';
import { SingleServiceCard } from './SingleServiceCard';
import { useState } from 'react';
import { Button } from '@/components/UI/Buttons/Button';

export function ServicesCards() {
	const [cardsQuantity, setCardsQuantity] = useState(6);

	return (
		<div className='flex flex-col gap-15'>
			<div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3'>
				{servicesData.slice(0, cardsQuantity).map((card, index) => {
					return <SingleServiceCard key={index} card={card} />;
				})}
			</div>
			<div className='self-center'>
				{cardsQuantity < servicesData.length && (
					<Button variant='primary' onClick={() => setCardsQuantity(servicesData.length)}>
						Zobacz więcej
					</Button>
				)}
			</div>
		</div>
	);
}
