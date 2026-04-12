type InputProps = {
	children: React.ReactNode;
	id: string;
	placeholder?: string;
};

type EventOption = {
	id: number;
	name: string;
};

const eventType: EventOption[] = [
	{ id: 1, name: 'Wesele' },
	{ id: 2, name: 'Gala / bankiet' },
	{ id: 3, name: 'Studniówka' },
	{ id: 4, name: '18-nastka' },
	{ id: 5, name: 'Jubileusz' },
	{ id: 6, name: 'Konferencja' },
	{ id: 7, name: 'Event marketingowy' },
	{ id: 8, name: 'Event sportowy' },
	{ id: 9, name: 'Inne' }
];

export function Select({ children, id }: InputProps) {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<label htmlFor={id} className='font-semibold text-black/70 md:text-lg'>
				{children}
			</label>
			<select
				defaultValue={0}
				className='bg-white text-black/70 font-medium px-5 py-2.5 rounded-xl border border-black/15 placeholder-black/50'>
				<option disabled value='0'>
					Wybierz typ wydarzenia...
				</option>
				{eventType.map(({ id, name }) => {
					return <option key={id}>{name}</option>;
				})}
			</select>
		</div>
	);
}
