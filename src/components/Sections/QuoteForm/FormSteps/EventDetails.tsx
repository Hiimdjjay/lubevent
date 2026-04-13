import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Button } from '@/components/UI/Button';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';
import { Select } from '../Inputs/Select';
import { Input } from '../Inputs/Input';
import { useState } from 'react';

export function EventDetails() {
	const [eventType, setEventType] = useState(0);
	const [, setShowStep] = useContext(QuoteContext);

	console.log(eventType);

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col items-start'>
				<SectionLabel bgColor='bg-white'>Krok 2 z 6</SectionLabel>
				<SectionTitle>Rodzaj wydarzenia</SectionTitle>
				<Subtitle>Opisz nam swoje wydarzenie</Subtitle>
			</div>
			<div className='flex flex-col gap-5'>
				<Select id='eventType' setEventType={setEventType}>
					Typ wydarzenia
				</Select>
				{eventType === 9 && (
					<Input
						id='guestsQuantity'
						type='number'
						placeholder='Jeśli wybrałeś inne to wpisz typ wydarzenia'>
						Wpisz typ wydarzenia
					</Input>
				)}
				<Input id='guestsQuantity' type='number' placeholder='np. 150'>
					Liczba gości
				</Input>
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
