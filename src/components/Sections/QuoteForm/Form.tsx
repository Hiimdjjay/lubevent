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

export function Form() {
	const [formDetails, setFormDetails] = useState<FieldValues>({});
	const [showStep, setShowStep] = useState<number>(0);

	const { register, getValues, handleSubmit, control, setValue } = useForm<FieldValues>();

	function onSubmit(data: FieldValues) {
		console.log(`Formularz wypełniony ${data}`);
	}
	return (
		<QuoteContext.Provider value={[showStep, setShowStep]}>
			<div className='flex flex-col gap-5 bg-bg-sectionLabel p-5 rounded-2xl md:p-10'>
				<form
					onSubmit={handleSubmit(data => onSubmit(data))}
					noValidate
					className='flex flex-col gap-5 w-full text-[17px] md:gap-7 lg:gap-10'>
					<div className={`${showStep === 0 ? 'block' : 'hidden'}`}>
						<InitialInfo />
					</div>
					<div className={`${showStep === 1 ? 'block' : 'hidden'}`}>
						<PersonalDetails register={register} />
					</div>
					<div className={`${showStep === 2 ? 'block' : 'hidden'}`}>
						<EventDetails register={register} control={control} setValue={setValue} />
					</div>
					<div className={`${showStep === 3 ? 'block' : 'hidden'}`}>
						<PlaceAndDate register={register} />
					</div>
					<div className={`${showStep === 4 ? 'block' : 'hidden'}`}>
						<Services register={register} />
					</div>
					<div className={`${showStep === 5 ? 'block' : 'hidden'}`}>
						<AdditionalMessage register={register} setFormDetails={setFormDetails} getValues={getValues} />
					</div>
					<div className={`${showStep === 6 ? 'block' : 'hidden'}`}>
						<Summary formDetails={formDetails} register={register} />
					</div>
				</form>
			</div>
		</QuoteContext.Provider>
	);
}
