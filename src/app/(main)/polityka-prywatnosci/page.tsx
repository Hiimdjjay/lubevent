import { Wrapper } from '@/components/UI/Wrapper';

export default function PrivacyPolicy() {
	return (
		<main className='py-20 md:py-30'>
			<Wrapper>
				<div className='flex flex-col gap-10 max-w-3xl'>
					<div className='flex flex-col gap-3'>
						<h1 className='text-4xl font-bold'>Polityka prywatności</h1>
						<p className='text-black/50'>Ostatnia aktualizacja: 1 stycznia 2025</p>
					</div>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>1. Administrator danych osobowych</h2>
						<p className='text-black/70 leading-relaxed'>
							Administratorem Twoich danych osobowych jest Lubevent Dominik Berwertz, z siedzibą w Lublinie.
							W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami pod adresem
							e-mail: kontakt@lubevent.pl
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>2. Jakie dane zbieramy</h2>
						<p className='text-black/70 leading-relaxed'>
							Zbieramy dane, które podajesz dobrowolnie wypełniając formularz kontaktowy lub wyceny:
						</p>
						<ul className='flex flex-col gap-2 list-disc list-inside text-black/70'>
							<li>Imię i nazwisko</li>
							<li>Adres e-mail</li>
							<li>Numer telefonu</li>
							<li>Informacje o planowanym wydarzeniu</li>
						</ul>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>3. Cel przetwarzania danych</h2>
						<p className='text-black/70 leading-relaxed'>
							Twoje dane przetwarzamy wyłącznie w celu odpowiedzi na zapytanie, przygotowania wyceny usług
							oraz realizacji umowy. Dane nie są przekazywane podmiotom trzecim ani wykorzystywane w celach
							marketingowych bez Twojej zgody.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>4. Podstawa prawna</h2>
						<p className='text-black/70 leading-relaxed'>
							Przetwarzanie danych odbywa się na podstawie art. 6 ust. 1 lit. b RODO — przetwarzanie jest
							niezbędne do wykonania umowy lub podjęcia działań przed jej zawarciem, a także na podstawie
							art. 6 ust. 1 lit. a RODO — zgody osoby, której dane dotyczą.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>5. Okres przechowywania danych</h2>
						<p className='text-black/70 leading-relaxed'>
							Dane przechowujemy przez okres niezbędny do realizacji celu, w jakim zostały zebrane, a po
							jego zakończeniu przez czas wymagany przepisami prawa (np. przepisami podatkowymi).
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>6. Twoje prawa</h2>
						<p className='text-black/70 leading-relaxed'>Przysługują Ci następujące prawa:</p>
						<ul className='flex flex-col gap-2 list-disc list-inside text-black/70'>
							<li>Prawo dostępu do swoich danych</li>
							<li>Prawo do sprostowania danych</li>
							<li>Prawo do usunięcia danych</li>
							<li>Prawo do ograniczenia przetwarzania</li>
							<li>Prawo do przenoszenia danych</li>
							<li>Prawo do cofnięcia zgody w dowolnym momencie</li>
						</ul>
						<p className='text-black/70 leading-relaxed'>
							Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem: kontakt@lubevent.pl
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>7. Pliki cookies</h2>
						<p className='text-black/70 leading-relaxed'>
							Strona może wykorzystywać pliki cookies wyłącznie w celu poprawnego funkcjonowania serwisu.
							Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>8. Kontakt</h2>
						<p className='text-black/70 leading-relaxed'>
							W razie pytań dotyczących przetwarzania danych osobowych skontaktuj się z nami:
							<br />
							E-mail: kontakt@lubevent.pl
						</p>
					</section>
				</div>
			</Wrapper>
		</main>
	);
}
