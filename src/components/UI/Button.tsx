type PrimaryButtonProps = {
	children: React.ReactNode;
	variant: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
};

export function Button({ children, variant, type = 'button', onClick }: PrimaryButtonProps) {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`flex justify-center items-center gap-2 ${variant === 'primary' ? 'overflow-hidden relative w-fit py-3 px-4 text-white/90 font-semibold capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg  lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue' : 'relative font-bold py-3 w-fit text-black'}`}>
			{children}
			{variant === 'secondary' && (
				<span className={`absolute bg-black w-full h-0.5 left-0 bottom-3 rounded-full cursor-pointer`}></span>
			)}
		</button>
	);
}
