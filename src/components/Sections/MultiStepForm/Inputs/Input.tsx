import { FieldValues, RegisterOptions, UseFormRegister, UseFormSetError } from 'react-hook-form';

type InputProps = {
	children: React.ReactNode;
	id: string;
	type: string;
	placeholder?: string;
	autoComplete?: string;
	registerOptions?: RegisterOptions;
	register: UseFormRegister<FieldValues>;
	isError?: UseFormSetError<FieldValues>;
};

export function Input({
	children,
	id,
	type,
	placeholder,
	autoComplete = 'on',
	registerOptions,
	register,
	isError
}: InputProps) {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg mb-2'>
				{children}
			</label>
			<input
				id={id}
				type={type}
				autoComplete={autoComplete}
				placeholder={placeholder}
				className='box-border font-medium px-4 py-2.5  mb-1 w-full max-w-full rounded-xl border bg-white text-black/60  border-black/15 placeholder-black/50 focus:outline-bg-btn-purple'
				{...register(id, registerOptions)}
			/>
			{isError && <span className='text-sm text-red-500 font-medium ml-1'>{isError.message}</span>}
		</div>
	);
}
