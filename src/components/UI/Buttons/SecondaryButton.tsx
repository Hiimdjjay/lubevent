import Link from 'next/link';
import { ArrowRight } from '@/components/UI/Icons/ArrowRight';
import { ArrowLeft } from '@/components/UI/Icons/ArrowLeft';

type SecondaryButtonProps = {
	children: React.ReactNode;
	path: string;
	textWhite?: boolean;
	arrowRight?: boolean;
	arrowLeft?: boolean;
};

export function SecondaryButton({
	children,
	path,
	textWhite = false,
	arrowRight = false,
	arrowLeft = false
}: SecondaryButtonProps) {
	return (
		<Link
			href={path}
			className={`group relative flex items-center gap-1 font-bold py-3 px-4 w-fit ${textWhite ? 'text-white' : 'text-black'} `}>
			{arrowLeft && (
				<span className='flex justify-center items-center'>
					<ArrowLeft color={`${textWhite ? '#fff' : '#000'} `} />
				</span>
			)}

			<div className='flex flex-row items-center gap-3 relative'>
				<div className='relative overflow-hidden h-full'>
					<div className='text-[16px] transition-transform duration-300 group-hover:-translate-y-full'>
						{children}
					</div>
					<div className='absolute text-[16px] transition-trasnform duration-300 group-hover:-translate-y-full'>
						{children}
					</div>
				</div>
				<span
					className={`absolute ${textWhite ? 'bg-white' : 'bg-black'}  w-full h-0.5 left-0 -bottom-px rounded-full cursor-pointer`}></span>
			</div>
			{arrowRight && (
				<span className='flex justify-center items-center'>
					<ArrowRight color={`${textWhite ? '#fff' : '#000'} `} />
				</span>
			)}
		</Link>
	);
}
