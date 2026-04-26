'use client';

import { testimonials } from '@/constans/testimonials';
import { TestimonialsButtons } from './TestimonialsButtons';
import { TestimonialsCard } from './TestimonialsCard';
import { useState, useEffect } from 'react';

export function TestimonialsCarousel() {
	const [value, setValue] = useState<number>(0);
	const [visiableCards, setVisiableCards] = useState(1);

	useEffect(() => {
		function update() {
			const screenSize = window.innerWidth;
			if (screenSize >= 1800) {
				setVisiableCards(4);
			} else if (screenSize >= 1280) {
				setVisiableCards(3);
			} else if (screenSize >= 768) {
				setVisiableCards(2);
			} else {
				setVisiableCards(1);
			}
		}
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, []);

	return (
		<div className=' '>
			<div className='flex overflow-hidden'>
				<div
					style={{ transform: `translateX(-${value * (100 / visiableCards)}%) ` }}
					className={`flex w-full transition-transform duration-300 `}>
					{testimonials.map(({ name, surname, content }, index) => {
						return (
							<div key={index} className='w-full px-4 shrink-0 md:w-1/2 md:px-2 xl:w-1/3 largeScreen'>
								<TestimonialsCard name={name} surname={surname} content={content} />
							</div>
						);
					})}
				</div>
			</div>
			<TestimonialsButtons
				value={value}
				setValue={setValue}
				totalLength={testimonials.length - visiableCards + 1}
			/>
		</div>
	);
}
