type MainTitleProps = {
	children: React.ReactNode;
};

export function MainTitle({ children }: MainTitleProps) {
	return <h1 className='text-[40px]/[1.3] font-bold md:text-[48px] lg:text-[52px]'>{children}</h1>;
}
