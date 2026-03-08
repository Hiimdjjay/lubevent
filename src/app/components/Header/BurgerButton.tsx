type BurgerButtonProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BurgerButton({ open, setOpen }: BurgerButtonProps) {
	return (
		<button
			className={`relative inline-flex justify-center items-center h-10 w-10 bg-bg-button/10 rounded-full`}
			onClick={() => setOpen(prev => !prev)}>
			<span
				className={`absolute bg-white w-5 h-0.5 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 -rotate-45' : '-translate-y-1.25 rotate-0'}`}></span>
			<span
				className={`absolute bg-white w-5 h-0.5 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 rotate-45' : 'translate-y-1.25 rotate-0'}`}></span>
		</button>
	);
}
