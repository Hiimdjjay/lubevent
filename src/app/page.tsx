import { HighlightedButton } from '@/components/HighlightedButton/HighlightedButton';

export default function Home() {
	return (
		<main>
			<section className='min-h-screen p-4 py-30'>
				<div className='grid'>
					<div>
						<div className='flex items-center gap-2 py-2 px-5 rounded-lg bg-white'>
							<div className='w-1 h-1 bg-black rounded-full'></div>
							<p className='font-medium'>Dostępne terminy w tym roku!</p>
						</div>
						<h1>
							Twoje wydarzenie.
							<br />
							Nasza realizacja
						</h1>
						<h2>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, harum.
						</h2>
						<HighlightedButton>Zacznij Współpracę</HighlightedButton>
					</div>
					<div>Tu będą zdjęcia </div>
				</div>
			</section>
		</main>
	);
}
