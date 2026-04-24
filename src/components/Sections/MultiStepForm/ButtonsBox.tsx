import { Button } from '@/components/UI/Buttons/Button';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';
import { FieldValues, UseFormTrigger } from 'react-hook-form';
import Spinner from '@/components/UI/Spinner';

type ButtonsBoxProps = {
	trigger?: UseFormTrigger<FieldValues>;
	extraFields?: string[];
};

const stepFields: Record<number, string[]> = {
	1: [
		'personalDetails.name',
		'personalDetails.surname',
		'personalDetails.email',
		'personalDetails.telephone'
	],
	2: ['date', 'place.isPlaceChoosed'],
	3: ['eventType.eventType', 'guestsQuantity', 'eventType.budgetSelected']
};

export function ButtonsBox({ trigger, extraFields = [], isSubmitting }: ButtonsBoxProps) {
	const [stepShow, setShowStep] = useContext(QuoteContext);

	async function handleNext() {
		const fields = [...(stepFields[stepShow] ?? []), ...extraFields];
		const isValid = !trigger || fields.length === 0 || (await trigger(fields));
		if (isValid) setShowStep(prev => prev + 1);
	}

	if (stepShow === 0) {
		return (
			<div className='flex flex-col justidy-center items-center gap-2 '>
				<Button variant='primary' onClick={() => setShowStep(prev => prev + 1)}>
					Rozpocznij wycenę
				</Button>
				<SecondaryButton href='/'>Wróć na stronę główną</SecondaryButton>
			</div>
		);
	}

	if (stepShow === 6) {
		return (
			<div className='flex justify-between'>
				<Button variant='secondary' onClick={() => setShowStep(prev => prev - 1)}>
					Wstecz
				</Button>
				<Button variant='primary' type='submit'>
					{isSubmitting ? <Spinner /> : 'Wyślij'}
				</Button>
			</div>
		);
	}

	return (
		<div className='flex justify-between'>
			<Button variant='secondary' onClick={() => setShowStep(prev => prev - 1)}>
				Wstecz
			</Button>
			<Button variant='primary' onClick={handleNext}>
				Dalej
			</Button>
		</div>
	);
}
