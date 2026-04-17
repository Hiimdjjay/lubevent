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

export function Form() {
	const [showStep, setShowStep] = useState<number>(0);
	return (
		<QuoteContext.Provider value={[showStep, setShowStep]}>
			<div className='flex flex-col gap-5 bg-bg-sectionLabel p-5 rounded-2xl md:p-10'>
				{/* {showStep === 0 ? <></> : <FormNav showStep={showStep}></FormNav>} */}
				<form className='flex flex-col gap-5 w-full text-[17px] md:gap-7 lg:gap-10'>
					{showStep === 0 && <InitialInfo />}
					{showStep === 1 && <PersonalDetails />}
					{showStep === 2 && <EventDetails />}
					{showStep === 3 && <PlaceAndDate />}
					{showStep === 4 && <Services />}
					{showStep === 5 && <AdditionalMessage />}
					{showStep === 6 && <Summary />}
				</form>
			</div>
		</QuoteContext.Provider>
	);
}
