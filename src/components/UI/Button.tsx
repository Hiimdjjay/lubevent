type PrimaryButtonProps = {
	children: React.ReactNode;
	variant: string;
	onClick?: () => void;
};

export function Button({ children, variant, onClick }: PrimaryButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`flex justify-center items-center gap-2 ${variant === 'primary' ? 'overflow-hidden relative w-fit py-3 px-4 text-white/90 font-semibold capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg  lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue' : 'font-semibold py-3 px-4 w-fit text-black'}`}>
			{children}
		</button>
	);
}
