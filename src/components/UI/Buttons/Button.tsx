type PrimaryButtonProps = {
	children: React.ReactNode;
	variant: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
	isSubmitting?: boolean;
};

export function Button({ children, variant, type = 'button', onClick, isSubmitting }: PrimaryButtonProps) {
	return (
		<button
			onClick={onClick}
			type={type}
			disabled={isSubmitting}
			className={`group flex justify-center items-center gap-2 font-bold ${variant === 'primary' ? 'overflow-hidden relative w-fit py-3 px-4 text-white/90  capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg  lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue' : 'relative py-3 w-fit text-black'}`}>
			<div className='relative flex flex-col overflow-hidden'>
				<span className='duration-300 group-hover:-translate-y-full'>{children}</span>
				<span className='absolute translate-y-full duration-300 group-hover:translate-y-0 '>{children}</span>
			</div>
			{variant === 'secondary' && (
				<span className={`absolute bg-black w-full h-0.5 left-0 bottom-3 rounded-full cursor-pointer`}></span>
			)}
		</button>
	);
}
