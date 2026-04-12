import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function ExitButton() {
	return (
		<Link
			href='/'
			className={`flex items-center gap-1 font-semibold py-3 px-4 w-fit text-black `}>
			<ArrowLeft size={18} />
			<p className='relative'>
				Wyjście
				<span
					className={`absolute bg-black w-full h-0.5 left-0 -bottom-px rounded-full cursor-pointer`}></span>
			</p>
		</Link>
	);
}
