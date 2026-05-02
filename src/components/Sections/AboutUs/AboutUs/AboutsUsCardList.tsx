import { ABOUTUS_FEATURE_ITEMS } from '@/constants/aboutUsData';
import { UserStar } from 'lucide-react';
import { ClockCheck } from 'lucide-react';
import { Expand } from 'lucide-react';

const icons = {
	UserStar: <UserStar size={40} strokeWidth={1.3} />,
	ClockCheck: <ClockCheck size={40} strokeWidth={1.3} />,
	Expand: <Expand size={40} strokeWidth={1.3} />
};

export function AboutUsCardList() {
	return (
		<div className='flex gap-5 md:max-w-137.5 '>
			{ABOUTUS_FEATURE_ITEMS.map(({ id, name, icon }) => {
				return (
					<div key={id} className='flex flex-col gap-2 items-center'>
						<div>{icons[icon]}</div>
						<p className='text-center font-medium text-base md:text-[17px] lg:text-lg'>{name}</p>
					</div>
				);
			})}
		</div>
	);
}
