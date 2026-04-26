type MainTitleProps = {
	children: React.ReactNode;
	textCenter?: boolean;
};

export function MainTitle({ children, textCenter = false }: MainTitleProps) {
	return (
		<h1
			className={`${textCenter && 'text-center'} text-[40px]/[1.3] font-bold md:text-[48px] lg:text-[52px] `}>
			{children}
		</h1>
	);
}
