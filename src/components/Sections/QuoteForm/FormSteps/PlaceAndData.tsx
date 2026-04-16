import { SectionLabel } from '@/components/UI/SectionLabel';
import { Input } from '../Inputs/Input';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Button } from '@/components/UI/Button';
import { useContext, useState } from 'react';
import { QuoteContext } from '@/context/QuoteContext';
import { Select } from '../Inputs/Select';

const placeData = [
	{ id: 0, name: 'Wybierz jedną z opcji' },
	{ id: 1, name: 'Tak, miejsce jest wybrane' },
	{ id: 2, name: 'Nie, miejsce nie jest jeszcze wybrane' },
	{ id: 3, name: 'Nie chce podawać miejsca' }
];
export function PlaceAndDate() {
	const [placeName, setPlaceName] = useState(0);
	const [, setShowStep] = useContext(QuoteContext);

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col items-start'>
				<SectionLabel bgColor='bg-white'>Krok 2 z 6</SectionLabel>
				<SectionTitle>Miejsce i data</SectionTitle>
				<Subtitle>Opisz nam swoje wydarzenie</Subtitle>
			</div>
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
							Nazwa lokalu
						</Input>
					</>
				)}
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
