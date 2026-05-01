import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { OfferList } from './OfferList';
import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';

export function OfferContent() {
	return (
		<div className='flex flex-col gap-10 px-4 py-7 md:gap-13 md:px-5 md:py-10 lg:pr-7.5 lg:p-23 '>
			<div className='flex flex-col gap-3'>
				<SectionLabel bgColor='bg-bg-sectionLabel'>Co oferujemy</SectionLabel>
				<div className='lg:w-[80%]'>
					<SectionTitle textColor>Oferujemy szeroki zakres usług.</SectionTitle>
				</div>
			</div>
			<OfferList />
			<div className='self-start'>
				<PrimaryButton path='/uslugi'>Sprawdź ofertę</PrimaryButton>
			</div>
		</div>
	);
}
