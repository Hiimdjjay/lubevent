import { Checkbox } from '../Inputs/Checkbox';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { Input } from '../Inputs/Input';

const serviceType = [
	'DJ',
	'Wodzirej',
	'Konferansjer',
	'Dj sportowy',
	'Technika sceniczna',
	'LubBar',
	'Fotobudka',
	'Animatorzy'
];

export function Services() {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 3 z 6' title='Usługi' subtitle='Wybierz usługi, które Cie interesują' />
			<div className='grid grid-cols-1 gap-x-5 gap-y-5  md:grid-cols-2 '>
				{serviceType.map(service => (
					<Checkbox key={service} id={service}>
						{service}
					</Checkbox>
				))}
			</div>
			<Input id='additionalService' type='text' placeholder='np. Fotograf'>
				Nie znalazłeś swojej usługi na liście? Opisz ją poniżej (opcjonalnie)
			</Input>
			<ButtonsBox />
		</div>
	);
}
