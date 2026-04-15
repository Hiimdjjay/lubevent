import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';
import { Input } from '../Inputs/Input';
import { Button } from '@/components/UI/Button';
import { useContext } from 'react';
import { QuoteContext } from '@/context/QuoteContext';



export function PersonalDetails() {
	const [, setShowStep] = useContext(QuoteContext);

	return (
		<div className='flex flex-col gap-5'>
			<div className='flex flex-col items-start'>
				<SectionLabel bgColor='bg-white'>Krok 1 z 6</SectionLabel>
				<SectionTitle>Dane osobowe</SectionTitle>
				<Subtitle>Podaj swoje dane kontaktowe</Subtitle>
			</div>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-col justify-between gap-5 md:flex-row'>
					<Input id='name' type='text' placeholder='Jan'>
						Imię
					</Input>
					<Input id='surname' type='text' placeholder='Kowalski'>
						Nazwisko
					</Input>
				</div>
				<Input id='email' type='email' placeholder='jankowalski@domena.pl'>
					Adres e-mail
				</Input>
				<Input id='telephone' type='tel' placeholder='+48 500 200 100'>
					Telefon
				</Input>
				<Input id='surname' type='text' placeholder='Nazwa Firmy'>
					Firma (opcjonalnie)
				</Input>
			</div>
			<div className='flex justify-between'>
				<Button variant='secondary' onClick={() => setShowStep(prev => prev - 1)}>
					Wstecz
				</Button>
				<Button variant='primary' onClick={() => setShowStep(prev => prev + 1)}>
					Dalej
				</Button>
			</div>
		</div>
	);
}
