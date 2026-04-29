type WrapperProps = {
	children: React.ReactNode;
	noPaddingX?: boolean;
	noMargin?: boolean;
	marginForText?: boolean;
	className?: string;
};

export function Wrapper({
	children,
	noPaddingX = false,
	noMargin = false,
	marginForText = false,
	className
}: WrapperProps) {
	if (marginForText) {
		return <div className={` max-w-200 w-full m-auto px-4 md:px-5 lg:px-7.5 `}>{children}</div>;
	}
	return (
		<div
			className={`${noMargin ? '' : 'max-w-325 w-full m-auto'} ${noPaddingX ? '' : 'px-4 md:px-5 lg:px-7.5'}  ${className && ''}`}>
			{children}
		</div>
	);
}
