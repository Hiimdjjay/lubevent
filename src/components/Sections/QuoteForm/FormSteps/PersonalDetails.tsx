import { Input } from '../Inputs/Input';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { UseFormRegister, FieldValues } from 'react-hook-form';

type PersonalDetailsProps = {
	register: UseFormRegister<FieldValues>;
};

export function PersonalDetails({ register }: PersonalDetailsProps) {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader
				label='Krok 1 z 6'
				title='Dane osobowe'
				subtitle='Podaj swoje dane osobowe oraz kontaktowe'
			/>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col justify-between gap-5 md:flex-row'>
					<Input id='personalDetails.name' type='text' placeholder='Jan' register={register}>
						Imię
					</Input>
					<Input id='personalDetails.surname' type='text' placeholder='Kowalski' register={register}>
						Nazwisko
					</Input>
				</div>
				<Input
					id='personalDetails.email'
					type='email'
					placeholder='jankowalski@domena.pl'
					register={register}>
					Adres e-mail
				</Input>
				<Input id='personalDetails.telephone' type='tel' placeholder='+48 500 200 100' register={register}>
					Telefon
				</Input>
				<Input
					id='personalDetails.companyName'
					type='text'
					placeholder='Nazwa Firmy'
					autoComplete='off'
					register={register}>
					Firma (Opcjonalnie)
				</Input>
			</div>
			<ButtonsBox />
		</div>
	);
}
