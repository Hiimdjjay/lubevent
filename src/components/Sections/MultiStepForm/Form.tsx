'use client';

import { StepFormData } from '@/validation/multiStepFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export function Form() {
	const {
		register,
		handleSubmit,
		trigger,
		setValue,
		reset,
		formState = { errors }
	} = useForm<StepFormData>({ resolver: zodResolver(getCurrentStepSchema()) });
	return <form></form>;
}
