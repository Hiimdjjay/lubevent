import { CircleQuestionMark } from 'lucide-react';
import { FieldError, UseFormRegister } from 'react-hook-form';

type checkboxProps = {
	label: string ;
	name: string ;
	questionMark?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	error?: FieldError;
};

export function Checkbox({ label, name, questionMark = true, register, error }: checkboxProps) {
	if (questionMark) {
		return (
			<div className='flex justify-between items-center bg-bg-sectionLabel rounded-xl'>
				<label
					htmlFor={name}
					className='flex items-center justify-start gap-3 w-full py-2 px-5 font-semibold text-black/70 capitalize md:text-lg'>
					<input id={name} type='checkbox' {...register(name)} />
					{label}
				</label>
				{questionMark && (
					<div className='py-2 px-5'>
						<CircleQuestionMark size={18} className='text-black/70' />
					</div>
				)}
			</div>
		);
	}

	return (
		<div className='flex flex-col gap-2 mt-2'>
			<label htmlFor={name} className='w-full font-semibold px-2 text-black/70 text-justify md:text-lg'>
				<input id={name} type='checkbox' className='mr-3' {...register(name)} />
				{label}
			</label>
			{error && <span className='text-sm text-red-400 font-medium ml-1'>{error.message}</span>}
		</div>
	);
}
