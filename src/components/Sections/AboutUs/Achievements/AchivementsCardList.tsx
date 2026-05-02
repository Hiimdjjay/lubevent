import { ACHIEVEMENTS_DATA } from '@/constants/aboutUsData';

export function AchievementsCards() {
	return (
		<div className='grid grid-rows-4 gap-y-4 gap-x-5 md:grid-rows-2 md:grid-cols-2'>
			{ACHIEVEMENTS_DATA.map(({ id, title, number, mark }) => {
				return (
					<div key={id} className='flex flex-col gap-5 p-5 bg-bg-sectionLabel rounded-2xl md:p-8 lg:p-10'>
						<div className='flex text-[30px] font-semibold md:text-[38px]'>
							<h3 className=''>{number}</h3>
							{mark}
						</div>
						<p className='text-black/70 font-semibold md:text-lg'>{title}</p>
					</div>
				);
			})}
		</div>
	);
}
