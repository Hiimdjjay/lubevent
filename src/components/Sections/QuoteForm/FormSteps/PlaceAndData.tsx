import { Input } from '../Inputs/Input';
import { useState } from 'react';
import { Select } from '../Inputs/Select';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { FieldValues, UseFormRegister, UseFormSetValue, UseFormTrigger } from 'react-hook-form';

type PlaceAndDateProps = {
	register: UseFormRegister<FieldValues>;
	setValue: UseFormSetValue<FieldValues>;
	errors: any;
	trigger: UseFormTrigger<FieldValues>;
};

const placeData = [
	{ id: 0, name: 'Wybierz jedną z opcji' },
	{ id: 1, name: 'Tak, miejsce jest wybrane' },
	{ id: 2, name: 'Nie, miejsce nie jest jeszcze wybrane' },
	{ id: 3, name: 'Nie chce podawać miejsca' }
];
export function PlaceAndDate({ register, setValue, errors, trigger }: PlaceAndDateProps) {
	const [placeName, setPlaceName] = useState<string>('');

	function handlePlaceName(value: string) {
		setPlaceName(value);
		if (value !== 'Tak, miejsce jest wybrane') {
			setValue('place.place', '');
			setValue('place.venuePlace', '');
		}
	}

	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 2 z 6' title='Miejsce i data' subtitle='Opisz nam swoje wydarzenie' />
			<div className='flex flex-col gap-5'>
				<Input
					id='date'
					type='date'
					register={register}
					registerOptions={{ required: 'Podaj datę wydarzenia' }}
					isError={errors.date}>
					Data wydarzenia
				</Input>
				<Select
					id='place.isPlaceChoosed'
					selectData={placeData}
					setter={handlePlaceName}
					register={register}
					registerOptions={{ required: 'Wybierz jedną z opcji' }}
					isError={errors.place?.isPlaceChoosed}>
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
			<ButtonsBox trigger={trigger} />
		</div>
	);
}
