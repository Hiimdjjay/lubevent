'use client';

import { InitialInfo } from './FormSteps/InitialInfo';
import { PersonalDetails } from './FormSteps/PersonalDetails';
import { FormContext } from '../../../context/FormContext';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormData, multiStepFormSchema } from '../../../validation/multiStepFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlaceAndDate } from './FormSteps/PlaceAndData';

export function Form() {
	const [step, setStep] = useState(0);

	const methods = useForm<FormData>({
		mode: 'onChange',
		resolver: zodResolver(multiStepFormSchema)
	});

	const { handleSubmit } = methods;

	function onSubmit(data: FormData) {
		console.log(data);
	}

	return (
		<FormProvider {...methods}>
			<FormContext.Provider value={{ step, setStep }}>
				<form
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					className='flex flex-col gap-5 w-full  p-5 rounded-2xl bg-white md:p-10 md:gap-7 lg:gap-10'>
					{step === 0 && <InitialInfo />}
					{step === 1 && <PersonalDetails />}
					{step === 2 && <PlaceAndDate />}
				</form>
			</FormContext.Provider>
		</FormProvider>
	);
}
