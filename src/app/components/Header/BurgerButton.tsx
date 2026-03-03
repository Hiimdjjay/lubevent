'use client';
import { useState } from 'react';

export function BurgerButton() {
	const [open, setOpen] = useState(false);

	return (
		<button
			className='relative inline-flex justify-center items-center h-10 w-10 bg-white/10 rounded-full'
			onClick={() => setOpen(prev => !prev)}>
			<span
				className={`absolute -translate-y-1.25 bg-white w-5 h-0.5 rounded transition-transform ${open ? "rotate-45" : ''}`}></span>
			<span
            {open && <p>burger</p>}
		</button>
	);
}
