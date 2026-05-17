type CardsDataType = {
	id: number;
	value: string;
	label: string;
};

export const CARDS_DATA: CardsDataType[] = [
	{ id: 1, value: '6', label: 'kroków' },
	{ id: 2, value: '~5', label: 'minut' },
	{ id: 3, value: '100%', label: 'bezpłatnie' }
];

type inputTypes = {
	id?: number;
	label: string;
	name: string;
	placeholder?: string;
	type?: string;
};

type selectTypes = {
	id?: number;
	label: string;
	name: string;
	selectOptions: string[];
};

type arryTypes = {
	id: number;
	name: string;
	label: string;
};

type personalDetailsFieldType = {
	name: inputTypes;
	surname: inputTypes;
	email: inputTypes;
	telephone: inputTypes;
	companyName: inputTypes;
};

export const PERSONAL_DETAILS_FIELDS: personalDetailsFieldType = {
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

type placeAndDateFieldType = {
	date: inputTypes;
	isPlaceChoosed: selectTypes;
	city: inputTypes;
	adress: inputTypes;
};

export const PLACE_DATE_FIELDS: placeAndDateFieldType = {
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

type eventDetailsType = {
	eventType: selectTypes;
	eventDescription: inputTypes;
	totalGuests: inputTypes;
	estimatedBudget: selectTypes;
};

export const EVENT_DETAILS_FIELDS: eventDetailsType = {
	eventType: {
		id: 1,
		name: 'eventDetails.eventType',
		label: 'Typ wydarzenia',
		selectOptions: [
			'Wybierz typ wydarzenia ',
			'Wesele',
			'Gala / bankiet',
			'Studniówka',
			'18-nastka',
			'Jubileusz',
			'Konferencja',
			'Wydarzenie marketingowe',
			'Wydarzenie sportowe',
			'Inne'
		]
	},
	eventDescription: {
		id: 2,
		name: 'eventDetails.eventDescription',
		label: 'Wpisz typ wydarzenia',
		placeholder: 'Jeśli wybrałeś inne to wpisz typ wydarzenia',
		type: 'text'
	},
	totalGuests: {
		id: 3,
		name: 'eventDetails.totalGuests',
		label: 'Liczba członków/gości',
		placeholder: 'np. 150',
		type: 'number'
	},
	estimatedBudget: {
		id: 4,
		name: 'eventDetails.estimatedBudget',
		label: 'Szacowany budżet',
		selectOptions: ['do 5 000 zł', '5 000-15 000 zł', '15 000-30 000 zł', 'powyżej 30 000 zł', 'Nie chce podawać']
	}
};

type ServicesType = {
	services: arryTypes[];
	additionalServices: inputTypes;
};

export const SERVICE_FIELDS: ServicesType = {
	services: [
		{ id: 1, name: 'services.Dj', label: 'DJ' },
		{ id: 2, name: 'services.Wodzirej', label: 'Wodzirej' },
		{ id: 3, name: 'services.Konferansjer', label: 'Konferansjer' },
		{ id: 4, name: 'services.Dj Sportowy', label: 'Dj sportowy' },
		{ id: 5, name: 'services.Technika sceniczna', label: 'Technika sceniczna' },
		{ id: 6, name: 'services.LubBar', label: 'LubBar' },
		{ id: 7, name: 'services.Fotobudka', label: 'Fotobudka' },
		{ id: 8, name: 'services.Animatorzy', label: 'Animatorzy' }
	],

	additionalServices: {
		id: 2,
		name: 'additionalServices',
		label: 'Nie znalazłeś swojej usługi na liście? Opisz ją poniżej (Opcjonalnie)',
		placeholder: 'np. Fotogra',
		type: 'text'
	}
};

type AdditionalMessage = {
	message: inputTypes;
	referralSource: selectTypes;
	additionalReferralSource: inputTypes;
};

export const ADDITIONAL_MESSAGE: AdditionalMessage = {
	message: { id: 1, name: 'message.message', label: '	Opis, pytania lub szczegółowe wymagania', placeholder: '' },
	referralSource: {
		id: 2,
		name: 'message.referralSource',
		label: 'Skąd dowiedzieli się Państwo o nas? (Opcjonalnie)',
		selectOptions: [
			'Wybierz jedną z opcji',
			'Google / wyszukiwarka',
			'Facebook',
			'Instagram',
			'TikTok',
			'LinkedIn',
			'Polecenie znajomego / rodziny',
			'Inne'
		]
	},
	additionalReferralSource: {
		id: 3,
		name: 'message.additionalReferralSource',
		label: 'Nie ma Twojej opcji? Napisz skąd nas znasz',
		placeholder: 'np. Bawiłem się na weselu organizowanych przez państwa agencje',
		type: 'text'
	}
};

type SummaryDataTypes = {
	privacyPolicy: inputTypes;
};

export const SUMMARY_DATA: SummaryDataTypes = {
	privacyPolicy: {
		id: 1,
		name: 'privacyPolicy',
		label: 'Akceptuję politykę prywatności. Zgadzam się na przetwarzanie moich danych w celu wykonania wyceny.'
	}
};
