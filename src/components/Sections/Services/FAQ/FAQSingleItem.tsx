'use client';

import { Plus } from 'lucide-react';

type FAQSingleItemProps = { item: { question: string; response: string } };

export function FAQSingleItem({ item: { question, response } }: FAQSingleItemProps) {
	return (
		<div>
			<div className='flex justify-between items-center gap-5'>
				<div className=' w-full px-4 py-3 rounded-2xl bg-bg-sectionLabel'>
					<h3 className='font-semibold text-lg '>{question}</h3>
				</div>
				<button className='p-4 rounded-2xl bg-bg-sectionLabel'>
					<Plus size={24} strokeWidth={2.2} />
				</button>
			</div>
			<div>
				<p>{response}</p>
			</div>
		</div>
	);
}
