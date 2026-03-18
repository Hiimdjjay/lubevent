import { ListCheck, HandCoins, AlarmClock, UserStar } from 'lucide-react';

export type CardProps = {
	children: string;
	icon: keyof typeof icons;
};

const icons = {
	ListCheck: <ListCheck size={46} strokeWidth={1} />,
	HandCoins: <HandCoins size={46} strokeWidth={1} />,
	AlarmClock: <AlarmClock size={46} strokeWidth={1} />,
	UserStar: <UserStar size={46} strokeWidth={1} />
};

export function Card({ children, icon }: CardProps) {
	return (
		<div className='h-50 w-full p-5 bg-bg-sectionLabel rounded-xl lg:p-10 lg:h-62'>
			<div className='flex flex-col justify-between max-gap-20 w-full h-full '>
				{icons[icon]}
				<h3 className='text-xl font-medium'>{children}</h3>
			</div>
		</div>
	);
}
