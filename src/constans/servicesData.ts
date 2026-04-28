export type ServiceData = {
	title: string;
	subtitle: string;
	category: string;
	image: string;
	alt: string;
	path: string;
	generalDescription: { title: string; description: string };
	sidelDescription: { title: string; description: string };
};

export const servicesData: ServiceData[] = [
	// ── UROCZYSTOŚCI ─────────────────────────────────────────────────────────
	{
		title: 'Wesele',
		subtitle: 'Kompleksowa oprawa muzyczna i techniczna Waszego wielkiego dnia.',
		category: 'Uroczystości',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Wesele',
		path: '/uslugi/wesele',
		generalDescription: {
			title: 'Wesele — kompleksowa realizacja',
			description:
				'Wesele to jedno z najważniejszych wydarzeń w życiu. Wiemy o tym doskonale — dlatego podchodzimy do każdej realizacji z pełnym zaangażowaniem i dbałością o każdy detal, od pierwszego spotkania aż do ostatniego tańca.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Zajmujemy się kompleksową oprawą Waszego wesela. Dostarczamy sprzęt nagłośnieniowy i oświetleniowy, dbamy o jego rozstawienie i obsługę przez cały wieczór. Nasz DJ i wodzirej zadbają o to, żeby parkiet nigdy nie był pusty.'
		}
	},
	{
		title: 'Studniówka',
		subtitle: 'Niezapomniana noc przed maturą pełna muzyki i zabawy.',
		category: 'Uroczystości',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Studniówka',
		path: '/uslugi/studniowka',
		generalDescription: {
			title: 'Studniówka — sto dni do matury',
			description:
				'Studniówka to wyjątkowy wieczór, który na zawsze pozostanie w pamięci. Zadbamy o oprawę muzyczną, oświetlenie i atmosferę, która sprawi, że ten wieczór będzie niezapomniany.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Przygotowujemy kompleksową oprawę studniówki — od nagłośnienia i oświetlenia, przez DJ-a i wodzireja, aż po dodatkowe atrakcje. Wszystko po to, żeby Wasz wieczór był idealny.'
		}
	},
	{
		title: '18-nastka',
		subtitle: 'Wyjątkowe urodziny, które zapamiętasz na całe życie.',
		category: 'Uroczystości',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: '18-nastka',
		path: '/uslugi/18-nastka',
		generalDescription: {
			title: '18-nastka — wejście w dorosłość z przytupem',
			description:
				'Osiemnaste urodziny to wyjątkowy moment. Pomożemy stworzyć imprezę, która będzie dokładnie taka, jak sobie wymarzyłeś — z muzyką, światłami i atmosferą, o której będziesz opowiadać latami.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Zajmujemy się pełną oprawą imprezy urodzinowej — nagłośnienie, oświetlenie, DJ, fotobudka i inne atrakcje. Ty cieszysz się imprezą, my dbamy o resztę.'
		}
	},
	{
		title: 'Impreza tematyczna',
		subtitle: 'Twój pomysł, nasza realizacja — bez ograniczeń.',
		category: 'Uroczystości',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Impreza tematyczna',
		path: '/uslugi/impreza-tematyczna',
		generalDescription: {
			title: 'Impreza tematyczna — kreatywność bez granic',
			description:
				'Lata 80., maskarada, hawajskie lato? Cokolwiek sobie wymarzysz, my to zrealizujemy. Imprezy tematyczne to nasza specjalność — dbamy o każdy detal, żeby klimat był idealny.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Dostosowujemy oprawę muzyczną i oświetlenie do wybranego motywu imprezy. Dzięki nam każdy gość poczuje się jak bohater wybranego tematu.'
		}
	},
	// ── GALE I JUBILEUSZE ────────────────────────────────────────────────────
	{
		title: 'Gala / Bankiet',
		subtitle: 'Elegancka oprawa dla prestiżowych wydarzeń firmowych.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Gala i bankiet',
		path: '/uslugi/gala-bankiet',
		generalDescription: {
			title: 'Gala i bankiet — prestiż na najwyższym poziomie',
			description:
				'Gale i bankiety wymagają perfekcyjnej oprawy. Zapewniamy profesjonalne nagłośnienie, eleganckie oświetlenie i prowadzenie przez doświadczonego konferansjera.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Kompleksowa obsługa techniczna i artystyczna gal firmowych oraz bankietów. Dbamy o każdy detal — od muzyki w tle po efektowne show świetlne podczas głównych momentów wieczoru.'
		}
	},
	{
		title: 'Jubileusz',
		subtitle: 'Świętuj ważne rocznice w wielkim stylu.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Jubileusz',
		path: '/uslugi/jubileusz',
		generalDescription: {
			title: 'Jubileusz — świętuj z klasą',
			description:
				'Rocznica firmy, wesela czy urodzin zasługuje na wyjątkową oprawę. Pomagamy tworzyć jubileusze, które łączą elegancję z dobrą zabawą i pozostają w pamięci gości na długo.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Dostarczamy kompleksową obsługę jubileuszową — nagłośnienie, oświetlenie, prowadzenie imprezy przez konferansjera i DJ-a. Każdy detal dopasowany do charakteru uroczystości.'
		}
	},
	{
		title: 'Konferencja',
		subtitle: 'Profesjonalna obsługa techniczna Twoich eventów biznesowych.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Konferencja',
		path: '/uslugi/konferencja',
		generalDescription: {
			title: 'Konferencja — technika, która nie zawodzi',
			description:
				'Profesjonalne konferencje wymagają niezawodnego nagłośnienia i oświetlenia. Dostarczamy sprzęt najwyższej jakości i zapewniamy pełną obsługę techniczną przez cały czas trwania wydarzenia.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Zapewniamy kompletną obsługę techniczną konferencji — mikrofony, system PA, ekrany, oświetlenie sceniczne. Nasz technik jest na miejscu przez cały czas, żebyś mógł skupić się na treści.'
		}
	},
	{
		title: 'Event marketingowy',
		subtitle: 'Eventy, które budują markę i angażują uczestników.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Event marketingowy',
		path: '/uslugi/event-marketingowy',
		generalDescription: {
			title: 'Event marketingowy — Twoja marka w centrum uwagi',
			description:
				'Eventy marketingowe to doskonała okazja do budowania wizerunku marki. Zapewniamy oprawę techniczną i artystyczną, która sprawi, że Twój event zostanie zapamiętany.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Od nagłośnienia i oświetlenia po DJ-a i animatorów — kompleksowo obsługujemy eventy marketingowe. Dopasowujemy oprawę do charakteru marki i oczekiwań uczestników.'
		}
	},
	// ── DJ & WODZIREJ ────────────────────────────────────────────────────────
	{
		title: 'DJ i Wodzirej',
		subtitle: 'Muzyka i prowadzenie, które rozkręcą każdą imprezę.',
		category: 'DJ & Wodzirej',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'DJ i Wodzirej',
		path: '/uslugi/dj-wodzirej',
		generalDescription: {
			title: 'DJ i Wodzirej — serce każdej imprezy',
			description:
				'Nasz DJ i wodzirej to duet, który potrafi rozkręcić każde towarzystwo. Znamy się na muzyce i na ludziach — parkiet nigdy nie będzie pusty.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Dobieramy muzykę do charakteru imprezy i preferencji gości. Wodzirej prowadzi zabawę, angażuje uczestników i dba o to, żeby każdy świetnie się bawił.'
		}
	},
	{
		title: 'DJ Sportowy & Speaker',
		subtitle: 'Dynamiczna oprawa muzyczna i komentarz na wydarzeniach sportowych.',
		category: 'DJ & Wodzirej',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'DJ Sportowy i Speaker sportowy',
		path: '/uslugi/dj-sportowy-speaker',
		generalDescription: {
			title: 'DJ Sportowy & Speaker — energia na każdym meczu',
			description:
				'Profesjonalna oprawa muzyczna i komentatorska na wydarzeniach sportowych. Budujemy atmosferę, która nakręca zawodników i angażuje kibiców przez cały czas trwania zawodów.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Zapewniamy DJ-a sportowego z muzyką dopasowaną do dynamiki meczu oraz speakera, który profesjonalnie prowadzi komentarz i zapowiedzi. Idealni na turnieje, ligi i eventy sportowe.'
		}
	},
	// ── TECHNIKA SCENICZNA ───────────────────────────────────────────────────
	{
		title: 'Technika sceniczna',
		subtitle: 'Profesjonalny sprzęt i obsługa na każdą okazję.',
		category: 'Technika sceniczna',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Technika sceniczna',
		path: '/uslugi/technika-sceniczna',
		generalDescription: {
			title: 'Technika sceniczna — jakość, która słychać i widać',
			description:
				'Dysponujemy profesjonalnym sprzętem nagłośnieniowym i oświetleniowym. Zajmujemy się jego transportem, rozstawieniem, obsługą podczas eventu oraz demontażem po zakończeniu.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Dostarczamy i obsługujemy kompletne systemy nagłośnienia i oświetlenia scenicznego. Nasi technicy czuwają nad sprzętem przez cały czas trwania wydarzenia.'
		}
	},
	{
		title: 'Wynajem sprzętu',
		subtitle: 'Sceny, nagłośnienie i oświetlenie na wynajem.',
		category: 'Technika sceniczna',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Wynajem sprzętu estradowego',
		path: '/uslugi/wynajem-sprzetu',
		generalDescription: {
			title: 'Wynajem sprzętu estradowego',
			description:
				'Wypożyczamy sceny, systemy nagłośnienia i oświetlenia estradowego. Sprzęt dostarczamy na miejsce i pomagamy w rozstawieniu — wszystko zależy od Twoich potrzeb.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Oferujemy wynajem mobilnych scen, systemów PA, reflektorów i pozostałego sprzętu estradowego. Możliwość wynajmu z lub bez obsługi technicznej.'
		}
	},
	// ── ATRAKCJE ─────────────────────────────────────────────────────────────
	{
		title: 'LubBar',
		subtitle: 'Przenośny bar mobilny — drink w każdym miejscu.',
		category: 'Atrakcje',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'LubBar przenośny bar',
		path: '/uslugi/lubbar',
		generalDescription: {
			title: 'LubBar — mobilny bar na Twoje wydarzenie',
			description:
				'LubBar to nasz przenośny bar, który dostarczamy w dowolne miejsce. Profesjonalna obsługa barmańska i szeroka oferta napojów — idealne uzupełnienie każdej imprezy.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Przywozimy kompletny mobilny bar wraz z barmanem i wyposażeniem. Oferujemy koktajle, drinki i napoje bezalkoholowe — wszystko dopasowane do charakteru eventu.'
		}
	},
	{
		title: 'Fotobudka',
		subtitle: 'Klasyczna fotobudka — pamiątka dla każdego gościa.',
		category: 'Atrakcje',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Fotobudka klasyczna',
		path: '/uslugi/fotobudka',
		generalDescription: {
			title: 'Fotobudka — pamiątki na całe życie',
			description:
				'Klasyczna fotobudka to atrakcja, którą pokochają wszyscy goście. Wydruki na miejscu, rekwizyty i możliwość personalizacji zdjęć — wszystko w cenie.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Dostarczamy i obsługujemy fotobudkę podczas eventu. Zapewniamy rekwizyty, natychmiastowy wydruk zdjęć i personalizację ramki pod motyw imprezy.'
		}
	},
	{
		title: 'Animatorzy',
		subtitle: 'Profesjonalni animatorzy dla dzieci i dorosłych.',
		category: 'Atrakcje',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Animatorzy',
		path: '/uslugi/animatorzy',
		generalDescription: {
			title: 'Animatorzy — zabawa gwarantowana',
			description:
				'Nasi animatorzy zadbają o to, żeby każdy gość — zarówno najmłodsi, jak i dorośli — świetnie się bawił. Profesjonalne programy animacyjne dopasowane do charakteru imprezy.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Prowadzimy animacje dla dzieci i dorosłych — gry, zabawy, konkursy i inne atrakcje. Wszystko po to, żeby Twoi goście mieli niezapomnianą zabawę.'
		}
	},
	// ── KONFERANSJER ─────────────────────────────────────────────────────────
	{
		title: 'Konferansjer',
		subtitle: 'Profesjonalne prowadzenie każdego wydarzenia.',
		category: 'Konferansjer',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Konferansjer',
		path: '/uslugi/konferansjer',
		generalDescription: {
			title: 'Konferansjer — głos Twojego eventu',
			description:
				'Doświadczony konferansjer to klucz do udanego wydarzenia. Profesjonalne prowadzenie programu, ogłaszanie gości i budowanie atmosfery — wszystko w jednych rękach.'
		},
		sidelDescription: {
			title: 'Co robimy?',
			description:
				'Nasz konferansjer prowadzi event zgodnie z ustalonym scenariuszem, dba o płynność programu i angażuje publiczność. Doskonale sprawdza się na galach, konferencjach i uroczystościach.'
		}
	}
];
