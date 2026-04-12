import { Wrapper } from '@/components/UI/Wrapper';
import { ImageCard } from './ImageCard';

export function Images() {
	return (
		<section className='pb-20 md:pb-25 lg:pb-30'>
			<Wrapper>
				<div className='flex flex-col gap-5 md:flex-row'>
					<ImageCard
						src='/Photos/Team.png'
						alt='Grupa ludzi obmawiających plan imprezy.'
						quote='„Za każdym udanym wydarzeniem stoją detale, które tworzą całość.”'></ImageCard>
					<ImageCard
						src='/Photos/Working-team.png'
						alt='Grupa ludzi obmawiających plan imprezy.'
						quote='„Za każdym świetnym eventem stoi perfekcyjne wykonanie.”'></ImageCard>
				</div>
			</Wrapper>
		</section>
	);
}
