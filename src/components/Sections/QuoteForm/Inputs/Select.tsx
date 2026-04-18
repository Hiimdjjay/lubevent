import { FieldValues, UseFormRegister } from 'react-hook-form';

type Event = {
	id: number;
	name: string;
};

type InputProps = {
	children: React.ReactNode;
	id: string;
	selectData: Event[];
	placeholder?: string;
	setter: React.Dispatch<React.SetStateAction<any>>;
	register: UseFormRegister<FieldValues>;
};

export function Select({ children, id, selectData, setter, register }: InputProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<select
				id={id}
				defaultValue=''
				required
				{...register(id, { onChange: e => setter(e.target.value) })}
				className='bg-white font-medium px-5 py-2.5 rounded-xl border border-black/15'>
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
		</div>
	);
}
