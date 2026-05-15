import { FieldError, UseFormRegister } from 'react-hook-form';

type SelectType = {
	label: string;
	name: string;
	selectOptions: string[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	error?: FieldError;
};

export function Select({ label, name, selectOptions, register, error }: SelectType) {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={name} className='font-semibold text-black/70 mb-2 md:text-lg'>
				{label}
			</label>
			<select
				defaultValue=''
				{...register(name)}
				className={`bg-white font-medium px-5 py-2.5 mb-1 rounded-xl border border-black/15 focus:outline-bg-btn-purple`}>
				{selectOptions.map((option, index) => {
					return (
						<option key={option} disabled={index === 0} value={index === 0 ? '' : option}>
							{option}
						</option>
					);
				})}
			</select>
			{error && <span className='text-sm text-red-400 font-medium ml-1'>{error.message}</span>}
		</div>
	);
}
