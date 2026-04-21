import { PrimaryButton } from '@/components/UI/PrimaryButton';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Check } from 'lucide-react';

export function Submitted() {
	return (
		<div className='flex flex-col justify-center items-center gap-5 bg-bg-sectionLabel p-5 rounded-2xl md:p-10'>
			<div className='flex justify-center items-center w-20 h-20 bg-green-200 rounded-full'>
				<Check size={50} className='text-green-600' />
			</div>
			<SectionTitle>Wysłane!</SectionTitle>
			<Subtitle>Twój formularz został wysłany poprawnie.</Subtitle>
			<PrimaryButton link={'/'}>Wróć na stronę główną</PrimaryButton>
		</div>
	);
}
