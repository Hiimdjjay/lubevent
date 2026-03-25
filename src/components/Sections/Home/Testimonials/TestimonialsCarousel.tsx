'use client';

import { Buttons } from './Buttons';
import { TestimonialsCard } from './TestimonialsCard';
import { useState } from 'react';

// const testimonials = [
// 	{
// 		id: 1,
// 		type: 'private',
// 		name: 'Jakub',
// 		surname: 'Stachyra',
// 		content:
// 			'Po dwóch weselach, na których grał Dominik wiedziałam, że na moim weselu nie zagra nikt inny - nawet termin ślubu był dopasowany tak, żeby zgrać DJa i salę. Parkiet nawet przez chwilę nie był pusty (niektórzy tańczyli też podczas przerw na jedzenie).'
// 	},
// 	{
// 		id: 2,
// 		type: 'private',
// 		name: 'Zuzanna',
// 		surname: 'Telega',
// 		content:
// 			'Bardzo gorąco polecam DJ-a z Lublina. Nie tylko jest to cudowny artysta lecz również wspaniała osoba. Muzyka wybrana pod nas, świetne zabawy oczepinowe, Dominik również pięknie śpiewa.'
// 	},
// 	{
// 		id: 3,
// 		type: 'private',
// 		name: 'Weronika',
// 		surname: 'Pewelec',
// 		content:
// 			'Bardzo gorąco polecam DJ-a z Lublina. Nie tylko jest to cudowny artysta lecz również wspaniała osoba. Muzyka wybrana pod nas, świetne zabawy oczepinowe, Dominik również pięknie śpiewa.'
// 	},
// 	{
// 		id: 4,
// 		type: 'private',
// 		name: 'Michał',
// 		surname: 'Wawszczak',
// 		content:
// 			'Chłopaki to absolutny strzał w dziesiątkę! Poprowadził nasze wesele z niesamowitą energią i wyczuciem. Muzyka była doskonale dobrana — każdy znalazł coś dla siebie, a parkiet był pełen od pierwszego do ostatniego tańca! '
// 	},
// 	{
// 		id: 5,
// 		type: 'private',
// 		name: 'Kinga',
// 		surname: 'Studzińska',
// 		content:
// 			'Serdecznie polecamy usługi Dominika. Odpowiedni człowiek na odpowiednim miejscu! 😊 Wiedzieliśmy, że wybór ekipy Dominika na nasze wesele to będzie świetny pomysł i się nie zawiedliśmy, a mogę z pełnym przekonaniem stwierdzić, że to było najlepsze wesele, na którym byli nasi goście właśnie ze względu na DJ-a 😁'
// 	},
// 	{
// 		id: 6,
// 		type: 'private',
// 		name: 'Dominika',
// 		surname: 'Józefczuk',
// 		content:
// 			'Mieliśmy ogromną przyjemność współpracować z DJ Dominikiem i jesteśmy absolutnie zachwyceni! Od pierwszego kontaktu aż do ostatniego utworu, pełen profesjonalizm, świetna komunikacja i niesamowite wyczucie klimatu imprezy.'
// 	},
// 	{
// 		id: 7,
// 		type: 'private',
// 		name: 'Paweł',
// 		surname: 'Zyśko',
// 		content:
// 			'DJ z Lublina to właśnie on rozkręcił i porwał na parkiet naszych gości weselnych nawet tych którzy sceptycznie są nastawieni do DJ-ów na weselach. Potrafi tak dobrać utwory muzyczne, że parkiet aż płonie. Nasi goście weselni jak i my sami na długo zapamiętamy ten wieczór :)'
// 	},
// 	{
// 		id: 8,
// 		type: 'private',
// 		name: 'Halina',
// 		surname: 'Podleśna',
// 		content:
// 			'Z całego serca dziękujemy Wam – za wspaniałe poprowadzenie naszego wesela! Dzięki Wam parkiet tętnił życiem do samego rana, a każdy moment – od pierwszego tańca po ostatni hit – był dopracowany i pełen energii.'
// 	},
// 	{
// 		id: 9,
// 		type: 'private',
// 		name: 'Weronika',
// 		surname: 'Pielach',
// 		content:
// 			'Mieliśmy przyjemność być gośćmi na weselu, na którym oprawę muzyczną zapewniał DJ z Lublina– i musimy przyznać, że zrobił świetną robotę 😁 Zabawa była fantastyczna, parkiet cały czas pełen, a muzyka trafiała w gusta zarówno młodszych, jak i starszych.'
// 	},
// 	{
// 		id: 10,
// 		type: 'private',
// 		name: 'Adrianna',
// 		surname: 'Kusyk',
// 		content:
// 			'Jeśli szukacie najlepszego DJ w Lublinie, to właśnie Dominik! Zrobi wam taką imprezę że przejdzie to wasze wszelkie oczekiwania!!! Jesteśmy mega zadowoleni, pełna empatia a przy tym luz i wspaniały głos !! Polecamy z całego serca 😎'
// 	}
// ];

export function TestimonialsCarousel() {
	const [value, setValue] = useState(0);

	return (
		<div className=''>
			<div
				style={{ transform: `translateX(calc(-${value * 100}% - 20px))` }}
				className={`flex gap-5`}>
				<TestimonialsCard name='Jakub' surname='Rafalski' />
				<TestimonialsCard name='Piotr' surname='Kulczyński' />
				<TestimonialsCard name='Anna' surname='Rafalska' />
			</div>
			<Buttons setValue={setValue} />
			<p>{value}</p>
		</div>
	);
}
