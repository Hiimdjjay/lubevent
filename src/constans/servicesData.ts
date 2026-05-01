export type ServiceData = {
	title: string;
	subtitle: string;
	category: string;
	image: string;
	alt: string;
	path: string;
	generalDescription: string;
	sideDescription: string;
	eventTerms: string[];
};

export const servicesData: ServiceData[] = [
	// ── UROCZYSTOŚCI ─────────────────────────────────────────────────────────
	{
		title: 'Wesela & Studniówki',
		subtitle: 'Kompleksowa oprawa muzyczna i techniczna Waszego wyjątkowego wieczoru.',
		category: 'Uroczystości',
		image: '/Photos/sala-weselna.png',
		alt: 'Wesele i Studniówka',
		path: '/uslugi/wesele',
		generalDescription:
			'Wesele to jedno z najważniejszych wydarzeń w życiu — dzień, który zapamiętają wszyscy uczestnicy na długie lata. Wiemy o tym doskonale, dlatego podchodzimy do każdej realizacji z pełnym zaangażowaniem i dbałością o każdy detal, od pierwszego spotkania aż do ostatniego tańca.\n\nStudniówka to z kolei jeden z tych wieczorów, który na zawsze pozostaje w pamięci — ostatnia wspólna impreza przed maturą, pełna emocji, muzyki i niezapomnianych wspomnień. Niezależnie od tego, czy organizujesz wesele czy studniówkę, zawsze zaczynamy od rozmowy, podczas której dokładnie poznajemy Wasze preferencje i wizję idealnego wieczoru.',
		sideDescription:
			'Kompleksowo zajmujemy się oprawą wesela lub studniówki — od rozstawienia sprzętu, przez prowadzenie wieczoru, aż do ostatniego tańca.',
		eventTerms: [
			'Przyjeżdżamy odpowiednio wcześniej i jesteśmy elastyczni przez cały wieczór.',
			'Zapewniamy profesjonalne nagłośnienie i oświetlenie dostosowane do sali.',
			'Prowadzimy zabawy, oczepiny i atrakcje — parkiet nigdy nie będzie pusty.'
		]
	},
	{
		title: '18-nastki',
		subtitle: 'Wyjątkowe urodziny, które zapamiętasz na całe życie.',
		category: 'Uroczystości',
		image: '/Photos/Happy-woman.png',
		alt: '18-nastka',
		path: '/uslugi/18-nastka',
		generalDescription:
			'Osiemnaste urodziny to symboliczne wejście w dorosłość — wyjątkowy moment, który zasługuje na wyjątkową oprawę. To święto, które powinno zostać zapamiętane na całe życie — zarówno przez solenizanta, jak i przez wszystkich zaproszonych gości.\n\nRozumiemy, że każda osiemnastka jest inna — jedni marzą o kameralnej imprezie z bliskimi, inni o wielkiej zabawie z kilkudziesięcioma gośćmi. Dostosowujemy nasze usługi do każdej wizji i każdego budżetu, dbając o to, żeby efekt końcowy przeszedł najśmielsze oczekiwania.',
		sideDescription:
			'Zajmujemy się pełną oprawą imprezy urodzinowej — nagłośnienie, oświetlenie, DJ i inne atrakcje dopasowane do charakteru wieczoru.',
		eventTerms: [
			'Muzyka dobrana do gustu solenizanta i jego gości.',
			'Możliwość dodania fotobudki, animatorów lub LubBaru.',
			'Elastyczna oferta dopasowana do każdego budżetu i wielkości imprezy.'
		]
	},
	{
		title: 'Imprezy tematyczne',
		subtitle: 'Twój pomysł, nasza realizacja — bez ograniczeń.',
		category: 'Uroczystości',
		image: '/Photos/Full-chat-GPT.png',
		alt: 'Impreza tematyczna',
		path: '/uslugi/impreza-tematyczna',
		generalDescription:
			'Imprezy tematyczne to nasza specjalność — uwielbiamy wyzwania i niestandardowe realizacje wymagające kreatywnego podejścia. Lata 80., maskarada, hawajskie lato, wieczór w stylu filmowym — cokolwiek sobie wymarzysz, my to zrealizujemy z pełnym profesjonalizmem.\n\nKluczem do udanej imprezy tematycznej jest spójność — muzyka, oświetlenie i zachowanie prowadzącego muszą budować jeden klimat. Przed każdą realizacją spotykamy się z organizatorem, żeby dokładnie omówić wizję i zaplanować każdy element oprawy.',
		sideDescription:
			'Dostosowujemy oprawę muzyczną i oświetlenie do wybranego motywu imprezy — każdy detal buduje spójny klimat wieczoru.',
		eventTerms: [
			'Muzyka i oświetlenie w 100% dopasowane do wybranego tematu.',
			'Prowadzący wchodzi w charakter imprezy i angażuje gości.',
			'Doradzamy i pomagamy w wyborze motywu jeśli potrzebujesz inspiracji.'
		]
	},
	// ── GALE I JUBILEUSZE ────────────────────────────────────────────────────
	{
		title: 'Gale & Bankiety',
		subtitle: 'Elegancka oprawa dla prestiżowych wydarzeń firmowych.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Corporate-event-ChatGPT.png',
		alt: 'Gala i bankiet',
		path: '/uslugi/gala-bankiet',
		generalDescription:
			'Gale i bankiety to wydarzenia, które wymagają bezbłędnej oprawy — każdy detal musi być dopracowany, a atmosfera musi odzwierciedlać rangę uroczystości. Rozumiemy, że tego typu wydarzenia są wizytówką firmy, dlatego podchodzimy do każdej realizacji z najwyższą starannością.\n\nZapewniamy profesjonalne nagłośnienie gwarantujące doskonałą jakość dźwięku, eleganckie oświetlenie budujące odpowiedni nastrój oraz doświadczonego konferansjera, który sprawnie poprowadzi cały program wieczoru.',
		sideDescription:
			'Kompleksowa obsługa techniczna i artystyczna gal firmowych oraz bankietów — od pierwszej nuty do ostatniego oklasku.',
		eventTerms: [
			'Profesjonalne nagłośnienie i oświetlenie dostosowane do charakteru sali.',
			'Doświadczony konferansjer prowadzący program wieczoru.',
			'Oprawa muzyczna na żywo lub DJ — w zależności od preferencji.'
		]
	},
	{
		title: 'Jubileusze',
		subtitle: 'Świętuj ważne rocznice w wielkim stylu.',
		category: 'Gale i Jubileusze',
		image: '/Photos/wedding-toast.png',
		alt: 'Jubileusz',
		path: '/uslugi/jubileusz',
		generalDescription:
			'Jubileusz to wyjątkowy moment — świętowanie ważnej rocznicy zasługuje na oprawę, która podkreśli wagę tej chwili i pozostanie w pamięci uczestników na długie lata. Niezależnie czy świętujecie rocznicę ślubu, jubileusz firmy czy inną ważną datę, pomagamy stworzyć uroczystość dokładnie taką, jak sobie wyobrażacie.\n\nŁączymy elegancję z ciepłą atmosferą, profesjonalizm z autentycznymi emocjami. Dbamy o to, żeby oprawa muzyczna była odpowiednio dobrana — elegancka podczas oficjalnej części i rozkręcona podczas zabawy.',
		sideDescription:
			'Tworzymy jubileusze, które łączą podniosłą atmosferę uroczystości z dobrą zabawą i niezapomnianymi wspomnieniami.',
		eventTerms: [
			'Program wieczoru dopasowany do charakteru i rangi jubileuszu.',
			'Muzyka odpowiednia na każdy moment — od oficjalnej części po zabawę.',
			'Konferansjer lub wodzirej dbający o płynność całego wieczoru.'
		]
	},
	{
		title: 'Konferencje',
		subtitle: 'Profesjonalna obsługa techniczna Twoich eventów biznesowych.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Lublin-conference.jpg',
		alt: 'Konferencja',
		path: '/uslugi/konferencja',
		generalDescription:
			'Profesjonalna konferencja wymaga niezawodnej techniki — awaria nagłośnienia podczas ważnej prezentacji jest scenariuszem, którego nikt nie chce doświadczyć. Dlatego dostarczamy wyłącznie sprawdzony sprzęt najwyższej jakości i zapewniamy pełną obsługę techniczną przez cały czas trwania wydarzenia.\n\nNasi technicy pojawiają się na miejscu z odpowiednim wyprzedzeniem, żeby dokładnie sprawdzić i skonfigurować każdy element systemu. Obsługujemy zarówno małe konferencje w salach hotelowych, jak i duże eventy na kilkaset osób.',
		sideDescription:
			'Zapewniamy kompletną obsługę techniczną konferencji — sprzęt, konfiguracja i technik na miejscu przez cały czas trwania wydarzenia.',
		eventTerms: [
			'Mikrofony, system PA, ekrany i oświetlenie sceniczne w jednym pakiecie.',
			'Technik na miejscu przez cały czas — zero stresu o sprzęt.',
			'Obsługa konferencji od 20 do kilkuset uczestników.'
		]
	},
	{
		title: 'Eventy marketingowe',
		subtitle: 'Eventy, które budują markę i angażują uczestników.',
		category: 'Gale i Jubileusze',
		image: '/Photos/Corporate-event-2-ChatGPT.png',
		alt: 'Event marketingowy',
		path: '/uslugi/event-marketingowy',
		generalDescription:
			'Eventy marketingowe to jedno z najskuteczniejszych narzędzi budowania wizerunku marki — ale tylko wtedy, gdy są dobrze zrealizowane. Do każdej realizacji podchodzimy z pełną odpowiedzialnością, wiedząc że nieudany event może zaszkodzić wizerunkowi bardziej niż jego brak.\n\nRozumiemy, że event musi przede wszystkim realizować cele biznesowe klienta i angażować uczestników w sposób, który zostanie z nimi długo po zakończeniu. Nasze doświadczenie pozwala nam dostarczać oprawę idealnie wpisującą się w charakter każdej marki.',
		sideDescription:
			'Od nagłośnienia i oświetlenia po animatorów — kompleksowo obsługujemy eventy marketingowe, dopasowując oprawę do charakteru marki.',
		eventTerms: [
			'Oprawa techniczna i artystyczna dopasowana do identyfikacji marki.',
			'DJ, animatorzy i dodatkowe atrakcje angażujące uczestników.',
			'Doświadczenie w eventach B2B i B2C dla firm różnych branż.'
		]
	},
	// ── DJ & WODZIREJ ────────────────────────────────────────────────────────
	{
		title: 'DJ & Wodzirej',
		subtitle: 'Muzyka i prowadzenie, które rozkręcą każdą imprezę.',
		category: 'DJ & Wodzirej',
		image: '/Photos/Concert-unsplash.png',
		alt: 'DJ i Wodzirej',
		path: '/uslugi/dj-wodzirej',
		generalDescription:
			'Dobry DJ i wodzirej to absolutna podstawa udanej imprezy — to oni nadają jej rytm, budują atmosferę i sprawiają, że goście bawią się do białego rana. Nasz duet to doświadczeni profesjonaliści, którzy doskonale rozumieją jak czytać nastroje sali.\n\nZnamy się na muzyce — od klasycznych przebojów przez disco polo, po elektronikę i hity z list przebojów — i zawsze dobieramy repertuar pod konkretnych gości. Wodzirej angażuje uczestników, prowadzi zabawy i konkursy, dbając o to, żeby żaden gość nie czuł się pominięty.',
		sideDescription:
			'Nasz DJ i wodzirej to duet, który potrafi rozkręcić każde towarzystwo — muzyka dobrana idealnie, parkiet zawsze pełny.',
		eventTerms: [
			'Repertuar ustalamy wspólnie przed imprezą — Twoje preferencje są priorytetem.',
			'Wodzirej prowadzi zabawy i animacje angażujące wszystkich gości.',
			'Doświadczenie na weselach, studniówkach, osiemnastkach i eventach firmowych.'
		]
	},
	{
		title: 'DJ Sportowy & Speaker',
		subtitle: 'Dynamiczna oprawa muzyczna i komentarz na wydarzeniach sportowych.',
		category: 'DJ & Wodzirej',
		image: '/Photos/Singer-unsplash.jpg',
		alt: 'DJ Sportowy i Speaker sportowy',
		path: '/uslugi/dj-sportowy-speaker',
		generalDescription:
			'Oprawa muzyczna na wydarzeniach sportowych wymaga doskonałego wyczucia rytmu gry, błyskawicznych reakcji i umiejętności budowania napięcia w kluczowych momentach zawodów. Nasz DJ sportowy i speaker to profesjonaliści z doświadczeniem w obsłudze turniejów i lig różnego szczebla.\n\nDJ dobiera muzykę dopasowaną do dynamiki meczu — energetyczną podczas rozgrzewki i świętującą przy bramkach. Speaker prowadzi profesjonalny komentarz i utrzymuje zaangażowanie publiczności przez cały czas trwania zawodów.',
		sideDescription:
			'Budujemy atmosferę na wydarzeniach sportowych — muzyka i komentarz, które nakręcają zawodników i angażują kibiców.',
		eventTerms: [
			'Muzyka dopasowana do dynamiki meczu w czasie rzeczywistym.',
			'Speaker z profesjonalnym komentarzem i zapowiedziami zawodników.',
			'Obsługa turniejów, rozgrywek ligowych i eventów sportowych każdej skali.'
		]
	},
	// ── TECHNIKA SCENICZNA ───────────────────────────────────────────────────
	{
		title: 'Technika sceniczna',
		subtitle: 'Profesjonalny sprzęt i obsługa na każdą okazję.',
		category: 'Technika sceniczna',
		image: '/Photos/Premiere.png',
		alt: 'Technika sceniczna',
		path: '/uslugi/technika-sceniczna',
		generalDescription:
			'Profesjonalna technika sceniczna to fundament każdego udanego wydarzenia — bez odpowiedniego nagłośnienia i oświetlenia nawet najlepszy artysta nie wypadnie tak, jak powinien. Dysponujemy nowoczesnym sprzętem najwyższej klasy, sprawdzającym się zarówno na kameralnych jak i plenerowych wydarzeniach.\n\nZajmujemy się transportem sprzętu na miejsce, profesjonalnym rozstawieniem i konfiguracją, obsługą podczas całego eventu oraz sprawnym demontażem po zakończeniu. Pracujemy z dbałością o bezpieczeństwo uczestników i zgodność z obowiązującymi przepisami.',
		sideDescription:
			'Dostarczamy i obsługujemy kompletne systemy nagłośnienia i oświetlenia scenicznego — nasi technicy czuwają przez cały czas trwania wydarzenia.',
		eventTerms: [
			'Profesjonalny sprzęt nagłośnieniowy i oświetleniowy najwyższej klasy.',
			'Transport, rozstawienie, obsługa i demontaż w jednym pakiecie.',
			'Technicy na miejscu przez cały czas — pełne bezpieczeństwo realizacji.'
		]
	},
	{
		title: 'Wynajem sprzętu',
		subtitle: 'Sceny, nagłośnienie i oświetlenie na wynajem.',
		category: 'Technika sceniczna',
		image: '/Photos/conference-2-unsplash.png',
		alt: 'Wynajem sprzętu estradowego',
		path: '/uslugi/wynajem-sprzetu',
		generalDescription:
			'Wynajem profesjonalnego sprzętu estradowego to idealne rozwiązanie dla organizatorów dysponujących własnym personelem technicznym lub szukających elastycznej opcji dopasowanej do budżetu. Nasz park maszynowy obejmuje szeroką gamę sprzętu — od kompaktowych systemów nagłośnieniowych po potężne systemy liniowe i zaawansowane systemy oświetleniowe z DMX.\n\nKażdy sprzęt przed wypożyczeniem przechodzi szczegółowy przegląd techniczny. Oferujemy wynajem z dostawą i odbiorem lub możliwość samodzielnego odbioru — na życzenie zapewniamy technika do obsługi podczas eventu.',
		sideDescription:
			'Wypożyczamy profesjonalny sprzęt estradowy z dostawą na miejsce — możliwość wynajmu z lub bez obsługi technicznej.',
		eventTerms: [
			'Szeroki park maszynowy — nagłośnienie, oświetlenie, sceny mobilne.',
			'Każdy sprzęt przed wypożyczeniem przechodzi przegląd techniczny.',
			'Dostawa i odbiór lub samodzielny odbiór — dopasuj opcję do siebie.'
		]
	},
	// ── ATRAKCJE ─────────────────────────────────────────────────────────────
	{
		title: 'LubBar',
		subtitle: 'Przenośny bar mobilny — drink w każdym miejscu.',
		category: 'Atrakcje',
		image: '/Photos/Group-of-people-Chat-GPT.png',
		alt: 'LubBar przenośny bar',
		path: '/uslugi/lubbar',
		generalDescription:
			'LubBar to nasza wyjątkowa propozycja dla organizatorów, którzy chcą zaskoczyć gości czymś więcej niż standardowym cateringiem. Nasz mobilny bar dostarczamy w dowolne miejsce — do sali weselnej, na plener, do biura na event firmowy.\n\nProfesjonalni barmani przygotują koktajle i drinki z najwyższej jakości składników, tworząc widowiskowe show barmańskie, które stanie się atrakcją wieczoru. Nasze menu możemy w pełni spersonalizować — dostosować ofertę do charakteru eventu i preferencji gości.',
		sideDescription:
			'Mobilny bar dostarczamy w dowolne miejsce — profesjonalny barman, pyszne koktajle i show barmańskie w jednym pakiecie.',
		eventTerms: [
			'Pełne menu koktajli alkoholowych i bezalkoholowych.',
			'Widowiskowe show barmańskie jako atrakcja wieczoru.',
			'Menu w pełni spersonalizowane pod motyw i charakter imprezy.'
		]
	},
	{
		title: 'Fotobudka',
		subtitle: 'Klasyczna fotobudka — pamiątka dla każdego gościa.',
		category: 'Atrakcje',
		image: '/Photos/newlyweds-unsplash.png',
		alt: 'Fotobudka klasyczna',
		path: '/uslugi/fotobudka',
		generalDescription:
			'Fotobudka to atrakcja, którą pokochają absolutnie wszyscy goście — od najmłodszych po najstarszych. W dobie wszechobecnych smartfonów wyjątkowy wydruk staje się prawdziwą pamiątką, którą goście przechowują latami.\n\nNasza fotobudka wyposażona jest w wysokiej jakości aparat i błyskawiczną drukarkę dostarczającą zdjęcia w ciągu sekund. Każdą realizację poprzedza personalizacja ramki pod motyw imprezy — możemy dodać datę, imiona lub logo firmy.',
		sideDescription:
			'Dostarczamy i obsługujemy fotobudkę podczas eventu — rekwizyty, natychmiastowy wydruk i personalizowana ramka w cenie.',
		eventTerms: [
			'Wydruk zdjęć w ciągu kilku sekund — pamiątka od razu w rękach gości.',
			'Bogaty zestaw rekwizytów gwarantujący nieograniczoną zabawę.',
			'Ramka personalizowana pod motyw imprezy — data, imiona, logo firmy.'
		]
	},
	{
		title: 'Animatorzy',
		subtitle: 'Profesjonalni animatorzy dla dzieci i dorosłych.',
		category: 'Atrakcje',
		image: '/Photos/Group-of-people-ChatGPT.png',
		alt: 'Animatorzy',
		path: '/uslugi/animatorzy',
		generalDescription:
			'Profesjonalni animatorzy to gwarancja tego, że na Twojej imprezie nie będzie nudnych chwil — niezależnie od wieku i charakteru gości. Nasi animatorzy to energetyczni i doświadczeni profesjonaliści, którzy doskonale wiedzą jak angażować uczestników.\n\nOferujemy animacje dla dzieci — zabawy, malowanie buzi i konkursy z nagrodami. Dla dorosłych przygotowujemy quizy, gry towarzyskie i inne formy aktywnej rozrywki, które przełamują lody i integrują towarzystwo.',
		sideDescription:
			'Animacje dla dzieci i dorosłych — zabawy, konkursy i gry towarzyskie, które sprawią że każdy gość świetnie się bawi.',
		eventTerms: [
			'Animacje dla dzieci — zabawy, malowanie buzi, konkursy z nagrodami.',
			'Integracja dla dorosłych — quizy, gry i zabawy przełamujące lody.',
			'Program dostosowany do wieku uczestników i charakteru imprezy.'
		]
	},
	// ── KONFERANSJER ─────────────────────────────────────────────────────────
	{
		title: 'Konferansjer',
		subtitle: 'Profesjonalne prowadzenie każdego wydarzenia.',
		category: 'Konferansjer',
		image: '/Photos/Conference-guy.png',
		alt: 'Konferansjer',
		path: '/uslugi/konferansjer',
		generalDescription:
			'Doświadczony konferansjer to jeden z kluczowych elementów udanego wydarzenia — osoba, która spaja cały program w jedną całość i sprawia, że każdy gość czuje się częścią wyjątkowej uroczystości. To profesjonalista z doświadczeniem w prowadzeniu wydarzeń od kameralnych uroczystości po duże konferencje biznesowe.\n\nPosiada naturalną charyzmę, doskonałą dykcję i umiejętność improwizacji. Przed każdym wydarzeniem dokładnie poznaje program i preferencje organizatora, żeby jego prowadzenie było w pełni spersonalizowane i idealnie dopasowane do charakteru eventu.',
		sideDescription:
			'Nasz konferansjer prowadzi event zgodnie z ustalonym scenariuszem — dba o płynność programu i angażuje publiczność przez cały wieczór.',
		eventTerms: [
			'Prowadzenie zgodne z ustalonym scenariuszem i planem wieczoru.',
			'Naturalna charyzma i doskonała dykcja — profesjonalizm na każdym kroku.',
			'Sprawdza się na galach, weselach, konferencjach i uroczystościach każdego rodzaju.'
		]
	}
];


