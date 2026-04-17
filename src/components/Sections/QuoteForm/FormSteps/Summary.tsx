import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { Checkbox } from '../Inputs/Checkbox';

export function Summary() {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 6 z 6' title='Podsumowanie' subtitle='Sprawdź swoje dane' />
			<div>Dane do podsumowania przed wysłaniem</div>
			<Checkbox id='privacyPolicy' questionMark={false}>
				Akceptuję{' '}
				<a
					href='/polityka-prywatnosci'
					target='_blank'
					className=' underline underline-offset-5 decoration-2 decoration-bg-btn-purple'>
					politykę prywatności
				</a>
				.
			</Checkbox>
			<ButtonsBox />
		</div>
	);
}
