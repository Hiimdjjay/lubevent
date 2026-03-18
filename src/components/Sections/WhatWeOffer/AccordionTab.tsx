import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
type AccordionTabProps = {
	children: string;
};

export function AccordionTab({ children }: AccordionTabProps) {
	return (
		<Link href='/oferta' className='group'>
			<div className='flex items-center justify-between py-5 border-b border-white/5 text-white/90 cursor-pointer transition-colors duration-200 hover:text-white hover:border-white/15'>
				<div className=' flex justify-between items-center text-xl font-medium  md:text-2xl'>
					<h4 className="">{children}</h4>
				</div>
				<div className='p-1 rounded-full bg-linear-to-r from-bg-btn-blue to-bg-btn-purple transition-colors duration-300 group-hover:rom-bg-btn-purple group-hover:to-bg-btn-blue '>
					<ArrowRight />
				</div>
			</div>
		</Link>
	);
}
