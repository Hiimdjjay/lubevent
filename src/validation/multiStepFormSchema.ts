import { z } from 'zod';

export type FormData = z.infer<typeof multiStepFormSchema>;

export const multiStepFormSchema = z.object({
	personalDetails: z.object({
		name: z.string().min(1, 'Podaj swoje imię'),
		surname: z.string().min(1, 'Podaj swoje nazwisko'),
		email: z.string().min(1, 'Podaj swój adres email').email('Niepoprawny adres email'),
		telephone: z
			.string()
			.min(1, 'Podaj swój numer telefonu')
			.regex(/^\+?[0-9\s]{9,15}$/, 'Nieprawidłowy numer telefonu'),
		companyName: z.string().optional()
	}),
	placeAndDate: z.object({
		date: z.string().min(1, 'Musisz wybrać datę'),
		isPlaceChoosed: z.enum(
			['Tak, miejsce jest wybrane', 'Nie, miejsce nie jest jeszcze wybrane', 'Nie chce podawać'],
			{ message: 'Wybierz jedną z opcji' }
		),
		city: z.string(),
		adress: z.string()
	})
});
