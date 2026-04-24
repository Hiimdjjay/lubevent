import { SectionTitle } from '@/components/UI/SectionTitle';
import { ButtonsBox } from '../ButtonsBox';

const quoteInfo = [
	{ id: 1, mainTitle: '6', subTitle: 'kroków' },
	{ id: 2, mainTitle: '~5', subTitle: 'minut' },
	{ id: 3, mainTitle: '100%', subTitle: 'bezpłatnie' }
];

export function InitialInfo() {
	return (
		<div className='flex flex-col justify-center items-center gap-6'>
			<div className='flex flex-col items-center gap-5'>
				<SectionTitle>Darmowa wycena</SectionTitle>

				<p className='text-base font-medium text-center'>
					Wypełnij krótki formularz, a my przygotujemy dla Ciebie spersonalizowaną wycenę, którą odeślemy do
					Ciebie.
				</p>
			</div>
			<div className='flex justify-center items-center gap-3 w-full '>
				{quoteInfo.map(({ id, mainTitle, subTitle }) => {
					return (
						<div
							key={id}
							className='flex flex-col justify-center items-center py-5 w-1/3 bg-bg-sectionLabel rounded-xl'>
							<span className='text-3xl font-semibold text-bg-btn-purple'>{mainTitle}</span>
							<span className='text-sm'>{subTitle}</span>
						</div>
					);
				})}
			</div>
			<p className='text-sm font-medium text-center'>
				Zanim zaczniesz wypełniać — pamiętaj, że każda pominięta informacja może utrudnić przygotowanie
				trafnej wyceny.
			</p>
			<ButtonsBox />
		</div>
	);
}
