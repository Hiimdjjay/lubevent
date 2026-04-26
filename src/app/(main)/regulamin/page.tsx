import { Wrapper } from '@/components/UI/Wrapper';

export default function TermsOfService() {
	return (
		<main className='py-20 md:py-30 lg:py-40'>
			<Wrapper>
				<div className='flex flex-col gap-10 max-w-3xl'>
					<div className='flex flex-col gap-3'>
						<h1 className='text-4xl font-bold'>Regulamin korzystania z serwisu</h1>
						<p className='text-black/50'>Ostatnia aktualizacja: 1 stycznia 2025</p>
					</div>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>1. Postanowienia ogólne</h2>
						<p className='text-black/70 leading-relaxed'>
							Niniejszy regulamin określa zasady korzystania z serwisu internetowego lubevent.pl, prowadzonego
							przez Lubevent Dominik Berwertz z siedzibą w Lublinie. Korzystanie z serwisu oznacza akceptację
							niniejszego regulaminu.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>2. Zakres usług</h2>
						<p className='text-black/70 leading-relaxed'>
							Serwis lubevent.pl służy do prezentacji oferty usług eventowych oraz umożliwia kontakt z firmą w
							celu uzyskania wyceny lub informacji. Serwis nie stanowi sklepu internetowego ani platformy
							sprzedażowej.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>3. Obowiązki użytkownika</h2>
						<p className='text-black/70 leading-relaxed'>Użytkownik zobowiązuje się do:</p>
						<ul className='flex flex-col gap-2 list-disc list-inside text-black/70'>
							<li>Korzystania z serwisu zgodnie z obowiązującym prawem</li>
							<li>Podawania prawdziwych danych w formularzach kontaktowych</li>
							<li>Nienaruszania praw własności intelektualnej właściciela serwisu</li>
							<li>Niepodejmowania działań mogących zakłócić funkcjonowanie serwisu</li>
						</ul>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>4. Własność intelektualna</h2>
						<p className='text-black/70 leading-relaxed'>
							Wszelkie treści zamieszczone w serwisie — teksty, zdjęcia, grafiki, logotypy — stanowią własność
							Lubevent Dominik Berwertz lub są wykorzystywane za zgodą właścicieli praw autorskich.
							Kopiowanie, reprodukowanie lub rozpowszechnianie tych treści bez zgody właściciela jest
							zabronione.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>5. Odpowiedzialność</h2>
						<p className='text-black/70 leading-relaxed'>
							Właściciel serwisu dokłada wszelkich starań, aby informacje zamieszczone w serwisie były
							aktualne i rzetelne. Nie ponosi jednak odpowiedzialności za ewentualne błędy, przerwy w
							działaniu serwisu ani szkody wynikłe z korzystania z serwisu.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>6. Formularze kontaktowe</h2>
						<p className='text-black/70 leading-relaxed'>
							Wypełnienie formularza kontaktowego lub wyceny nie stanowi zawarcia umowy. Jest jedynie wyrazem
							zainteresowania ofertą i podstawą do nawiązania kontaktu przez przedstawiciela firmy.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>7. Zmiany regulaminu</h2>
						<p className='text-black/70 leading-relaxed'>
							Właściciel serwisu zastrzega sobie prawo do zmiany niniejszego regulaminu. Zmiany wchodzą w
							życie z chwilą ich opublikowania w serwisie. Dalsze korzystanie z serwisu po wprowadzeniu zmian
							oznacza ich akceptację.
						</p>
					</section>

					<section className='flex flex-col gap-4'>
						<h2 className='text-2xl font-semibold'>8. Kontakt</h2>
						<p className='text-black/70 leading-relaxed'>
							W sprawach związanych z regulaminem prosimy o kontakt:
							<br />
							E-mail: kontakt@lubevent.pl
						</p>
					</section>
				</div>
			</Wrapper>
		</main>
	);
}
