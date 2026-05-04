import { FieldValues, UseFormRegister } from 'react-hook-form';

type TextareaProps = {
	children: React.ReactNode;
	id: string;
	autoComplete?: string;
	register: UseFormRegister<FieldValues>;
};

export function Textarea({ children, id, autoComplete = 'false', register }: TextareaProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<textarea
				id={id}
				placeholder='Opisz dokładniej swoje oczekiwania, specjalne życzenia lub pytania dotyczące organizacji wydarzenia'
				autoComplete={autoComplete}
				className='px-5 py-2.5 w-full min-h-50 bg-white text-black/60 font-medium  rounded-xl border border-black/15 placeholder-black/50'
				{...register(id)}></textarea>
		</div>
	);
}
