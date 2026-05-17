import { Select } from '../../../UI/Inputs/Select';
import { Input } from '../../../UI/Inputs/Input';
import { ButtonsSelect } from '../../../UI/Inputs/ButtonsSelect';
import { FormStepHeader } from '../FormStepHeader';
import { Button } from '@/components/UI/Buttons/Button';
import { useForm } from 'react-hook-form';
import { eventDetailsSchema, EventDetailsSchemaType } from '@/validation/multiStepFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormContext } from '@/context/FormContext';
import { useContext } from 'react';
import { EVENT_DETAILS_FIELDS } from '@/constants/multiStepFormData';

export function EventDetails() {
	const { currentStep, formData, prevStep, nextStepSaveData } = useContext(FormContext)!;
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors }
	} = useForm<EventDetailsSchemaType>({ resolver: zodResolver(eventDetailsSchema), defaultValues: formData });

	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit(nextStepSaveData)}>
			<FormStepHeader
				label={`Krok ${currentStep} z 6`}
				title='Rodzaj wydarzenia'
				subtitle='Opisz nam swoje wydarzenie'
			/>
			<div className='flex flex-col gap-2'>
				<Select
					{...EVENT_DETAILS_FIELDS.eventType}
					register={register}
					error={errors.eventDetails?.eventType}
				/>
				{watch('eventDetails.eventType') === 'Inne' && (
					<Input
						{...EVENT_DETAILS_FIELDS.eventDescription}
						register={register}
						error={errors.eventDetails?.eventDescription}
					/>
				)}

				<Input
					{...EVENT_DETAILS_FIELDS.totalGuests}
					autoComplete='off'
					register={register}
					error={errors.eventDetails?.totalGuests}
				/>
				<ButtonsSelect
					{...EVENT_DETAILS_FIELDS.estimatedBudget}
					onClick={value => setValue('eventDetails.estimatedBudget', value, { shouldValidate: true })}
					value={watch('eventDetails.estimatedBudget')}
				/>
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
