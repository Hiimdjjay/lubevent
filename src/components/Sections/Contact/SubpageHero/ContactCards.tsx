import { ContactSingleCard } from './ContactSingleCard';

const contactData = [
	{
		id: 1,
		name: 'Telefon',
		details: '+48 500 500 500',
		icon: '/Icons/telephone.svg',
		alt: 'Telephone-icon'
	},
	{
		id: 2,
		name: 'Telefon',
		details: 'biuro@lubevent.pl',
		icon: '/Icons/mail.svg',
		alt: 'Mail-icon'
	},
	{
		id: 3,
		name: 'Adres',
		details: `ul. Krakowskie Przedmieście 15, \n20-002\u00A0Lublin`,
		icon: '/Icons/location-pin.svg',
		alt: 'Location-icon'
	}
];

export function ContactCards() {
	return (
		<div className='grid grid-rows-3 grid-cols-1 gap-4 md:grid-rows-2 md:grid-cols-2 '>
			{contactData.map(({ id, name, details, icon, alt }) => {
				return (
					<ContactSingleCard
						key={id}
						name={name}
						details={details}
						icon={icon}
						alt={alt}
					/>
				);
			})}
		</div>
	);
}
