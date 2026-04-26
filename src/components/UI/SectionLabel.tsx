type SectionLabelProps = {
	children: React.ReactNode;
	bgColor: string;
};

export function SectionLabel({ children, bgColor }: SectionLabelProps) {
	return (
		<div className={`w-fit py-2 px-4 rounded-full ${bgColor}`}>
			<span className={`flex justify-center items-center gap-2 text-sm 'text-black/80' font-semibold`}>
				{children}
			</span>
		</div>
	);
}
