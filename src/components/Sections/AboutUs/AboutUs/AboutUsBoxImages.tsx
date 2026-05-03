import { AboutUsImageCard } from './AboutUsImageCard';
import teamPlanningImg from '@/assets/photos/team/team-planning.jpg';
import teamWorkingImg from '@/assets/photos/team/team-working.jpg';

export function AboutUsBoxImages() {
	return (
		<div className='flex flex-col gap-5 md:flex-row mt-5 md:mt-8 lg:mt-10 '>
			<AboutUsImageCard
				src={teamPlanningImg}
				alt='Grupa ludzi obmawiających plan imprezy.'
				quote='„Za każdym udanym wydarzeniem stoją detale, które razem tworzą niezapomnianą całość."'
			/>
			<AboutUsImageCard
				src={teamWorkingImg}
				alt='Grupa ludzi obmawiających plan imprezy.'
				quote='„Za każdym świetnym eventem stoi staranne i perfekcyjne wykonanie każdego detalu."'
			/>
		</div>
	);
}
