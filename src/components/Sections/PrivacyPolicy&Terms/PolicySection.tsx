type Props = {
	title: string;
	children: React.ReactNode;
};

export function PolicySection({ title, children }: Props) {
	return (
		<section className='flex flex-col gap-4'>
			<h2 className='text-2xl font-semibold'>{title}</h2>
			<p className='text-black/60 leading-relaxed font-medium'>{children}</p>
		</section>
	);
}
