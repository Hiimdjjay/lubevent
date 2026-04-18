import { Input } from '../Inputs/Input';
import { useState } from 'react';
import { Select } from '../Inputs/Select';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type PlaceAndDateProps = {
	register: UseFormRegister<FieldValues>;
};

const placeData = [
	{ id: 0, name: 'Wybierz jedną z opcji' },
	{ id: 1, name: 'Tak, miejsce jest wybrane' },
	{ id: 2, name: 'Nie, miejsce nie jest jeszcze wybrane' },
	{ id: 3, name: 'Nie chce podawać miejsca' }
];
export function PlaceAndDate({ register }: PlaceAndDateProps) {
	const [placeName, setPlaceName] = useState<string>('');

	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 3 z 6' title='Miejsce i data' subtitle='Opisz nam swoje wydarzenie' />
			<div className='flex flex-col gap-5'>
				<Input id='date' type='date' register={register}>
					Data wydarzenia
				</Input>
				<Select id='place.isPlaceChoosed' selectData={placeData} setter={setPlaceName} register={register}>
					Czy mają państwo wybrane miejsce?
				</Select>
				{placeName === 'Tak, miejsce jest wybrane' && (
					<>
						<Input id='place.place' type='text' placeholder='np. Lublin' register={register}>
							Miejscowość
						</Input>
						<Input
							id='place.venuePlace'
							type='text'
							placeholder='np. Rezydencja w szczerym polu'
							register={register}>
							Adres lub nazwa lokalu
						</Input>
					</>
				)}
			</div>
			<ButtonsBox />
		</div>
	);
}
