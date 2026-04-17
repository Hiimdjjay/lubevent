import { Select } from '../Inputs/Select';
import { Input } from '../Inputs/Input';
import { useState } from 'react';
import { ButtonsSelect } from '../Inputs/ButtonsSelect';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';

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

const budgetData = ['do 5 000 zł', '5 000-15 000 zł', '15 000-30 000 zł', 'powyżej 30 000 zł'];

export function EventDetails() {
	const [eventType, setEventType] = useState(0);

	console.log(eventType);

	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 2 z 6' title='Rodzaj wydarzenia' subtitle='Opisz nam swoje wydarzenie' />
			<div className='flex flex-col gap-5'>
				<Select id='eventType' selectData={eventTypeData} setter={setEventType}>
					Typ wydarzenia
				</Select>
				{eventType === 9 && (
					<Input id='eventType' type='text' placeholder='Jeśli wybrałeś inne to wpisz typ wydarzenia'>
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
			<ButtonsBox />
		</div>
	);
}
