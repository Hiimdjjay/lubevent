import { Input } from '../Inputs/Input';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { UseFormRegister, FieldValues, UseFormTrigger, UseFormSetError } from 'react-hook-form';

type PersonalDetailsProps = {
	register: UseFormRegister<FieldValues>;
	errors: UseFormSetError<FieldValues>;
	trigger: UseFormTrigger<FieldValues>;
};

export function PersonalDetails({ register, errors, trigger }: PersonalDetailsProps) {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader
				label='Krok 1 z 6'
				title='Dane osobowe'
				subtitle='Podaj swoje dane osobowe oraz kontaktowe'
			/>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col justify-between gap-2 md:flex-row'>
					<Input
						id='personalDetails.name'
						type='text'
						placeholder='Jan'
						register={register}
						registerOptions={{ required: 'Wpisz swoje imię' }}
						isError={errors.personalDetails?.name}>
						Imię
					</Input>
					<Input
						id='personalDetails.surname'
						type='text'
						placeholder='Kowalski'
						register={register}
						registerOptions={{ required: 'Wpisz swoje nazwisko' }}
						isError={errors.personalDetails?.surname}>
						Nazwisko
					</Input>
				</div>
				<Input
					id='personalDetails.email'
					type='email'
					placeholder='jankowalski@domena.pl'
					register={register}
					registerOptions={{
						required: 'Wpisz swój adres e-mail',
						pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Niepoprawny adres e-mail' }
					}}
					isError={errors.personalDetails?.email}>
					Adres e-mail
				</Input>
				<Input
					id='personalDetails.telephone'
					type='tel'
					placeholder='+48 500 200 100'
					register={register}
					registerOptions={{
						required: 'Wpisz swój numer telefonu',
						minLength: { value: 9, message: 'Podaj prawidłowy numer telefonu' }
					}}
					isError={errors.personalDetails?.telephone}>
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
			<ButtonsBox trigger={trigger} />
		</div>
	);
}
