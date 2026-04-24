'use client';

import { useForm } from 'react-hook-form';
import Spinner from '../../../UI/Spinner';

type Message = {
	name: string;
	email: string;
	tel: string;
	privacyPolicy: boolean;
	message: string;
};

export function FormComponent() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitSuccessful, isSubmitting }
	} = useForm<Message>({ mode: 'onBlur' });

	async function onSubmit(data: Message) {
		const { privacyPolicy, ...dataNoCheckbox } = data;

		try {
			const response = await fetch('/api/send/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(dataNoCheckbox)
			});

			if (!response.ok) throw new Error();
		} catch {
			setError('root', { message: 'Wystąpił błąd, spróbuj ponownie' });
		}
	}

	return (
		<form
			noValidate
			className='flex flex-col gap-5 w-full bg-bg-sectionLabel p-5 rounded-2xl text-[17px] md:p-10 md:gap-7 lg:gap-10'
			onSubmit={handleSubmit(data => onSubmit(data))}>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70 md:text-lg' htmlFor='name'>
					Imię i nazwisko
				</label>
				<input
					className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 placeholder-black/50'
					id='name'
					type='text'
					placeholder='Jan Kowalski'
					{...register('name', {
						required: 'Podaj swoje imię i nazwisko',
						validate: name => name.includes(' ') || 'Podaj imię oraz nazwisko'
					})}></input>
				{errors.name && <span className='text-sm text-red-500'>{errors.name.message as string}</span>}
			</div>
			<div className='flex flex-col gap-5 md:flex-row md:gap-7 lg:gap-10'>
				<div className='flex flex-col gap-2 md:w-1/2'>
					<label className='font-semibold text-black/70 md:text-lg' htmlFor='email'>
						Adres e-mail
					</label>
					<input
						className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 placeholder-black/50'
						id='email'
						type='email'
						placeholder='jankowalski@domena.pl'
						{...register('email', {
							required: 'Podaj swój adres e-mail',
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
								message: 'Podaj poprawny adres e-mail'
							}
						})}></input>
					{errors.email && <span className='text-sm text-red-500'>{errors.email.message as string}</span>}
				</div>
				<div className='flex flex-col gap-2 md:w-1/2'>
					<label className='font-semibold text-black/70 md:text-lg' htmlFor='tel'>
						Numer telefonu
					</label>
					<input
						className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 placeholder-black/50'
						id='tel'
						type='tel'
						placeholder='+48555201201'
						{...register('tel', {
							required: 'Podaj numer telefonu',
							minLength: { value: 9, message: 'Podaj prawidłowy numer telefonu' }
						})}></input>
					{errors.tel && <span className='text-sm text-red-500'>{errors.tel.message as string}</span>}
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70 md:text-lg' htmlFor='message'>
					Wiadomość
				</label>
				<textarea
					className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 min-h-30 max-h-100 placeholder-black/50'
					id='message'
					placeholder='Tu wpisz treść swojej wiadomości'
					{...register('message', { required: 'Podaj treść wiadomości' })}></textarea>
				{errors.message && <span className='text-sm text-red-500'>{errors.message.message as string}</span>}
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70  md:text-lg' htmlFor='privacyPolicy'>
					<input
						className='mr-2'
						id='privacyPolicy'
						type='checkbox'
						{...register('privacyPolicy', {
							required: 'Akceptuj politykę prywatności'
						})}
					/>
					Akceptuję <a href='politykę prywatności'>polityką prywatności</a>
				</label>
				{errors.privacyPolicy && (
					<span className='text-sm text-red-500'>{errors.privacyPolicy.message as string}</span>
				)}
			</div>
			<button
				className='overflow-hidden relative w-fit py-3 px-4 text-white/90 font-semibold capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg  lg:text-base lg:px-6 lg:py-4 lg:font-medium transition duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue'
				type='submit'
				disabled={isSubmitSuccessful}>
				{isSubmitSuccessful ? 'Formularz został wysłany!' : isSubmitting ? <Spinner /> : 'Wyslij'}
			</button>
			{errors.root && <span className='text-sm text-red-500'>{errors.root.message as string}</span>}
		</form>
	);
}
