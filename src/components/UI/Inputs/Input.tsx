import { FieldError, UseFormRegister } from 'react-hook-form';

type InputProps = {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	autoComplete?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	error?: FieldError;
};

export function Input({ label, name, type = 'text', placeholder, autoComplete = 'on', register, error }: InputProps) {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={name} className={` font-semibold text-black/70 md:text-lg mb-2`}>
				{label}
			</label>
			<input
				className={`box-border font-medium px-4 py-2.5 mb-1 w-full max-w-full rounded-xl border bg-white text-black/60  border-black/15 placeholder-black/50 focus:outline-none ${error ? 'border-red-400' : ''}`}
				id={name}
				type={type}
				autoComplete={autoComplete}
				placeholder={placeholder}
				{...register(name)}
			/>
			{error && <span className='text-sm text-red-400 font-medium ml-1'>{error.message}</span>}
		</div>
	);
}
