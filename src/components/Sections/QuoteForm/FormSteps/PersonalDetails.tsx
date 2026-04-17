import { Input } from '../Inputs/Input';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';

export function PersonalDetails() {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader
				label='Krok 1 z 6'
				title='Dane osobowe'
				subtitle='Podaj swoje dane osobowe oraz kontaktowe'
			/>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col justify-between gap-5 md:flex-row'>
					<Input id='name' type='text' placeholder='Jan'>
						Imię
					</Input>
					<Input id='surname' type='text' placeholder='Kowalski'>
						Nazwisko
					</Input>
				</div>
				<Input id='email' type='email' placeholder='jankowalski@domena.pl'>
					Adres e-mail
				</Input>
				<Input id='telephone' type='tel' placeholder='+48 500 200 100'>
					Telefon
				</Input>
				<Input id='surname' type='text' placeholder='Nazwa Firmy'>
					Firma (opcjonalnie)
				</Input>
			</div>
			<ButtonsBox />
		</div>
	);
}
