import { Button } from '@/components/UI/Buttons/Button';
import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';
import Spinner from '@/components/UI/Spinner';
import { useFormContext } from 'react-hook-form';
import { FormData } from '@/validation/multiStepFormSchema';

export function ButtonsBox() {
	const { step, setStep } = useContext(FormContext)!;
	const {
		trigger,
		formState: { isSubmitting }
	} = useFormContext<FormData>();

	const valuesToValidate = {
		1: [
			'personalDetails.name',
			'personalDetails.surname',
			'personalDetails.email',
			'personalDetails.telephone',
			'personalDetails.companyName'
		],
		2: ['placeAndDate.date', 'placeAndDate.isPlaceChoosed', 'placeAndDate.city', 'placeAndDate.adress']
	};

	async function handleNext() {
		const isValid = await trigger(valuesToValidate[step as keyof typeof valuesToValidate]);
		if (isValid) setStep(prev => prev + 1);
	}

	if (step === 0) {
		return (
			<div className='flex flex-col justidy-center items-center gap-2 '>
				<Button variant='primary' onClick={() => setStep(prev => prev + 1)}>
					Rozpocznij wycenę
				</Button>
				<SecondaryButton path='/'>Wróć na stronę główną</SecondaryButton>
			</div>
		);
	}

	if (step === 6) {
		return (
			<div className='flex justify-between'>
				<Button variant='secondary' onClick={() => setStep(prev => prev - 1)}>
					Wstecz
				</Button>
				<Button variant='primary' type='submit' isSubmitting={isSubmitting}>
					{isSubmitting ? <Spinner /> : 'Wyślij'}
				</Button>
			</div>
		);
	}

	return (
		<div className='flex justify-between'>
			<Button variant='secondary' onClick={() => setStep(prev => prev - 1)}>
				Wstecz
			</Button>
			<Button variant='primary' onClick={handleNext}>
				Dalej
			</Button>
		</div>
	);
}
