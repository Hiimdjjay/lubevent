type InputProps = {
	children: React.ReactNode;
	type: string;
	placeholder?: string;
	id: string;
};

export function Input({ children, type, placeholder, id }: InputProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<input
				id={id}
				type={type}
				placeholder={placeholder}
				className='bg-white text-black/60 font-medium px-5 py-2.5 rounded-xl border border-black/15 placeholder-black/50'
			/>
		</div>
	);
}
