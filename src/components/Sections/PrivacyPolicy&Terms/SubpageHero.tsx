type Props = {
	title: string;
	lastUpdated: string;
};

export function SubpageHero({ title, lastUpdated }: Props) {
	return (
		<div className='flex flex-col self-center gap-3'>
			<h1 className='text-4xl font-bold text-center capitalize'>{title}</h1>
			<p className='text-black/50 font-medium text-center'>Ostatnia aktualizacja: {lastUpdated}</p>
		</div>
	);
}
