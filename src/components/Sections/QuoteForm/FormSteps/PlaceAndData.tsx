import { Input } from '../Inputs/Input';
import { useState } from 'react';
import { Select } from '../Inputs/Select';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';

const placeData = [
	{ id: 0, name: 'Wybierz jedną z opcji' },
	{ id: 1, name: 'Tak, miejsce jest wybrane' },
	{ id: 2, name: 'Nie, miejsce nie jest jeszcze wybrane' },
	{ id: 3, name: 'Nie chce podawać miejsca' }
];
export function PlaceAndDate() {
	const [placeName, setPlaceName] = useState(0);

	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 3 z 6' title='Miejsce i data' subtitle='Opisz nam swoje wydarzenie' />
			<div className='flex flex-col gap-5'>
				<Input id='date' type='date'>
					Data wydarzenia
				</Input>
				<Select id='isPlaceChoosed' selectData={placeData} setter={setPlaceName}>
					Czy mają państwo wybrane miejsce?
				</Select>
				{placeName === 1 && (
					<>
						<Input id='place' type='text' placeholder='np. Lublin'>
							Miejscowość
						</Input>
						<Input id='venuePlace' type='text' placeholder='np. Rezydencja w szczerym polu'>
							Nazwa lokalu lub adres
						</Input>
					</>
				)}
			</div>
			<ButtonsBox />
		</div>
	);
}
