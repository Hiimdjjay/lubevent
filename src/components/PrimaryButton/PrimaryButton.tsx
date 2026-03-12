import Link from 'next/link';

type PrimaryButtonProps = {
	children: React.ReactNode;
};

export function PrimaryButton({ children }: PrimaryButtonProps) {
	return (
		<Link
			href='/formularz'
			className='w-fit py-3 px-4 text-white font-semibold capitalize bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-lg md:text-xl lg:text-base lg:px-6 lg:py-4 lg:font-medium'>
			{children}
		</Link>
	);
}
