type ButtonsSelectedProps = {
	label: React.ReactNode;
	name: string;
	selectOptions: string[];
	onClick: (value: string) => void;
	value: string | undefined;
};

export function ButtonsSelect({ label, name, selectOptions, onClick, value }: ButtonsSelectedProps) {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={name} className='font-semibold text-black/70 mb-2 md:text-lg'>
				{label}
			</label>
			<div id={name} className='flex flex-wrap gap-3 font-medium text-black/70 md:text-lg mb-1'>
				{selectOptions.map(budget => (
					<button
						onClick={() => onClick(budget)}
						key={budget}
						type='button'
						className={`py-2 px-4 border rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${
							value === budget
								? 'bg-linear-to-r from-bg-btn-blue to-bg-btn-purple text-white border-transparent'
								: 'bg-white border-black/20 hover:border-black/40'
						}`}>
						{budget}
					</button>
				))}
			</div>
		</div>
	);
}
