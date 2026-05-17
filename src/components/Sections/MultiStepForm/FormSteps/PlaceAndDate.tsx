import { Input } from '../../../UI/Inputs/Input';
import { Select } from '../../../UI/Inputs/Select';
import { FormStepHeader } from '../FormStepHeader';
import { useContext } from 'react';
import { FormContext } from '../../../../context/FormContext';
import { Button } from '@/components/UI/Buttons/Button';
import { PlaceAndDateSchemaType, placeAndDateSchema } from '@/validation/multiStepFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { PLACE_DATE_FIELDS } from '@/constants/multiStepFormData';

export function PlaceAndDate() {
	const { currentStep, formData, prevStep, nextStepSaveData } = useContext(FormContext)!;
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<PlaceAndDateSchemaType>({ resolver: zodResolver(placeAndDateSchema), defaultValues: formData });
	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit(nextStepSaveData)}>
			<FormStepHeader
				label={`Krok ${currentStep} z 6`}
				title='Miejsce i data'
				subtitle='Opisz nam swoje wydarzenie'
			/>
			<div className='flex flex-col gap-2'>
				<Input {...PLACE_DATE_FIELDS.date} register={register} error={errors.placeAndDate?.date} />
				<Select
					{...PLACE_DATE_FIELDS.isPlaceChoosed}
					register={register}
					error={errors.placeAndDate?.isPlaceChoosed}
				/>
				{watch('placeAndDate.isPlaceChoosed') === 'Tak, miejsce jest wybrane' && (
					<>
						<Input {...PLACE_DATE_FIELDS.city} register={register} error={errors.placeAndDate?.city} />
						<Input {...PLACE_DATE_FIELDS.adress} register={register} error={errors.placeAndDate?.adress} />
					</>
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
