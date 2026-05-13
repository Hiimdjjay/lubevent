import { FieldError, UseFormRegister } from 'react-hook-form';

type TextareaProps = {
	label: string;
	name: string;
	placeholder: string;
	autoComplete?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	error?: FieldError;
};

export function Textarea({ label, name, placeholder, register, error }: TextareaProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={name} className='font-semibold text-black/70 md:text-lg'>
				{label}
			</label>
			<textarea
				id={name}
				placeholder={placeholder}
				autoComplete='off'
				maxLength={3000}
				className={`px-5 py-2.5 w-full min-h-50 max-h-200 bg-white text-black/60 font-medium  rounded-xl border border-black/15 placeholder-black/50 ${error ? 'border-red-400' : ''} `}
				{...register(name)}></textarea>
			{error && (
				<span className={`text-sm text-red-500 font-medium ml-1 ${error ? 'border-red-400' : ''} `}>
					{error.message}
				</span>
			)}
		</div>
	);
}
