type SectionLabelProps = {
	children: string;
};

export function SectionLabel({ children }: SectionLabelProps) {
	return (
		<div className='bg-bg-sectionLabel py-2 px-4 rounded-full w-fit'>
			<p className='text-sm text-black/80 font-semibold'>{children}</p>
		</div>
	);
}
