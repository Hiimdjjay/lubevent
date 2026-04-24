'use client';

import { useState } from 'react';
import { InitialInfo } from './FormSteps/InitialInfo';
import { PersonalDetails } from './FormSteps/PersonalDetails';
import { QuoteContext } from '@/context/QuoteContext';
import { EventDetails } from './FormSteps/EventDetails';
import { PlaceAndDate } from './FormSteps/PlaceAndData';
import { Services } from './FormSteps/Services';
import { AdditionalMessage } from './FormSteps/AdditionalMessage';
import { Summary } from './FormSteps/Summary';
import { useForm, FieldValues } from 'react-hook-form';
import { Submitted } from './FormSteps/Submitted';

export function Form() {
	const [showStep, setShowStep] = useState<number>(0);

	const {
		register,
		handleSubmit,
		control,
		setValue,
		unregister,
		watch,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		trigger
	} = useForm<FieldValues>({
		mode: 'onChange'
	});

	const watchedData = watch();

	const summaryData = [
		{
			id: 1,
			title: 'Dane osobowe oraz kontaktowe',
			data: [
				{
					id: 1,
					label: 'Imię i nazwisko:',
					data: `${watchedData.personalDetails?.name ?? ''} ${watchedData.personalDetails?.surname ?? ''}`
				},
				{ id: 2, label: 'Email:', data: `${watchedData.personalDetails?.email ?? ''}` },
				{ id: 3, label: 'Numer telefonu:', data: `${watchedData.personalDetails?.telephone ?? ''}` },
				{ id: 4, label: 'Nazwa firmy:', data: `${watchedData.personalDetails?.companyName ?? ''}` }
			]
		},
		{
			id: 2,
			title: 'Miejsce i data',
			data: [
				{ id: 1, label: 'Data:', data: `${watchedData.date ?? ''}` },
				{ id: 2, label: 'Miejsce:', data: `${watchedData.place?.isPlaceChoosed ?? ''}` },
				{ id: 3, label: 'Miejscowość:', data: `${watchedData.place?.place ?? ''}` },
				{ id: 4, label: 'Adres / nazwa:', data: `${watchedData.place?.venuePlace ?? ''}` }
			]
		},
		{
			id: 3,
			title: 'Rodzaj wydarzenia',
			data: [
				{ id: 1, label: 'Rodzaj wydarzenia:', data: `${watchedData.eventType?.eventType ?? ''}` },
				{ id: 2, label: 'Jeśli inne to:', data: `${watchedData.eventType?.describeEventType ?? ''}` },
				{ id: 3, label: 'Budżet:', data: `${watchedData.eventType?.budgetSelected ?? ''}` },
				{ id: 4, label: 'Liczba gości:', data: `${watchedData.guestsQuantity ?? ''}` }
			]
		},

		{
			id: 4,
			title: 'Usługi',
			data: [
				{
					id: 13,
					label: 'Usługi:',
					data: Object.entries(watchedData.services ?? {})
						.filter(([key, value]) => key !== 'additionalService' && value === true)
						.map(([key]) => key)
						.join(', ')
				},
				{ id: 14, label: 'Dodatkowe usługi:', data: `${watchedData.services?.additionalService ?? ''}` }
			]
		},
		{
			id: 5,
			title: 'Informacje dodatkowe',
			data: [
				{ id: 1, label: 'Wiadomość:', data: `${watchedData.message ?? ''}` },
				{ id: 2, label: 'Skąd o nas usłyszałeś:', data: `${watchedData.referralSource ?? ''}` },
				{ id: 3, label: 'Jeśli inne to skąd:', data: `${watchedData.additionalReferralSource ?? ''}` }
			]
		}
	];

	async function onSubmit(data: FieldValues) {
		const res = await fetch('/api/send-quote', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data)
		});

		if (res.ok) {
			setShowStep(prev => prev + 1);
		} else {
			console.error('Błąd wysyłania formularza');
		}
		console.log(data);
	}

	if (isSubmitSuccessful) {
		return <Submitted />;
	}

	return (
		<QuoteContext.Provider value={[showStep, setShowStep]}>
			<div className='flex flex-col gap-5 bg-white p-5 rounded-2xl md:p-10'>
				<form
					onSubmit={handleSubmit(data => onSubmit(data))}
					noValidate
					className='flex flex-col gap-5 w-full text-[17px] md:gap-7 lg:gap-10'>
					{showStep === 0 && <InitialInfo />}
					{showStep === 1 && <PersonalDetails register={register} errors={errors} trigger={trigger} />}
					{showStep === 2 && (
						<PlaceAndDate
							register={register}
							setValue={setValue}
							unregister={unregister}
							errors={errors}
							trigger={trigger}
							place={watchedData.place?.isPlaceChoosed}
						/>
					)}
					{showStep === 3 && (
						<EventDetails
							register={register}
							control={control}
							setValue={setValue}
							unregister={unregister}
							errors={errors}
							trigger={trigger}
							eventType={watchedData.eventType?.eventType}
						/>
					)}
					{showStep === 4 && <Services register={register} trigger={trigger} />}
					{showStep === 5 && <AdditionalMessage register={register} trigger={trigger} />}
					{showStep === 6 && (
						<Summary
							summaryData={summaryData}
							register={register}
							errors={errors}
							isSubmitting={isSubmitting}
						/>
					)}
				</form>
			</div>
		</QuoteContext.Provider>
	);
}
