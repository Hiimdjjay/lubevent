import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';

export default function NotFound() {
	return (
		<main className=' flex items-center justify-center h-dvh w-full p-5'>
			<div className='flex flex-col items-center gap-3 '>
				<h1 className='text-[100px] font-bold text-center md:text-[130px] lg:text-[160px]'>404</h1>
				<hr className='self-center w-15 border-2 border-black/60' />
				<SectionTitle textCenter>Strona nie istnieje</SectionTitle>
				<div className='max-w-100'>
					<Subtitle textCenter>
						Wygląda na to, że strona, której szukasz, została usunięta lub nigdy nie istniała.
					</Subtitle>
				</div>
				<div className='mt-5'>
					<PrimaryButton path='/'>Wróć na stronę główną</PrimaryButton>
				</div>
			</div>
		</main>
	);
}
