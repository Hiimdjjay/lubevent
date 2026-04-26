import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type ListElementProps = {
	children: string;
	path: string;
};

export function OfferListElement({ children, path }: ListElementProps) {
	return (
		<Link href={path} className='group'>
			<div className='flex items-center justify-between py-5 border-b border-white/20 text-white/90 cursor-pointer transition-colors duration-200 hover:text-white hover:border-white/30'>
				<div className=' flex justify-between items-center '>
					<span className='text-xl font-medium  md:text-2xl'>{children}</span>
				</div>
				<div className='p-1 rounded-full bg-linear-to-r from-bg-btn-blue to-bg-btn-purple  '>
					<div className='relative overflow-hidden'>
						<span className='block transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full'>
							<ArrowUpRight />
						</span>
						<span className='absolute transition-transform duration-300 -translate-x-full group-hover:translate-x-0 group-hover:-translate-y-full'>
							<ArrowUpRight />
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
