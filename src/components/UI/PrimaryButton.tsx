import Link from 'next/link';

type PrimaryButtonProps = {
	children: React.ReactNode;
	link: string;
	onClick?: () => void;
};

export function PrimaryButton({ children, link, onClick }: PrimaryButtonProps) {
	return (
		<Link
			href={link}
			onClick={onClick}
			className='overflow-hidden relative w-fit py-3 px-4 text-white/90 font-semibold capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg  lg:text-base lg:px-6 lg:py-4 lg:font-medium transition-colors duration-800 hover:text-white hover:from-bg-btn-purple hover:to-bg-btn-blue'>
			{children}
		</Link>
	);
}
