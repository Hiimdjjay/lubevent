'use client';
import { useState } from 'react';

export function BurgerButton() {
	const [open, setOpen] = useState(false);

	return (
		<button
			className={`relative inline-flex justify-center items-center h-10 w-10 bg-white/10 rounded-full cursor-pointer`}
			onClick={() => setOpen(prev => !prev)}>
			<span
				className={`absolute -translate-y-1 bg-white w-5 h-0.5 rounded transition-all duration-200 ${open ? 'rotate-45' : ''}`}></span>
			<span
				className={`absolute translate-y-1 bg-white w-5 h-0.5 rounded transition-all duration-200 ${open ? 'rotate-45' : ''}`}></span>
		</button>
	);
}
