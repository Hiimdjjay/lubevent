import { Select } from '../Inputs/Select';
import { Input } from '../Inputs/Input';
import { useState } from 'react';
import { ButtonsSelect } from '../Inputs/ButtonsSelect';
import { ButtonsBox } from '../ButtonsBox';
import { FormStepHeader } from '../FormStepHeader';
import {
	UseFormRegister,
	FieldValues,
	Control,
	Controller,
	UseFormSetValue,
	UseFormUnregister,
	UseFormTrigger
} from 'react-hook-form';

type EventOption = {
	id: number;
	name: string;
};

type EventDetailsProps = {
	register: UseFormRegister<FieldValues>;
	control: Control<FieldValues>;
	setValue: UseFormSetValue<FieldValues>;
	unregister: UseFormUnregister<FieldValues>;
	trigger: UseFormTrigger<FieldValues>;
	errors: any;
	eventType: string;
};

const eventTypeData: EventOption[] = [
	{ id: 0, name: 'Wybierz typ wydarzenia ' },
	{ id: 1, name: 'Wesele' },
	{ id: 2, name: 'Gala / bankiet' },
	{ id: 3, name: 'Studniówka' },
	{ id: 4, name: '18-nastka' },
	{ id: 5, name: 'Jubileusz' },
	{ id: 6, name: 'Konferencja' },
	{ id: 7, name: 'Wydarzenie marketingowe' },
	{ id: 8, name: 'Wydarzenie sportowe' },
	{ id: 9, name: 'Inne' }
];

const budgetData: string[] = [
	'do 5 000 zł',
	'5 000-15 000 zł',
	'15 000-30 000 zł',
	'powyżej 30 000 zł',
	'Nie chce podawać'
];

export function EventDetails({
	register,
	control,
	setValue,
	unregister,
	trigger,
	errors,
	eventType
}: EventDetailsProps) {
	function handleEventTypeChange(value: string) {
		if (value !== 'Inne') {
			unregister('eventType.describeEventType');
		}
	}

	return (
		<div className='flex flex-col gap-5 '>
			<FormStepHeader label='Krok 3 z 6' title='Rodzaj wydarzenia' subtitle='Opisz nam swoje wydarzenie' />
			<div className='flex flex-col gap-5 '>
				<Select
					id='eventType.eventType'
					selectData={eventTypeData}
					setter={handleEventTypeChange}
					register={register}
					registerOptions={{ required: 'Wybierz typ wydarzenia' }}
					isError={errors.eventType?.eventType}>
					Typ wydarzenia
				</Select>
				{eventType === 'Inne' && (
					<Input
						id='eventType.describeEventType'
						type='text'
						placeholder='Jeśli wybrałeś inne to wpisz typ wydarzenia'
						register={register}
						registerOptions={{ required: 'Wpisz typ wydarzenia' }}
						isError={errors.eventType?.describeEventType}>
						Wpisz typ wydarzenia
					</Input>
				)}
				<Input
					id='guestsQuantity'
					type='text'
					placeholder='np. 150'
					autoComplete='off'
					register={register}
					registerOptions={{ required: 'Wpisz liczbę członków/gości' }}
					isError={errors.guestsQuantity}>
					Liczba członków/gości
				</Input>
				<Controller
					name='eventType.budgetSelected'
					control={control}
					rules={{ required: 'Wybierz szacunkowy budżet' }}
					render={({ field, fieldState }) => (
						<ButtonsSelect
							id='eventType.budgetSelected'
							budgetData={budgetData}
							onChange={field.onChange}
							value={field.value}
							isError={fieldState.error}>
							Szacunkowy budżet
						</ButtonsSelect>
					)}
				/>
			</div>
			<ButtonsBox
				trigger={trigger}
				extraFields={eventType === 'Inne' ? ['eventType.describeEventType'] : []}
			/>
		</div>
	);
}
