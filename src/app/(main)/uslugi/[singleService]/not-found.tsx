import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { SearchAlert } from 'lucide-react';

export default function NotFound() {
	return (
		<main className=' flex items-center justify-center h-dvh w-full p-5 pt-30 pb-20 md:pt-45 md:pb-25 lg:pt-60 lg:pb-30'>
			<section className='flex flex-col items-center gap-3 '>
				<div className='bg-white rounded-2xl p-4 my-5'>
					<SearchAlert className='w-20 h-20 md:w-30 md:h-30 lg:w-40 lg:h-40' strokeWidth={1.3} />
				</div>
				<SectionTitle textCenter>Nie znaleziono usługi</SectionTitle>
				<div className='max-w-100'>
					<Subtitle textCenter>
						Ta usługa nie istnieje lub mogła zostać usunięta. Sprawdź czy link jest poprawny lub wybierz inną
						usługę.
					</Subtitle>
				</div>
				<div className='flex flex-col items-center gap-2 mt-5 md:flex-row'>
					<PrimaryButton path='/services'>Dostępne usługi</PrimaryButton>
					<SecondaryButton path='/' arrowLeft>
						Strona główna
					</SecondaryButton>
				</div>
			</section>
		</main>
	);
}
