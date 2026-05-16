'use client';

import { Input } from '@/components/UI/Inputs/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema } from '@/validation/contactFormSchema';
import { z } from 'zod';

type ContactFormData = z.infer<typeof contactFormSchema>;
import { Button } from '@/components/UI/Buttons/Button';
import { Textarea } from '@/components/UI/Inputs/Textarea';
import { Checkbox } from '@/components/UI/Inputs/Checkbox';
import Spinner from '@/components/UI/Spinner';
import { Submitted } from '../../../UI/Submitted';
import { contactFormInputs } from '@/constants/contactData';

export function FormComponent() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting, isSubmitSuccessful }
	} = useForm({ resolver: zodResolver(contactFormSchema) });

	async function onSubmit(data: ContactFormData) {
		const { privacyPolicy, ...restData } = data;

		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(restData)
			});
			if (!response.ok) {
				throw new Error('Server error');
			}
		} catch {
			setError('root', { message: 'Błąd wysyłania wiadomości. Spróbuj ponownie wysłać wiadomość!' });
		}
	}

	if (isSubmitSuccessful) return <Submitted bgColor='bg-bg-sectionLabel' />;

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex flex-col gap-6 w-full p-5 rounded-2xl bg-bg-sectionLabel md:p-10'>
			<div className='flex flex-col gap-2'>
				<Input {...contactFormInputs[0]} register={register} error={errors.name} />
				<div className='flex flex-col gap-2 md:flex-row md:gap-5'>
					<Input {...contactFormInputs[1]} register={register} error={errors.email} />
					<Input {...contactFormInputs[2]} register={register} error={errors.tel} />
				</div>
				<Textarea {...contactFormInputs[3]} register={register} error={errors.message} />
				<Checkbox
					{...contactFormInputs[4]}
					register={register}
					error={errors.privacyPolicy}
					questionMark={false}
				/>
			</div>
			<Button variant='primary' type='submit'>
				{isSubmitting ? <Spinner /> : 'Wyślij'}
			</Button>
			{errors.root && <span className='text-sm text-red-400 font-medium ml-1'>{errors.root?.message}</span>}
		</form>
	);
}
