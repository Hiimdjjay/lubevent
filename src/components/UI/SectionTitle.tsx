type SectionTitleProps = {
	children: React.ReactNode;
	smallFont?: boolean;
	textColor?: boolean;
};

export function SectionTitle({
	children,
	smallFont = false,
	textColor = false
}: SectionTitleProps) {
	return (
		<h2
			className={`font-medium ${textColor ? 'text-white' : 'text-black'} ${smallFont ? 'text-[20px]' : 'text-[34px]'} md:text-[36px] lg:text-[42px]`}>
			{children}
		</h2>
	);
}
