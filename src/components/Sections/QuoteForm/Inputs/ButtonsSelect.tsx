import { useState } from 'react';

type ButtonsSelectedProps = {
	children: React.ReactNode;
	budgetData: string[];
	id: string;
	onChange?: (value: string) => void;
};

export function ButtonsSelect({
	children,
	budgetData,
	id,
}: ButtonsSelectedProps) {
	const [selected, setSelected] = useState('');

	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<div className='flex flex-wrap gap-3 font-medium text-black/70 md:text-lg'>
				{budgetData.map(budget => (
					<button
						onClick={() => {
							setSelected(budget);
						}}
						id={budget}
						key={budget}
						type='button'
						className={`py-2 px-3 border bg-white rounded-full whitespace-nowrap transition-colors
    ${
			selected === budget
				? 'bg-linear-to-r from-bg-btn-blue to-bg-btn-purple text-white '
				: 'border-black/20 hover:border-black/40'
		}`}>
						{budget}
					</button>
				))}
			</div>
		</div>
	);
}
