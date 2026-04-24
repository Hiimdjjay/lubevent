import { Checkbox } from '../Inputs/Checkbox';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { Input } from '../Inputs/Input';
import { FieldValues, UseFormRegister } from 'react-hook-form';

type ServicesProps = {
	register: UseFormRegister<FieldValues>;
};

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

export function Services({ register, trigger }: ServicesProps) {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 3 z 6' title='Usługi' subtitle='Wybierz usługi, które Cie interesują' />
			<div className='grid grid-cols-1 gap-x-5 gap-y-5 '>
				{serviceType.map(service => (
					<Checkbox key={service} id={service} register={register}>
						{service}
					</Checkbox>
				))}
			</div>
			<Input
				id='services.additionalService'
				type='text'
				placeholder='np. Fotograf'
				autoComplete='off'
				register={register}>
				Nie znalazłeś swojej usługi na liście? Opisz ją poniżej (Opcjonalnie)
			</Input>
			<ButtonsBox trigger={trigger} />
		</div>
	);
}
