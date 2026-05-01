'use client';
import { useEffect, useRef, useState } from 'react';

type CounterProps = {
	target: number;
	title: string;
};

export function ExperienceCardCounter({ target, title }: CounterProps) {
	const [value, setValue] = useState(0);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);

	// 👇 obserwacja viewport
	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			const entry = entries[0];

			if (entry.isIntersecting) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		});

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!visible) {
			// eslint-disable-next-line
			setValue(0);
			return;
		}

		const duration = 2000;
		const increment = target / (duration / 16);

		let current = 0;

		const timer = setInterval(() => {
			current += increment;

			if (current >= target) {
				setValue(target);
				clearInterval(timer);
			} else {
				setValue(Math.floor(current));
			}
		}, 16);

		return () => clearInterval(timer);
	}, [visible, target]);

	return (
		<div ref={ref}>
			<span className='text-[34px] font-semibold'>
				{value}+ {title === 'Doświadczenie zawodowe' ? <span>lat</span> : ''}
			</span>
		</div>
	);
}
