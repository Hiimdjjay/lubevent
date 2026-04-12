import Link from 'next/link';
import { MoveLeft, MoveRight } from 'lucide-react';

type SecondaryButtonProps = {
	children: React.ReactNode;
	href: string;
	textWhite?: boolean;
	arrowRight?: boolean;
	arrowLeft?: boolean;
};

export function SecondaryButton({
	children,
	href,
	textWhite = false,
	arrowRight = false,
	arrowLeft = false
}: SecondaryButtonProps) {
	return (
		<Link
			href={href}
			className={`flex items-center gap-2 font-bold py-3 px-4 w-fit ${textWhite ? 'text-white' : 'text-black'} `}>
			{arrowLeft && <MoveLeft size={22} strokeWidth={1.5} />}
			<p className='flex flex-row items-center relative'>
				{children}
				<span
					className={`absolute ${textWhite ? 'bg-white' : 'bg-black'}  w-full h-0.5 left-0 -bottom-px rounded-full cursor-pointer`}></span>
			</p>
			{arrowRight && <MoveRight size={22} strokeWidth={1.5} />}
		</Link>
	);
}
