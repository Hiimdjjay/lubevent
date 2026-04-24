import Link from 'next/link';

type PrimaryButtonProps = {
	children: React.ReactNode;
	link: string;
	onClick?: () => void;
};

export function PrimaryButton({ children, link, onClick }: PrimaryButtonProps) {
	return (
		<>
			<Link
				href={link}
				onClick={onClick}
				className='group relative py-3 px-4 w-fit font-semibold capitalize rounded-lg  text-white/90 bg-linear-to-r from-bg-btn-blue to-bg-btn-purple lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue'>
				<div className='relative overflow-hidden h-full '>
					<span className='block transition-transform duration-250 group-hover:-translate-y-full '>
						{children}
					</span>
					<span className='absolute inset-0 flex items-center justify-center transition-transform duration-250 translate-y-full group-hover:translate-y-0'>
						{children}
					</span>
				</div>
			</Link>
		</>
	);
}
