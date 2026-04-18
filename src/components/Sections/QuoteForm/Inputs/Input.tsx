import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

type InputProps = {
	children: React.ReactNode;
	id: string;
	type: string;
	placeholder?: string;
	autoComplete?: string;
	registerOptions?: RegisterOptions;
	register: UseFormRegister<FieldValues>;
};

export function Input({ children, id, type, placeholder, autoComplete = 'on', register }: InputProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<input
				id={id}
				type={type}
				autoComplete={autoComplete}
				placeholder={placeholder}
				className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 placeholder-black/50'
				{...register(id)}
			/>
		</div>
	);
}
