type SectionTitleProps = {
	children: string;
	smallFont?: boolean;
};

export function SectionTitle({ children, smallFont = false }: SectionTitleProps) {
	return (
		<h2 className={`font-medium ${smallFont ? 'text-[20px]' : 'text-[34px]'}` }>
			{children}
		</h2>
	);
}
