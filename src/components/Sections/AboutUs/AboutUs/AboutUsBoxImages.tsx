import { AboutUsImageCard } from './AboutUsImageCard';

export function AboutUsBoxImages() {
	return (
		<div className='flex flex-col gap-5 md:flex-row mt-5 md:mt-8 lg:mt-10 '>
			<AboutUsImageCard
				src='/Photos/Team.png'
				alt='Grupa ludzi obmawiających plan imprezy.'
				quote='„Za każdym udanym wydarzeniem stoją detale, które razem tworzą niezapomnianą całość."'
			/>
			<AboutUsImageCard
				src='/Photos/Working-team.png'
				alt='Grupa ludzi obmawiających plan imprezy.'
				quote='„Za każdym świetnym eventem stoi staranne i perfekcyjne wykonanie każdego detalu."'
			/>
		</div>
	);
}
