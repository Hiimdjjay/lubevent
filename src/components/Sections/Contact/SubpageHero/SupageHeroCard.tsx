import { Email } from '@/components/UI/Icons/Email';
import { LocationPin } from '@/components/UI/Icons/LocationPin';
import { Telephone } from '@/components/UI/Icons/Telephone';
import { IconKey } from '@/constants/contactData';

type SupageHeroCardProps = {
	name: string;
	details: React.ReactNode;
	icon: IconKey;
};

const iconFilter = {
	telephone: <Telephone />,
	email: <Email />,
	'location-pin': <LocationPin />
};

export function SupageHeroCard({ name, details, icon }: SupageHeroCardProps) {
	return (
		<div className='flex flex-col justify-between gap-10 bg-white w-full p-5 rounded-2xl'>
			<div className='flex items-center justify-center relative w-10 h-10 bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-xl'>
				{iconFilter[icon]}
			</div>
			<div className='flex flex-col gap-1'>
				<h2 className='text-xl font-semibold lg:text-[22px]'>{name}</h2>
				<p className=' font-medium text-black/75 whitespace-pre-line lg:text-lg'>{details}</p>
			</div>
		</div>
	);
}
