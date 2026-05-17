import { z } from 'zod';

export const personalDetailsSchema = z.object({
	personalDetails: z.object({
		name: z.string().min(1, 'Podaj swoje imię'),
		surname: z.string().min(1, 'Podaj swoje nazwisko'),
		email: z.string().min(1, 'Podaj swój adres email').email('Niepoprawny adres email'),
		telephone: z
			.string()
			.min(1, 'Podaj swój numer telefonu')
			.regex(/^\+?[0-9\s]{9,15}$/, 'Nieprawidłowy numer telefonu'),
		companyName: z.string().optional()
	})
});

export const placeAndDateSchema = z.object({
	placeAndDate: z
		.object({
			date: z.string().min(1, 'Musisz wybrać datę'),
			isPlaceChoosed: z.enum(
				['Tak, miejsce jest wybrane', 'Nie, miejsce nie jest jeszcze wybrane', 'Nie chce podawać'],
				{ message: 'Wybierz jedną z opcji' }
			),
			city: z.string().optional(),
			adress: z.string().optional()
		})
		.refine(
			data => {
				if (data.isPlaceChoosed === 'Tak, miejsce jest wybrane' && !data.city) {
					return false;
				}
				return true;
			},
			{ message: 'Miejscowość jest wymagana', path: ['city'] }
		)
		.refine(
			data => {
				if (data.isPlaceChoosed === 'Tak, miejsce jest wybrane' && !data.adress) {
					return false;
				}
				return true;
			},
			{ message: 'Adres jest wymagany', path: ['adress'] }
		)
});

export const eventDetailsSchema = z.object({
	eventDetails: z
		.object({
			eventType: z.enum(
				[
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
				],
				{ message: 'Wybierz typ wydarzenia' }
			),
			eventDescription: z.string().optional(),
			totalGuests: z.string().min(1, 'Wpisz liczbę członków/gości'),
			estimatedBudget: z.string().optional()
		})
		.refine(
			data => {
				if (data.eventType === 'Inne' && !data.eventDescription) {
					return false;
				}
				return true;
			},
			{ message: 'Musisz wpisać typ wydarzenia', path: ['eventDescription'] }
		)
});

export const servicesSchema = z.object({
	services: z
		.object({
			DJ: z.boolean().optional(),
			Wodzirej: z.boolean().optional(),
			Konferansjer: z.boolean().optional(),
			'Dj Sportowy': z.boolean().optional(),
			'Technika sceniczna': z.boolean().optional(),
			LubBar: z.boolean().optional(),
			Fotobudka: z.boolean().optional(),
			Animatorzy: z.boolean().optional()
		})
		.optional(),
	additionalServices: z.string().optional()
});

export const additionalMessageSchema = z.object({
	message: z.object({
		message: z.string().optional(),
		referralSource: z.string().optional(),
		additionalReferralSource: z.string().optional()
	})
});

export const summarySchema = z.object({
	privacyPolicy: z.boolean().refine(val => val === true, {
		message: 'Musisz potwierdzić zapoznanie się z polityką prywatności oraz zasadami serwisu.'
	})
});

export type PersonalInfoSchemaType = z.infer<typeof personalDetailsSchema>;
export type PlaceAndDateSchemaType = z.infer<typeof placeAndDateSchema>;
export type EventDetailsSchemaType = z.infer<typeof eventDetailsSchema>;
export type ServicesSchemaType = z.infer<typeof servicesSchema>;
export type AdditionalMessageSchemaType = z.infer<typeof additionalMessageSchema>;
export type SummarySchemaType = z.infer<typeof summarySchema>;

export type StepFormData =
	| PersonalInfoSchemaType
	| PlaceAndDateSchemaType
	| EventDetailsSchemaType
	| ServicesSchemaType
	| AdditionalMessageSchemaType
	| SummarySchemaType;

export type FormDataType = Partial<
	PersonalInfoSchemaType &
		PlaceAndDateSchemaType &
		EventDetailsSchemaType &
		ServicesSchemaType &
		AdditionalMessageSchemaType
>;
