type BurgerButtonProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BurgerButton({ open, setOpen }: BurgerButtonProps) {
	return (
		<button
			className={`relative inline-flex justify-center items-center h-8.5 w-8.5 bg-blue-400 rounded-lg`}
			onClick={() => setOpen(prev => !prev)}>
			<span
				className={`absolute bg-black w-5 h-0.5 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 -rotate-45' : '-translate-y-1.25 rotate-0'}`}></span>
			<span
				className={`absolute bg-black w-5 h-0.5 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 rotate-45' : 'translate-y-1.25 rotate-0'}`}></span>
		</button>
	);
}
