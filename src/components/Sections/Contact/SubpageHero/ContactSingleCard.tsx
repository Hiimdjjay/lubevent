import Image from 'next/image';

type ContactSingleCard = {
	name: string;
	details: React.ReactNode;
	icon: string;
	alt: string;
};

export function ContactSingleCard({ name, details, icon, alt }: ContactSingleCard) {
	return (
		<div className='flex flex-col justify-between gap-10 bg-white w-full p-5 rounded-2xl'>
			<div className='flex items-center justify-center relative w-10 h-10  bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-xl'>
				<Image src={icon} width={20} height={20} alt={alt} />
			</div>
			<div className='flex flex-col gap-1'>
				<h2 className='text-xl font-semibold'>{name}</h2>
				<p className=' font-medium text-black/75 whitespace-pre-line'>{details}</p>
			</div>
		</div>
	);
}
