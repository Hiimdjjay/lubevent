import { ButtonsBox } from '../ButtonsBox';
import { Select } from '../Inputs/Select';
import { useState } from 'react';
import { FormStepHeader } from '../FormStepHeader';
import { Input } from '../Inputs/Input';
import { Textarea } from '../Inputs/Textarea';
import { FieldValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';

type AdditionalMessageProps = {
	register: UseFormRegister<FieldValues>;
	trigger: UseFormTrigger<FieldValues>;
};

const referralData = [
	{ id: 0, name: 'Wybierz' },
	{ id: 1, name: 'Social media' },
	{ id: 2, name: 'Google' },
	{ id: 3, name: 'Od znajomych' },
	{ id: 4, name: 'Inne' }
];

export function AdditionalMessage({ register, trigger }: AdditionalMessageProps) {
	const [referralOption, setReferralOption] = useState('');
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 5 z 6' title='Dodatkowe informacje' subtitle='Dodaj swoje pytania' />
			<div className='flex flex-col gap-5'>
				<Textarea id='message' autoComplete='off' register={register}>
					Opis, pytania lub szczegółowe wymagania
				</Textarea>
				<Select id='referralSource' selectData={referralData} setter={setReferralOption} register={register}>
					Skąd dowiedzieli się Państwo o nas? (Opcjonalnie)
				</Select>
				{referralOption === 'Inne' && (
					<Input
						id='additionalReferralSource'
						type='text'
						placeholder='np. Bawiłem się na weselu organizowanych przez państwa agencje'
						register={register}>
						Nie ma Twojej opcji? Napisz skąd nas znasz
					</Input>
				)}
			</div>
			<ButtonsBox trigger={trigger} />
		</div>
	);
}
