import { ImageCard } from './ImageCard';

export function Images() {
	return (
		<section>
			<div className='max-w-325 w-full m-auto px-4 pb-20 md:px-5 md:pb-25 lg:x-7.5 lg:pb-30'>
				<div className='flex flex-col gap-5 md:flex-row'>
					<ImageCard
						src='/Team.png'
						alt='Grupa ludzi obmawiających plan imprezy.'
						quote='„Za każdym udanym wydarzeniem stoją detale, które tworzą całość.”'></ImageCard>
					<ImageCard
						src='/Working-team.png'
						alt='Grupa ludzi obmawiających plan imprezy.'
						quote='„Za każdym świetnym eventem stoi perfekcyjne wykonanie.”'></ImageCard>
				</div>
			</div>
		</section>
	);
}
