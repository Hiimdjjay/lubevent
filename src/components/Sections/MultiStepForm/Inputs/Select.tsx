import { FieldError, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

type Event = {
	id: number;
	name: string;
};

type InputProps = {
	children: React.ReactNode;
	id: string;
	selectData: Event[];
	placeholder?: string;
	setter: (value: string) => void;
	register: UseFormRegister<FieldValues>;
	registerOptions?: RegisterOptions;
	isError?: FieldError;
};

export function Select({ children, id, selectData, setter, register, registerOptions, isError }: InputProps) {
	const { onChange, ...rest } = register(id, registerOptions);

	return (
		<div className='flex flex-col  w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 mb-2 md:text-lg'>
				{children}
			</label>
			<select
				id={id}
				defaultValue=''
				required
				{...rest}
				onChange={e => {
					onChange(e);
					setter(e.target.value);
				}}
				className='bg-white font-medium px-5 py-2.5 mb-1 rounded-xl border border-black/15 focus:outline-bg-btn-purple'>
				{selectData.map(({ id, name }) => {
					if (id === 0) {
						return (
							<option key={id} value='' disabled>
								{name}
							</option>
						);
					}
					return (
						<option key={id} value={name}>
							{name}
						</option>
					);
				})}
			</select>
			{isError && <span className='text-sm text-red-500 font-medium ml-1'>{isError.message}</span>}
		</div>
	);
}
