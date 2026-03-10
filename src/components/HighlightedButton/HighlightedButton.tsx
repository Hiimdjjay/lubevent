import Link from 'next/link';

type HighlightedButtonProps = {
	children: React.ReactNode;
};

export function HighlightedButton({ children }: HighlightedButtonProps) {
	return (
		<Link
			href='/formularz'
			className='max-w-60 py-3 px-4 text-white capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg md:text-xl lg:text-base lg:px-6 lg:py-4 lg:font-medium'>
			{children}
		</Link>
	);
}
