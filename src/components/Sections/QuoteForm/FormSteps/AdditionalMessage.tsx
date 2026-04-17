import { ButtonsBox } from '../ButtonsBox';
import { Select } from '../Inputs/Select';
import { useState } from 'react';
import { FormStepHeader } from '../FormStepHeader';
import { Input } from '../Inputs/Input';

const referralData = [
	{ id: 0, name: 'Wybierz' },
	{ id: 1, name: 'Social media' },
	{ id: 2, name: 'Google' },
	{ id: 3, name: 'Od znajomych' },
	{ id: 4, name: 'Inne' }
];

export function AdditionalMessage() {
	const [referralOption, setReferralOption] = useState(0);
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 5 z 6' title='Dodatkowe informacje' subtitle='Dodaj swoje pytania' />
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col gap-2 w-full'>
					<label className='font-semibold text-black/70 md:text-lg'>
						Opis, pytania lub szczegółowe wymagania
					</label>
					<textarea
						placeholder='Opisz dokładniej swoje oczekiwania, specjalne życzenia lub pytania dotyczące organizacji wydarzenia
                        '
						className='px-5 py-2.5 w-full min-h-50 bg-white text-black/60 font-medium  rounded-xl border border-black/15 placeholder-black/50'></textarea>
				</div>
				<Select id='referralSource' selectData={referralData} setter={setReferralOption}>
					Skąd dowiedzieli się Państwo o nas? (opcjonalnie)
				</Select>
				{referralOption === 4 && (
					<Input
						id='additionalReferralSource'
						type='text'
						placeholder='np. Bawiłem się na weselu organizowanych przez państwo'>
						Jeśli nie ma odpowiedniej opcji powyzej to napisz skąd się o nas dowiedziałeś
					</Input>
				)}
			</div>
			<ButtonsBox />
		</div>
	);
}
