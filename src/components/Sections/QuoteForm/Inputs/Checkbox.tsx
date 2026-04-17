import { CircleQuestionMark } from 'lucide-react';

type checkboxProps = {
	children: React.ReactNode;
	id: string;
	questionMark?: boolean;
};

export function Checkbox({ children, id, questionMark = true }: checkboxProps) {
	if (questionMark) {
		<div className='flex justify-between items-center bg-white rounded-xl'>
			<label
				htmlFor={id}
				className='flex items-center justify-start gap-3 w-full py-2 px-5 font-semibold text-black/70 capitalize md:text-lg'>
				<input id={id} type='checkbox' />
				{children}
			</label>
			{questionMark && (
				<div className='py-2 px-5'>
					<CircleQuestionMark size={18} className='text-black/70' />
				</div>
			)}
		</div>;
	}

	return (
		<div className='flex justify-between px-4 py-2 gap-3 items-center bg-white rounded-xl'>
			<input id={id} type='checkbox' />
			<label htmlFor={id} className='gap-3 w-full font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
		</div>
	);
}
