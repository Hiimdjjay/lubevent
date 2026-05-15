import { Input } from '../../../UI/Inputs/Input';
import { Select } from '../../../UI/Inputs/Select';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { useContext } from 'react';
import { FormContext } from '../../../../context/FormContext';
import { placeAndDateFields } from '@/constants/multiStepForm';
import { FormData } from '@/validation/multiStepFormSchema';
import { useFormContext } from 'react-hook-form';

export function PlaceAndDate() {
	const { step } = useContext(FormContext)!;
	const {
		register,
		formState: { errors }
	} = useFormContext<FormData>();

	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label={`Krok ${step} z 6`} title='Miejsce i data' subtitle='Opisz nam swoje wydarzenie' />
			<div className='flex flex-col gap-2'>
				<Input {...placeAndDateFields.date} register={register} error={errors.placeAndDate?.date} />
				<Select
					{...placeAndDateFields.isPlaceChoosed}
					register={register}
					error={errors.placeAndDate?.isPlaceChoosed}
				/>

				<Input {...placeAndDateFields.city} register={register} error={errors.placeAndDate?.city} />
				<Input {...placeAndDateFields.adress} register={register} error={errors.placeAndDate?.adress} />
			</div>
			<ButtonsBox />
		</div>
	);
}
