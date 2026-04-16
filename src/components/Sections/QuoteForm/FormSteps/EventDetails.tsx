import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Button } from '@/components/UI/Button';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';
import { Select } from '../Inputs/Select';
import { Input } from '../Inputs/Input';
import { useState } from 'react';
import { ButtonsSelect } from '../Inputs/ButtonsSelect';

type EventOption = {
	id: number;
	name: string;
};

const eventTypeData: EventOption[] = [
	{ id: 0, name: 'Wybierz typ wydarzenia ' },
	{ id: 1, name: 'Wesele' },
	{ id: 2, name: 'Gala / bankiet' },
	{ id: 3, name: 'Studniówka' },
	{ id: 4, name: '18-nastka' },
	{ id: 5, name: 'Jubileusz' },
	{ id: 6, name: 'Konferencja' },
	{ id: 7, name: 'Wydarzenie marketingowe' },
	{ id: 8, name: 'Wydarzenie sportowe' },
	{ id: 9, name: 'Inne' }
];

const budgetData = [
	'do 5 000 zł',
	'5 000-15 000 zł',
	'15 000-30 000 zł',
	'powyżej 30 000 zł'
];

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
				<Select id='eventType' selectData={eventTypeData} setEventType={setEventType}>
					Typ wydarzenia
				</Select>
				{eventType === 9 && (
					<Input
						id='eventType'
						type='text'
						placeholder='Jeśli wybrałeś inne to wpisz typ wydarzenia'>
						Wpisz typ wydarzenia
					</Input>
				)}
				<Input id='guestsQuantity' type='number' placeholder='np. 150'>
					Liczba gości
				</Input>
				<ButtonsSelect id='budgetSelected' budgetData={budgetData}>
					Szacunkowy budżet (Opcjonalnie)
				</ButtonsSelect>
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
