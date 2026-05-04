import { AboutUsImageCard } from './AboutUsImageCard';
import PLANNING from '@/assets/photos/team/team-planning.jpg';
import WORKING from '@/assets/photos/team/team-working.jpg';

export function AboutUsBoxImages() {
	return (
		<div className='flex flex-col gap-5 md:flex-row mt-5 md:mt-8 lg:mt-10 '>
			<AboutUsImageCard
				imageSrc={PLANNING}
				alt='Grupa ludzi obmawiających plan imprezy.'
				quote='„Za każdym udanym wydarzeniem stoją detale, które razem tworzą niezapomnianą całość."'
			/>
			<AboutUsImageCard
				imageSrc={WORKING}
				alt='Grupa ludzi obmawiających plan imprezy.'
				quote='„Za każdym świetnym eventem stoi staranne i perfekcyjne wykonanie każdego detalu."'
			/>
		</div>
	);
}
