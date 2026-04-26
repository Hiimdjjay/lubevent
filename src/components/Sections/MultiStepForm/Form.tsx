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
			title: 'Dane osobowe oraz kontaktowe',
			data: [
				{
					label: 'Imię i nazwisko:',
					data: `${watchedData.personalDetails?.name ?? ''} ${watchedData.personalDetails?.surname ?? ''}`
				},
				{ label: 'Email:', data: `${watchedData.personalDetails?.email ?? ''}` },
				{ label: 'Numer telefonu:', data: `${watchedData.personalDetails?.telephone ?? ''}` },
				{ label: 'Nazwa firmy:', data: `${watchedData.personalDetails?.companyName ?? ''}` }
			]
		},
		{
			title: 'Miejsce i data',
			data: [
				{ label: 'Data:', data: `${watchedData.date ?? ''}` },
				{ label: 'Miejsce:', data: `${watchedData.place?.isPlaceChoosed ?? ''}` },
				{ label: 'Miejscowość:', data: `${watchedData.place?.place ?? ''}` },
				{ label: 'Adres / nazwa:', data: `${watchedData.place?.venuePlace ?? ''}` }
			]
		},
		{
			title: 'Rodzaj wydarzenia',
			data: [
				{ label: 'Rodzaj wydarzenia:', data: `${watchedData.eventType?.eventType ?? ''}` },
				{ label: 'Jeśli inne to:', data: `${watchedData.eventType?.describeEventType ?? ''}` },
				{ label: 'Budżet:', data: `${watchedData.eventType?.budgetSelected ?? ''}` },
				{ label: 'Liczba gości:', data: `${watchedData.guestsQuantity ?? ''}` }
			]
		},

		{
			title: 'Usługi',
			data: [
				{
					label: 'Usługi:',
					data: Object.entries(watchedData.services ?? {})
						.filter(([key, value]) => key !== 'additionalService' && value === true)
						.map(([key]) => key)
						.join(', ')
				},
				{ label: 'Dodatkowe usługi:', data: `${watchedData.services?.additionalService ?? ''}` }
			]
		},
		{
			title: 'Informacje dodatkowe',
			data: [
				{ label: 'Wiadomość:', data: `${watchedData.message ?? ''}` },
				{ label: 'Skąd o nas usłyszałeś:', data: `${watchedData.referralSource ?? ''}` },
				{ label: 'Jeśli inne to skąd:', data: `${watchedData.additionalReferralSource ?? ''}` }
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
