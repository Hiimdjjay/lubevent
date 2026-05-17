'use client';

import { useState } from 'react';
import { InitialInfo } from './FormSteps/InitialInfo';
import { FormContext } from '@/context/FormContext';
import { PersonalDetails } from './FormSteps/PersonalDetails';
import { PlaceAndDate } from './FormSteps/PlaceAndDate';
import { FormDataType, StepFormData } from '@/validation/multiStepFormSchema';
import { EventDetails } from './FormSteps/EventDetails';
import { Services } from './FormSteps/Services';
import { AdditionalMessage } from './FormSteps/AdditionalMessage';
import { Summary } from './FormSteps/Summary/Summary';

export function Form() {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState<FormDataType>({
		personalDetails: {
			name: 'Jakub',
			surname: 'Rafalski',
			email: 'jakubrafalski96@gmail.com',
			telephone: '+48501858577'
		},
		placeAndDate: {
			date: '2025-12-31',
			isPlaceChoosed: 'Nie chce podawać'
		},
		eventDetails: {
			eventType: 'Wesele',
			totalGuests: '150'
		}
	});

	function nextStepSaveData(data: StepFormData) {
		setFormData(prev => {
			const updated = { ...prev, ...data };
			console.log(updated);
			return updated;
		});

		nextStep();
	}

	function nextStep() {
		setCurrentStep(prev => prev + 1);
	}

	function prevStep() {
		setCurrentStep(prev => prev - 1);
	}

	return (
		<FormContext.Provider value={{ currentStep, formData, prevStep, nextStep, nextStepSaveData }}>
			<div className='flex flex-col gap-5 w-full p-5 rounded-2xl bg-white  md:gap-7 md:p-10 lg:gap-10 '>
				{currentStep === 0 && <InitialInfo />}
				{currentStep === 1 && <PersonalDetails />}
				{currentStep === 2 && <PlaceAndDate />}
				{currentStep === 3 && <EventDetails />}
				{currentStep === 4 && <Services />}
				{currentStep === 5 && <AdditionalMessage />}
				{currentStep === 6 && <Summary />}
			</div>
		</FormContext.Provider>
	);
}
