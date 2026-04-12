type SectionTitleProps = {
	children: React.ReactNode;
	smallFont?: boolean;
	textColor?: boolean;
	textCenter?: boolean;
};

export function SectionTitle({
	children,
	smallFont = false,
	textColor = false,
	textCenter = false
}: SectionTitleProps) {
	return (
		<h2
			className={`font-semibold ${textCenter ? 'text-center' : ''} ${textColor ? 'text-white' : 'text-black'} ${smallFont ? 'text-[20px] md:text-[30px]' : 'text-[32px] md:text-[36px]'}  lg:text-[40px]`}>
			{children}
		</h2>
	);
}
