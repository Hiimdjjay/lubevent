'use client';

import { SERVICES_DATA } from '@/constants/servicesData';
import { ServicesCard } from './ServicesCard';
import { useState } from 'react';
import { Button } from '@/components/UI/Buttons/Button';

export function ServicesList() {
	const [cardsQuantity, setCardsQuantity] = useState(6);

	return (
		<div className='flex flex-col gap-15'>
			<div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3'>
				{SERVICES_DATA.slice(0, cardsQuantity).map(service => (
					<ServicesCard key={service.id} {...service} />
				))}
			</div>
			<div className='self-center'>
				{cardsQuantity < SERVICES_DATA.length && (
					<Button variant='primary' onClick={() => setCardsQuantity(SERVICES_DATA.length)}>
						Zobacz więcej
					</Button>
				)}
			</div>
		</div>
	);
}
