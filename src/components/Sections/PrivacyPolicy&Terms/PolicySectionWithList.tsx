type Props = {
	title: string;
	children?: React.ReactNode;
	items: { id: number; text: string }[];
	footer?: React.ReactNode;
};

export function PolicySectionWithList({ title, children, items, footer }: Props) {
	return (
		<section className='flex flex-col gap-4'>
			<h2 className='text-2xl font-semibold'>{title}</h2>
			{children && <p className='text-black/60 leading-relaxed font-medium'>{children}</p>}
			<ul className='flex flex-col gap-2 list-disc list-inside text-black/70 font-medium'>
				{items.map(({ id, text }) => (
					<li key={id}>{text}</li>
				))}
			</ul>
			{footer && <p className='text-black/60 leading-relaxed font-medium'>{footer}</p>}
		</section>
	);
}
