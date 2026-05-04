import { Checkbox } from '../../../UI/Inputs/Checkbox';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { Input } from '../../../UI/Inputs/Input';
import { FieldValues, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import { SERVICE_TYPE } from '@/constants/formData';

type ServicesProps = {
	register: UseFormRegister<FieldValues>;
	trigger: UseFormTrigger<FieldValues>;
};

export function Services({ register, trigger }: ServicesProps) {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 4 z 6' title='Usługi' subtitle='Wybierz usługi, które Cie interesują' />
			<div className='grid grid-cols-1 gap-x-5 gap-y-5 '>
				{SERVICE_TYPE.map(({ id, label }) => (
					<Checkbox key={id} id={label} register={register}>
						{label}
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
