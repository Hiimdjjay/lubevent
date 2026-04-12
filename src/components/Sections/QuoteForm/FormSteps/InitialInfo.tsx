import { Button } from '@/components/UI/Button';
import { SecondaryButton } from '@/components/UI/SecondaryButton';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';

const quoteInfo = [
	{ id: 1, mainTitle: '6', subTitle: 'kroków' },
	{ id: 2, mainTitle: '~5', subTitle: 'minut' },
	{ id: 3, mainTitle: '100%', subTitle: 'bezpłatnie' }
];

export function InitialInfo() {
	const [, setShowStep] = useContext(QuoteContext);

	return (
		<div className='flex flex-col justify-center items-center gap-8'>
			<div className='flex flex-col items-center gap-5'>
				<h3 className='text-2xl font-semibold text-center'>
					Bezpłatna wycena wydarzenia
				</h3>
				<p className='text-base font-medium text-center'>
					Wypełnij krótki formularz, a my przygotujemy dla Ciebie spersonalizowaną wycenę.
					Każda informacja pomaga nam dopasować ofertę do Twoich potrzeb.
				</p>
			</div>
			<div className='flex justify-center items-center gap-3 w-full '>
				{quoteInfo.map(({ id, mainTitle, subTitle }) => {
					return (
						<div
							key={id}
							className='flex flex-col justify-center items-center p-5 w-1/3 bg-white rounded-xl'>
							<span className='text-3xl font-semibold text-bg-btn-purple'>
								{mainTitle}
							</span>
							<span className='text-sm'>{subTitle}</span>
						</div>
					);
				})}
			</div>
			<p className='text-sm font-medium text-center'>
				Zanim zaczniesz — każda pominięta informacja może utrudnić przygotowanie trafnej
				wyceny. Bądź szczery i dokładny.
			</p>
			<div className='flex flex-col justidy-center items-center gap-2 '>
				<Button variant='primary' onClick={() => setShowStep(prev => prev + 1)}>
					Rozpocznij wycenę
				</Button>
				<SecondaryButton href='/'>Wróć na stronę główną</SecondaryButton>
			</div>
		</div>
	);
}
