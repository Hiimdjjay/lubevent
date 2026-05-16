import { z } from 'zod';

export const personalDetails = z.object({
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

export const placeAndDate = z.object({
	placeAndDate: z.object({
		date: z.string().min(1, 'Musisz wybrać datę'),
		isPlaceChoosed: z.enum(
			['Tak, miejsce jest wybrane', 'Nie, miejsce nie jest jeszcze wybrane', 'Nie chce podawać'],
			{ message: 'Wybierz jedną z opcji' }
		),
		city: z.string().optional(),
		adress: z.string().optional()
	})
});

export const eventDetails = z.object({
	eventType: z.object({
		eventType: z.string().min(1, 'Wybierz typ wydarzenia'),
		describeEventType: z.string().optional(),
		budgetSelected: z.string().min(1, 'Wybierz szacunkowy budżet')
	}),
	guestsQuantity: z.string().min(1, 'Wpisz liczbę członków/gości')
});

export const services = z.object({
	services: z
		.object({
			DJ: z.boolean().optional(),
			Wodzirej: z.boolean().optional(),
			Konferansjer: z.boolean().optional(),
			'Dj sportowy': z.boolean().optional(),
			'Technika sceniczna': z.boolean().optional(),
			LubBar: z.boolean().optional(),
			Fotobudka: z.boolean().optional(),
			Animatorzy: z.boolean().optional(),
			additionalService: z.string().optional()
		})
		.optional()
});

export const AdditionalMessage = z.object({
	message: z.string().optional(),
	referralSource: z.string().optional(),
	additionalReferralSource: z.string().optional()
});

export const summary = z.object({
	privacyPolicy: z.literal(true, { message: 'Musisz zaakceptować politykę prywatności' })
});

export type PersonalInfo = z.infer<typeof personalDetails>;
export type PlaceAndDate = z.infer<typeof placeAndDate>;
export type EventDetails = z.infer<typeof eventDetails>;
export type Services = z.infer<typeof services>;
export type AdditionalMessage = z.infer<typeof AdditionalMessage>;
export type Summary = z.infer<typeof summary>;

export type StepFormData = PersonalInfo | PlaceAndDate | EventDetails | Services | AdditionalMessage | Summary;
