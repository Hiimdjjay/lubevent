'use client';

import { OfferListElement } from './OfferListElement';
import { offerData } from '@/constans/cardsData';

export function OfferList() {
	return (
		<div className='text-white'>
			{offerData.map(({ name, path }) => (
				<OfferListElement key={name} path={path}>
					{name}
				</OfferListElement>
			))}
		</div>
	);
}
