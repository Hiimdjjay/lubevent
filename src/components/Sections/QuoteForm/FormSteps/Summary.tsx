import { FieldValues, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { Checkbox } from '../Inputs/Checkbox';

type SummaryProps = {
	formDetails: any;
	register: UseFormRegister<FieldValues>;
};

export function Summary({ formDetails, register }: SummaryProps) {
	const summaryData = [
		{
			id: 1,
			label: 'Imię i nazwisko:',
			data: `${formDetails.personalDetails?.name ?? ''} ${formDetails.personalDetails?.surname ?? ''}`
		},
		{
			id: 2,
			label: 'Email:',
			data: `${formDetails.personalDetails?.email ?? ''}`
		},
		{
			id: 3,
			label: 'Numer telefonu:',
			data: `${formDetails.personalDetails?.telephone ?? ''}`
		},
		{
			id: 4,
			label: 'Nazwa firmy:',
			data: `${formDetails.personalDetails?.companyName ?? ''}`
		},
		{
			id: 5,
			label: 'Rodzaj wydarzenia:',
			data: `${formDetails.eventType?.eventType ?? ''}`
		},
		{
			id: 6,
			label: 'Rodzaj wydarzenia:',
			data: `${formDetails.eventType?.describeEventType ?? ''}`
		}
	];
	console.log(formDetails.message);
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 6 z 6' title='Podsumowanie' subtitle='Sprawdź swoje dane' />
			<ul className='bg-white py-2 px-4 rounded-xl'>
				{summaryData.map(({ id, label, data }) => {
					return (
						<li key={id} className='flex justify-between py-3 text-base font-medium border-b border-black/60'>
							<span className='font-medium  text-black/60'>{label}</span>
							<span className='font-semibold text-black/70'>{data}</span>
						</li>
					);
				})}
			</ul>
			<Checkbox id='privacyPolicy' questionMark={false} register={register}>
				Akceptuję{' '}
				<a
					href='/polityka-prywatnosci'
					target='_blank'
					className=' underline underline-offset-5 decoration-2 decoration-bg-btn-purple'>
					politykę prywatności
				</a>
				.
			</Checkbox>
			<ButtonsBox />
		</div>
	);
}
