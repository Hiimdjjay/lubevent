'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

type FAQSingleItemProps = { item: { question: string; response: string } };

export function FAQSingleItem({ item: { question, response } }: FAQSingleItemProps) {
	const [active, setActive] = useState(false);
	return (
		<div className=''>
			<button className='w-full ' onClick={() => setActive(prev => !prev)}>
				<div className='flex justify-between items-center gap-3 '>
					<div className='w-full  px-4 py-3 rounded-2xl bg-bg-sectionLabel md:px-8 md:pt-4'>
						<h3 className='text-start font-semibold text-lg lg:text-xl '>{question}</h3>
					</div>
					<div
						className={` p-4 rounded-full bg-bg-sectionLabel transition-transform duration-200 ${active && 'rotate-180'}`}>
						<ChevronDown size={24} strokeWidth={2.2} />
					</div>
				</div>
			</button>
			{active && (
				<div className='text-start px-3 pt-3 w-[90%] '>
					<p className='font-medium text-black/70 lg:text-lg'>{response}</p>
				</div>
			)}
		</div>
	);
}
