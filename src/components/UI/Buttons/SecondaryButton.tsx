import Link from 'next/link';
import { ArrowRight } from '@/components/UI/ArrowRight';
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
			className={`relative flex items-center font-bold py-3 px-4 w-fit ${textWhite ? 'text-white' : 'text-black'} `}>
			<div className='overflow-hidden flex gap-2 '>
				{arrowLeft && <MoveLeft size={22} strokeWidth={1.5} />}
				<p className='flex flex-row items-center relative'>
					{children}
					<span
						className={`absolute ${textWhite ? 'bg-white' : 'bg-black'}  w-full h-0.5 left-0 -bottom-px rounded-full cursor-pointer`}></span>
				</p>
				<span>{arrowRight && <ArrowRight />}</span>
			</div>
		</Link>
	);
}
