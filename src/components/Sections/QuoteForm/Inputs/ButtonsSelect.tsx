import { useState } from 'react';

type ButtonsSelectedProps = {
	children: React.ReactNode;
	id: string;
	data: string[];
};

export function ButtonsSelect({ children, id, data }: ButtonsSelectedProps) {
	const [budget, setBudget] = useState(false);

	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<div className='flex flex-wrap gap-3 font-medium text-black/70 md:text-lg'>
				{data.map(button => (
					<button
						onClick={() => setBudget(true)}
						key={button}
						type='button'
						className={`py-2 px-3 border rounded-full whitespace-nowrap`}>
						{button}
					</button>
				))}
			</div>
		</div>
	);
}
