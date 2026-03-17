import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
type AccordionTabProps = {
	children: string;
};

export function AccordionTab({ children }: AccordionTabProps) {
	return (
		<Link href='/'>
			<div className='flex items-center justify-between py-5 border-b border-white/5 text-white/80 cursor-pointer transition-colors duration-200 hover:text-white hover:border-white/15 '>
				<div className=' flex justify-between items-center text-xl font-medium '>
					<h4>{children}</h4>
				</div>
				<div className=' p-1 rounded-full bg-linear-to-r from-bg-btn-blue to-bg-btn-purple'>
					<ArrowRight />
				</div>
			</div>
		</Link>
	);
}
