import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Check } from 'lucide-react';

export function Submitted() {
	return (
		<div className='flex flex-col justify-center items-center gap-2 bg-white px-5 py-10 rounded-2xl '>
			<div className='flex justify-center items-center w-20 h-20 bg-green-200 rounded-full'>
				<Check size={50} className='text-green-700' />
			</div>
			<SectionTitle>Wysłane!</SectionTitle>
			<Subtitle>Twój formularz został wysłany poprawnie.</Subtitle>
			<div className='mt-5'>
				<PrimaryButton link={'/'}>Wróć na stronę główną</PrimaryButton>
			</div>
		</div>
	);
}
