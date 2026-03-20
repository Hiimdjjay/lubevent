type SectionLabelProps = {
	children: string;
	bgColor: string;
};

export function SectionLabel({ children, bgColor }: SectionLabelProps) {
	return (
		<div className={`${bgColor} py-2 px-4 rounded-full w-fit`}>
			<p className={`text-sm 'text-black/80' font-semibold`}>{children}</p>
		</div>
	);
}
