import { Button } from '@/components/UI/Button';
import { Checkbox } from '../Inputs/Checkbox';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';

const serviceType = [
	'DJ',
	'Wodzirej',
	'Konferansjer',
	'Dj sportowy',
	'Technika sceniczna',
	'LubBar',
	'Fotobudka',
	'Animatorzy'
];

export function Services() {
	const [, setShowStep] = useContext(QuoteContext);
	return (
		<div className='flex flex-col gap-5'>
			<div className='grid grid-cols-2 gap-x-5 gap-y-3'>
				{serviceType.map(service => (
					<Checkbox key={service} id={service}>
						{service}
					</Checkbox>
				))}
			</div>
			<div className='flex justify-between'>
				<Button variant='secondary' onClick={() => setShowStep(prev => prev - 1)}>
					Wstecz
				</Button>
				<Button variant='primary' onClick={() => setShowStep(prev => prev + 1)}>
					Dalej
				</Button>
			</div>
		</div>
	);
}
