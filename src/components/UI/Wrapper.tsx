type WrapperProps = {
	children: React.ReactNode;
	noPaddingX?: boolean;
	noMargin?: boolean;
	className?: string;
};

export function Wrapper({
	children,
	noPaddingX = false,
	noMargin = false,
	className
}: WrapperProps) {
	return (
		<div
			className={`${noMargin ? '' : 'max-w-325 w-full m-auto'} ${noPaddingX ? '' : 'px-4 md:px-5 lg:px-7.5'}  ${className && ''}`}>
			{children}
		</div>
	);
}
