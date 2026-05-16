type inputTypes = {
	id: number;
	name: string;
	label: string;
	placeholder?: string;
	type?: string;
};

type selectInputTypes = inputTypes & {
	selectOptions: string[];
};

type personalDetailsFieldTypes = {
	name: inputTypes;
	surname: inputTypes;
	email: inputTypes;
	telephone: inputTypes;
	companyName: inputTypes;
};

export const personalDetailsFields: personalDetailsFieldTypes = {
	name: { id: 1, name: 'personalDetails.name', label: 'Imię', placeholder: 'Jan', type: 'text' },
	surname: { id: 2, name: 'personalDetails.surname', label: 'Nazwisko', placeholder: 'Kowalski', type: 'text' },
	email: {
		id: 3,
		name: 'personalDetails.email',
		label: 'Adres e-mail',
		placeholder: 'jankowalski@domena.pl',
		type: 'email'
	},
	telephone: {
		id: 4,
		name: 'personalDetails.telephone',
		label: 'Numer telefonu',
		placeholder: '+48 500 200 100',
		type: 'tel'
	},
	companyName: {
		id: 5,
		name: 'personalDetails.companyName',
		label: 'Nazwa firmy (opcjonalnie)',
		placeholder: 'np. Lubevent',
		type: 'text'
	}
};

type placeAndDateFieldTypes = {
	date: inputTypes;
	isPlaceChoosed: selectInputTypes;
	city: inputTypes;
	adress: inputTypes;
};

export const placeAndDateFields: placeAndDateFieldTypes = {
	date: { id: 1, name: 'placeAndDate.date', label: 'Data wydarzenia', type: 'date' },
	isPlaceChoosed: {
		id: 2,
		name: 'placeAndDate.isPlaceChoosed',
		label: 'Czy miejsce wydarzenia jest już określone',
		selectOptions: [
			'Wybierz jedną z opcji',
			'Tak, miejsce jest wybrane',
			'Nie, miejsce nie jest jeszcze wybrane',
			'Nie chce podawać'
		]
	},
	city: { id: 3, name: 'placeAndDate.city', label: 'Miejscowość', placeholder: 'np. Lublin', type: 'text' },
	adress: {
		id: 4,
		name: 'placeAndDate.adress',
		label: 'Adres lub nazwa lokalu',
		placeholder: 'np. Rezydencja w szczerym polu',
		type: 'text'
	}
};
