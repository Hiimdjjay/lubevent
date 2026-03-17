import { ArrowRight } from 'lucide-react';

type SecondaryButtonProps = {
	children: React.ReactNode;
};

export function SecondaryButton({ children }: SecondaryButtonProps) {
	return (
		<a
			href='/offer'
			className=' relative flex items-center gap-2 font-semibold py-3 px-4 w-fit'>
			{children} <ArrowRight size={20} />
			<span className='absolute bg-black  w-[70%] h-0.5 bottom-2.5 rounded-full cursor-pointer'></span>
		</a>
	);
}
