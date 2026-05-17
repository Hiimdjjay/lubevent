import { Button } from '@/components/UI/Buttons/Button';
import { FormStepHeader } from '../FormStepHeader';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { Checkbox } from '@/components/UI/Inputs/Checkbox';
import { SERVICE_FIELDS } from '@/constants/multiStepFormData';
import { Input } from '@/components/UI/Inputs/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { servicesSchema } from '@/validation/multiStepFormSchema';

export function Services() {
	const { currentStep, formData, prevStep, nextStepSaveData } = useContext(FormContext)!;

	const { register, handleSubmit } = useForm({ resolver: zodResolver(servicesSchema), defaultValues: formData });
	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit(nextStepSaveData)}>
			<FormStepHeader
				label={`Krok ${currentStep} z 6`}
				title='Usługi'
				subtitle='Wybierz usługi, które Cie interesują'
			/>
			<div className='grid grid-cols-1 gap-x-5 gap-y-5 '>
				{SERVICE_FIELDS.services.map(({ id, name, label }) => (
					<Checkbox key={id} name={name} label={label} register={register} questionMark />
				))}
			</div>
			<Input {...SERVICE_FIELDS.additionalServices} autoComplete='off' register={register} />
			<div className='flex justify-between'>
				<Button variant='secondary' onClick={prevStep}>
					Wróc
				</Button>
				<Button variant='primary' type='submit'>
					Dalej
				</Button>
			</div>
		</form>
	);
}
