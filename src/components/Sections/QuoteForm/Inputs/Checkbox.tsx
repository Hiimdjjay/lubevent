import { CircleQuestionMark } from 'lucide-react';

type checkboxProps = {
	children: React.ReactNode;
	id: string;
};

export function Checkbox({ children, id }: checkboxProps) {
	return (
		<div className='flex justify-between items-center bg-white rounded-lg p-2'>
			<div className='flex gap-2'>
				<input id={id} type='checkbox' />

				<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
					{children}
				</label>
			</div>
			<CircleQuestionMark size={18} className='text-black/70' />
		</div>
	);
}
