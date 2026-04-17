import { Button } from '@/components/UI/Button';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';
import { SecondaryButton } from '@/components/UI/SecondaryButton';

export function ButtonsBox() {
	const [stepShow, setShowStep] = useContext(QuoteContext);
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
				<Button variant='primary' type='submit' onClick={() => setShowStep(prev => prev + 1)}>
					Wyślij formularz
				</Button>
			</div>
		);
	}

	return (
		<div className='flex justify-between'>
			<Button variant='secondary' onClick={() => setShowStep(prev => prev - 1)}>
				Wstecz
			</Button>
			<Button variant='primary' onClick={() => setShowStep(prev => prev + 1)}>
				Dalej
			</Button>
		</div>
	);
}
