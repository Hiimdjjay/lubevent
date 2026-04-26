export default async function Service({ params }: { params: Promise<{ singleService: string }> }) {
	const { singleService } = await params;

	const PARAM_TO_WORD = {
		osiemnastki: 'Osiemntaska',
		wesela: 'Wesela'
	};
	return (
		<main>
			<section className='py-50'>
				<h2>{PARAM_TO_WORD[singleService as keyof typeof PARAM_TO_WORD]}</h2>
			</section>
		</main>
	);
}
