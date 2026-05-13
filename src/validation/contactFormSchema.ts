import { z } from 'zod';

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, 'Musisz podać imię i nazwisko')
		.refine(value => value.trim().split(/\s+/).length >= 2, 'Podaj imię i nazwisko'),
	email: z.string().min(1, 'Musisz podać adres e-mail').email('Podany adres jest nieprawidłowy'),
	tel: z.string().optional(),
	message: z.string().min(1, 'Podaj treść wiadomości'),
	privacyPolicy: z.boolean().refine(value => value === true, 'Musisz zapoznać się z polityką prywatności')
});
