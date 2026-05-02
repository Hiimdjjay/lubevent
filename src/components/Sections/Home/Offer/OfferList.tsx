import { OfferListElement } from './OfferListElement';
import { SERVICES_DATA } from '@/constants/servicesData';

export function OfferList() {
	const servicesToShow = SERVICES_DATA.filter(
		service =>
			service.title === 'Wesela & Studniówki' ||
			service.title === 'Gale & Bankiety' ||
			service.title === 'Konferencje' ||
			service.title === 'Eventy marketingowe' ||
			service.title === 'Wynajem sprzętu'
	);

	return (
		<div className='text-white'>
			{servicesToShow.map(({ title, path }, index) => (
				<OfferListElement key={index} path={path}>
					{title}
				</OfferListElement>
			))}
		</div>
	);
}
