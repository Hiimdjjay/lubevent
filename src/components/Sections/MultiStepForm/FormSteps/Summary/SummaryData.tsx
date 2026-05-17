export function SummaryData({ formData }) {
	const servicesToRener = Object.entries(formData.services ?? {})
		.filter(([key, value]) => value)
		.map(([key]) => `${key}, `);


	const summaryData = [
		{
			title: 'Dane osobowe oraz kontaktowe',
			sectionData: [
				{
					label: 'Imię i nazwisko:',
					answear: `${formData.personalDetails?.name ?? ''} ${formData.personalDetails?.surname ?? ''}`
				},
				{ label: 'Email:', answear: `${formData.personalDetails?.email ?? ''}` },
				{ label: 'Numer telefonu:', answear: `${formData.personalDetails?.telephone ?? ''}` },
				{ label: 'Nazwa firmy:', answear: `${formData.personalDetails?.companyName ?? ''}` }
			]
		},
		{
			title: 'Miejsce i data',
			sectionData: [
				{ label: 'Data:', answear: `${formData.placeAndDate?.date ?? ''}` },
				{ label: 'Miejsce:', answear: `${formData.placeAndDate?.isPlaceChoosed ?? ''}` },
				{ label: 'Miejscowość:', answear: `${formData.placeAndDate?.city ?? ''}` },
				{ label: 'Adres / nazwa:', answear: `${formData.placeAndDate?.adress ?? ''}` }
			]
		},
		{
			title: 'Rodzaj wydarzenia',
			sectionData: [
				{ label: 'Rodzaj wydarzenia:', answear: `${formData.eventDetails?.eventType ?? ''}` },
				{ label: 'Jeśli inne to:', answear: `${formData.eventDetails?.eventDescription ?? ''}` },
				{ label: 'Liczba gości:', answear: `${formData.eventDetails?.totalGuests ?? ''}` },
				{ label: 'Budżet:', answear: `${formData.eventDetails?.estimatedBudget ?? ''}` }
			]
		},
		{
			title: 'Usługi',
			sectionData: [
				{ label: 'Usługi:', answear: servicesToRener },
				{ label: 'Dodatkowe usługi', answear: formData.additionalServices }
			]
		},

		{
			title: 'Informacje dodatkowe',
			sectionData: [
				{ label: 'Wiadomość:', answear: `${formData.message?.message ?? ''}` },
				{ label: 'Skąd o nas usłyszałeś:', answear: `${formData.message?.referralSource ?? ''}` },
				{ label: 'Jeśli inne to skąd:', answear: `${formData.message?.additionalReferralSource ?? ''}` }
			]
		}
	];

	return (
		<div className='flex flex-col gap-6 bg-white p-3 rounded-xl'>
			{summaryData.map(({ title, sectionData }) => {
				return (
					<div key={title}>
						<p className=' font-semibold text-black/80 text-[18px] border-b border-black/80 '>{title}</p>
						<ul>
							{sectionData.every(item => item.answear === '') ? (
								<li className='py-2 text-sm text-black/40'>Brak danych, krok został pominięty</li>
							) : (
								sectionData.map(({ label, answear }) => {
									if (!answear) {
										return null;
									}
									return (
										<li
											key={label}
											className='flex justify-between items-center gap-3 py-2 text-base font-medium border-b border-black/40'>
											<span className='text-sm font-medium text-black/60 whitespace-nowrap'>
												{label}
											</span>
											<span className=' font-semibold text-black/70 break-all'>{answear}</span>
										</li>
									);
								})
							)}
						</ul>
					</div>
				);
			})}
		</div>
	);
}
