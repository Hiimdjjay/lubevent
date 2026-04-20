type ButtonsSelectedProps = {
	children: React.ReactNode;
	budgetData: string[];
	id: string;
	onChange?: (value: string) => void;
	value?: string;
	isError: any;
};

export function ButtonsSelect({ children, budgetData, id, onChange, value, isError }: ButtonsSelectedProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<div className='flex flex-wrap gap-3 font-medium text-black/70 md:text-lg'>
				{budgetData.map(budget => (
					<button
						onClick={() => onChange?.(budget)}
						id={budget}
						key={budget}
						type='button'
						className={`py-2 px-4 border rounded-full whitespace-nowrap transition-colors ${
							value === budget
								? 'bg-linear-to-r from-bg-btn-blue to-bg-btn-purple text-white border-transparent'
								: 'bg-white border-black/20 hover:border-black/40'
						}`}>
						{budget}
					</button>
				))}
			</div>
			{isError && <span className='text-sm text-red-500 '>{isError.message}</span>}
		</div>
	);
}
