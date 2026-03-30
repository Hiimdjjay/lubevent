import { PrimaryButton } from '@/components/UI/PrimaryButton';

export function FormComponent() {
	return (
		<form className='flex flex-col gap-5 w-full bg-bg-sectionLabel p-5 rounded-2xl'>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70 md:text-lg'>Imię i nazwisko:</label>
				<input
					className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15'
					type='text'
					placeholder='Jan Kowalski'></input>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70 md:text-lg'>Adres e-mail:</label>
				<input
					className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15'
					type='email'
					placeholder='jankowalski@domena.pl'></input>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70 md:text-lg'>Numer telefonu:</label>
				<input
					className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15'
					type='text'
					placeholder='+48 555 201 201'></input>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-semibold text-black/70 md:text-lg'>Wiadomość:</label>
				<textarea
					className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 max-h-100'
					placeholder='Tu wpisz treść swojej wiadomości'></textarea>
			</div>
			<button
				className='overflow-hidden relative w-fit py-3 px-4 text-white/90 font-semibold capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg  lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue'
				type='submit'>
				Wyslij
			</button>
		</form>
	);
}
