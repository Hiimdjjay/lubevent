import { Input } from '../../../UI/Inputs/Input';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { useContext } from 'react';
import { FormContext } from '../../../../context/FormContext';
import { personalDetailsFields } from '../../../../constants/multiStepForm';
import { useFormContext } from 'react-hook-form';
import { FormData } from '@/validation/multiStepFormSchema';

export function PersonalDetails() {
	const { step } = useContext(FormContext)!;
	const {
		register,
		formState: { errors }
	} = useFormContext<FormData>();

	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader
				label={`Krok ${step} z 6`}
				title='Dane osobowe'
				subtitle='Podaj swoje dane osobowe oraz kontaktowe'
			/>
			<div className='flex flex-col gap-2'>
				<div className='flex flex-col justify-between gap-2 md:flex-row'>
					<Input {...personalDetailsFields.name} register={register} error={errors.personalDetails?.name} />
					<Input
						{...personalDetailsFields.surname}
						register={register}
						error={errors.personalDetails?.surname}
					/>
				</div>
				<Input {...personalDetailsFields.email} register={register} error={errors.personalDetails?.email} />

				<Input
					{...personalDetailsFields.telephone}
					register={register}
					error={errors.personalDetails?.telephone}
				/>

				<Input {...personalDetailsFields.companyName} autoComplete='off' register={register} />
			</div>
			<ButtonsBox />
		</div>
	);
}
