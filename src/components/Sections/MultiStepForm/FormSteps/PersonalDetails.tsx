import { Input } from '../../../UI/Inputs/Input';
import { FormStepHeader } from '../FormStepHeader';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { Button } from '@/components/UI/Buttons/Button';
import { personalDetailsSchema, PersonalInfoSchemaType } from '@/validation/multiStepFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { PERSONAL_DETAILS_FIELDS } from '@/constants/multiStepFormData';

export function PersonalDetails() {
	const { currentStep, formData, prevStep, nextStepSaveData } = useContext(FormContext)!;
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<PersonalInfoSchemaType>({ resolver: zodResolver(personalDetailsSchema), defaultValues: formData });

	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit(nextStepSaveData)}>
			<FormStepHeader
				label={`Krok ${currentStep} z 6`}
				title='Dane osobowe'
				subtitle='Podaj swoje dane osobowe oraz kontaktowe'
			/>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col justify-between gap-2 md:flex-row'>
					<Input {...PERSONAL_DETAILS_FIELDS.name} register={register} error={errors.personalDetails?.name} />
					<Input
						{...PERSONAL_DETAILS_FIELDS.surname}
						register={register}
						error={errors.personalDetails?.surname}
					/>
				</div>
				<Input {...PERSONAL_DETAILS_FIELDS.email} register={register} error={errors.personalDetails?.email} />

				<Input
					{...PERSONAL_DETAILS_FIELDS.telephone}
					register={register}
					error={errors.personalDetails?.telephone}
				/>

				<Input {...PERSONAL_DETAILS_FIELDS.companyName} autoComplete='off' register={register} />
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
