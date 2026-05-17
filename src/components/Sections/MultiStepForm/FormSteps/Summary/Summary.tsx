import { FormStepHeader } from '../../FormStepHeader';
import { Checkbox } from '../../../../UI/Inputs/Checkbox';
import { Button } from '@/components/UI/Buttons/Button';
import { useForm } from 'react-hook-form';
import { summarySchema } from '@/validation/multiStepFormSchema';
import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { SUMMARY_DATA } from '@/constants/multiStepFormData';
import { SummaryData } from './SummaryData';
import { Submitted } from '@/components/UI/Submitted';
import Spinner from '@/components/UI/Spinner';

export function Summary() {
	const { currentStep, formData, prevStep } = useContext(FormContext)!;
	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors, isSubmitSuccessful, isSubmitting }
	} = useForm({ resolver: zodResolver(summarySchema), defaultValues: formData });

	async function onSubmit() {
		try {
			const promise = await fetch('/api/send-quote', {
				method: 'POST',
				headers: { 'content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			if (!promise.ok) {
				throw new Error('Błąd wysyłania');
			}
		} catch (e) {
			console.error(e);
			setError('root', { message: 'Błąd wysyłania wiadomości. Spróbuj jescze raz.' });
		}
		reset();
		console.log(formData);
	}

	if (isSubmitSuccessful) return <Submitted />;
	return (
		<form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
			<FormStepHeader label={`Krok ${currentStep} z 6`} title='Podsumowanie' subtitle='Sprawdź swoje dane' />
			<SummaryData formData={formData} />
			<Checkbox
				{...SUMMARY_DATA.privacyPolicy}
				questionMark={false}
				register={register}
				error={errors.privacyPolicy}
			/>
			<div className='flex justify-between'>
				<Button variant='secondary' onClick={prevStep}>
					Wróc
				</Button>
				<Button variant='primary' type='submit' isSubmitting={isSubmitting}>
					{isSubmitting ? <Spinner /> : 'Wyslij'}
				</Button>
			</div>
			{errors.root && <span className='text-center  text-red-400 font-medium ml-1'>{errors.root.message}</span>}
		</form>
	);
}
