type BurgerButtonProps = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function BurgerButton({ open, setOpen }: BurgerButtonProps) {
	return (
		<button
			className={`relative lg:hidden inline-flex justify-center items-center h-9 md:h-11 w-9 md:w-11 bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg`}
			onClick={() => setOpen(prev => !prev)}>
			<span
				className={`absolute bg-white/90 w-5.5 md:w-6 h-0.5 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 -rotate-45' : '-translate-y-1.25 md:-translate-y-1.5 rotate-0'}`}></span>
			<span
				className={`absolute bg-white/90 w-5.5 md:w-6 h-0.5 rounded transition-all duration-200 ease-out ${open ? 'translate-y-0 rotate-45' : 'translate-y-1.25 md:translate-y-1.5 rotate-0'}`}></span>
		</button>
	);
}
