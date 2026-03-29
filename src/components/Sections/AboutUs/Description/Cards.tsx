import { UserStar } from 'lucide-react';
import { ClockCheck } from 'lucide-react';
import { Expand } from 'lucide-react';

type IconName = 'UserStar' | 'ClockCheck' | 'Expand';

const infoCards: { id: number; name: string; icon: IconName }[] = [
	{ id: 1, name: 'Indywidualne podejście do klienta', icon: 'UserStar' },
	{ id: 2, name: 'Punktualność i terminowość', icon: 'ClockCheck' },
	{ id: 3, name: 'Kompleksowa obsługa wydarzeń', icon: 'Expand' }
];

const icons = {
	UserStar: <UserStar size={40} strokeWidth={1.3} />,
	ClockCheck: <ClockCheck size={40} strokeWidth={1.3} />,
	Expand: <Expand size={40} strokeWidth={1.3} />
};

export function Cards() {
	return (
		<div className='flex gap-5 md:max-w-137.5 '>
			{infoCards.map(({ id, name, icon }) => {
				return (
					<div key={id} className='flex flex-col gap-2 items-center'>
						{icons[icon]} <p className='text-center font-medium text-sm md:text-base lg:text-lg'>{name}</p>
					</div>
				);
			})}
		</div>
	);
}
