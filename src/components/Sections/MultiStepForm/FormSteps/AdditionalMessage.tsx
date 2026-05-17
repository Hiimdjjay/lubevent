import { Select } from '../../../UI/Inputs/Select';
import { FormStepHeader } from '../FormStepHeader';
import { Input } from '../../../UI/Inputs/Input';
import { Textarea } from '../../../UI/Inputs/Textarea';
import { Button } from '@/components/UI/Buttons/Button';
import { FormContext } from '@/context/FormContext';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { additionalMessageSchema } from '@/validation/multiStepFormSchema';
import { ADDITIONAL_MESSAGE } from '@/constants/multiStepFormData';

export function AdditionalMessage() {
	const { currentStep, formData, prevStep, nextStepSaveData } = useContext(FormContext)!;
	const { register, handleSubmit, watch } = useForm({
		resolver: zodResolver(additionalMessageSchema),
		defaultValues: formData
	});

	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit(nextStepSaveData)}>
			<FormStepHeader
				label={`Krok ${currentStep} z 6`}
				title='Dodatkowe informacje'
				subtitle='Dodaj swoje pytania'
			/>
			<div className='flex flex-col gap-2'>
				<Textarea {...ADDITIONAL_MESSAGE.message} autoComplete='off' register={register} />
				<Select {...ADDITIONAL_MESSAGE.referralSource} register={register} />
				{watch('message.referralSource') === 'Inne' && (
					<Input {...ADDITIONAL_MESSAGE.additionalReferralSource} register={register} />
				)}
			</div>
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
