import Link from 'next/link';

type PrimaryButtonProps = {
	children: React.ReactNode;
	path: string;
	onClick?: () => void;
};

export function PrimaryButton({ children, path, onClick }: PrimaryButtonProps) {
	return (
		<Link
			href={path}
			onClick={onClick}
			className='group relative inline-flex items-center w-fit py-3 px-4 font-semibold capitalize rounded-lg text-white/90 bg-linear-to-r from-bg-btn-blue to-bg-btn-purple lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue'>
			<div className='relative overflow-hidden m-auto'>
				<span className='block transition-transform duration-300 group-hover:-translate-y-full '>
					{children}
				</span>
				<span className='absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0'>
					{children}
				</span>
			</div>
		</Link>
	);
}
