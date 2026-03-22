import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type SecondaryButtonProps = {
	children: React.ReactNode;
	href: string;
	textWhite?: boolean;
};

export function SecondaryButton({
	children,
	href,
	textWhite = false
}: SecondaryButtonProps) {
	return (
		<a
			href={href}
			className={`flex items-center gap-1 font-semibold py-3 px-4 w-fit ${textWhite ? 'text-white' : 'text-black'} `}>
			<p className='relative'>
				{children}
				<span
					className={`absolute ${textWhite ? 'bg-white' : 'bg-black'}  w-full h-0.5 left-0 -bottom-px rounded-full cursor-pointer`}></span>
			</p>
			<ArrowRight size={20} />
		</a>
	);
}
