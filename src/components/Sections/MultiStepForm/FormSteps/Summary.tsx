import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import { Checkbox } from '../Inputs/Checkbox';

type SummaryProps = {
	summaryData: any;
	register: UseFormRegister<FieldValues>;
	errors: any;
	isSubmitting: boolean;
};

export function Summary({ summaryData, register, errors, isSubmitting }: SummaryProps) {
	return (
		<div className='flex flex-col gap-5'>
			<FormStepHeader label='Krok 6 z 6' title='Podsumowanie' subtitle='Sprawdź swoje dane' />
			<div className='flex flex-col gap-5 bg-white p-4 rounded-xl'>
				{summaryData.map(({ title, data }: { title: string; data: { label: string; data: string }[] }, index: number) => {
					return (
						<div key={index} className=''>
							<p className=' font-semibold text-black/80 text-[18px] border-b border-black/80 '>{title}</p>

							<ul className=''>
								{data.every(item => item.data === '') ? (
									<li className='py-2 text-sm text-black/40'>Brak danych, krok został pominięty</li>
								) : (
									data.map(({ label, data: value }, itemIndex) => {
										if (value === '') {
											return null;
										}
										return (
											<li
												key={itemIndex}
												className='flex justify-between items-center gap-3 py-2 text-base font-medium border-b border-black/40'>
												<span className='text-sm font-medium text-black/60 whitespace-nowrap'>{label}</span>
												<span className=' font-semibold text-black/70 break-all'>{value}</span>
											</li>
										);
									})
								)}
							</ul>
						</div>
					);
				})}
			</div>
			<Checkbox
				id='privacyPolicy'
				questionMark={false}
				register={register}
				registerOptions={{
					required:
						'Musisz zapoznać się i zaakceptować warunkami polityki prywatność przed wysłaniem formularza.'
				}}
				isError={errors.privacyPolicy}>
				Akceptuję{' '}
				<a
					href='/polityka-prywatnosci'
					target='_blank'
					className=' underline underline-offset-5 decoration-2 decoration-bg-btn-purple'>
					politykę prywatności
				</a>
				. Zgadzam się na przetwarzanie moich danych w celu wykonania wyceny.
			</Checkbox>
			<ButtonsBox isSubmitting={isSubmitting} />
		</div>
	);
}
