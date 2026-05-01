type BurgerButtonProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BurgerButton({ open, setOpen }: BurgerButtonProps) {
	return (
		<button
			type='button'
			className={`relative inline-flex justify-center items-center h-9 w-9 bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg md:h-11 md:w-11`}
			onClick={() => setOpen(prev => !prev)}
			aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
			aria-expanded={open}>
			<span
				className={`absolute bg-white/90 w-5 md:w-6 h-0.75 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 -rotate-45' : '-translate-y-1.25 md:-translate-y-1.5 rotate-0'}`}></span>
			<span
				className={`absolute bg-white/90 w-5 md:w-6 h-0.75 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 rotate-45' : 'translate-y-1.25 md:translate-y-1.5 rotate-0'}`}></span>
		</button>
	);
}
