import { Wrapper } from '@/components/UI/Wrapper';
import { SubpageHero } from '@/components/Sections/PrivacyPolicy&Terms/SubpageHero';
import { PolicySection } from '@/components/Sections/PrivacyPolicy&Terms/PolicySection';
import { PolicySectionWithList } from '@/components/Sections/PrivacyPolicy&Terms/PolicySectionWithList';
import { TERMS_USER_OBLIGATIONS } from '@/constants/policyData';

export default function TermsOfService() {
	return (
		<main className='pt-30 pb-10 md:pt-45 lg:pt-60'>
			<Wrapper marginForText>
				<div className='flex flex-col gap-10 max-w-3xl'>
					<SubpageHero title='Regulamin korzystania z serwisu' lastUpdated='02 maj 2026' />
					<div className='flex flex-col gap-10 p-5 rounded-2xl bg-white  md:p-8 lg:p-10'>
						<PolicySection title='1. Postanowienia ogólne'>
							Niniejszy regulamin określa zasady korzystania z serwisu internetowego lubevent.pl, prowadzonego
							przez Lubevent Dominik Berwertz z siedzibą w Lublinie. Korzystanie z serwisu oznacza akceptację
							niniejszego regulaminu.
						</PolicySection>

						<PolicySection title='2. Zakres usług'>
							Serwis lubevent.pl służy do prezentacji oferty usług eventowych oraz umożliwia kontakt z firmą w
							celu uzyskania wyceny lub informacji. Serwis nie stanowi sklepu internetowego ani platformy
							sprzedażowej.
						</PolicySection>

						<PolicySectionWithList title='3. Obowiązki użytkownika' items={TERMS_USER_OBLIGATIONS}>
							Użytkownik zobowiązuje się do:
						</PolicySectionWithList>

						<PolicySection title='4. Własność intelektualna'>
							Wszelkie treści zamieszczone w serwisie — teksty, zdjęcia, grafiki, logotypy — stanowią własność
							Lubevent Dominik Berwertz lub są wykorzystywane za zgodą właścicieli praw autorskich.
							Kopiowanie, reprodukowanie lub rozpowszechnianie tych treści bez zgody właściciela jest
							zabronione.
						</PolicySection>

						<PolicySection title='5. Odpowiedzialność'>
							Właściciel serwisu dokłada wszelkich starań, aby informacje zamieszczone w serwisie były
							aktualne i rzetelne. Nie ponosi jednak odpowiedzialności za ewentualne błędy, przerwy w
							działaniu serwisu ani szkody wynikłe z korzystania z serwisu.
						</PolicySection>

						<PolicySection title='6. Formularze kontaktowe'>
							Wypełnienie formularza kontaktowego lub wyceny nie stanowi zawarcia umowy. Jest jedynie wyrazem
							zainteresowania ofertą i podstawą do nawiązania kontaktu przez przedstawiciela firmy.
						</PolicySection>

						<PolicySection title='7. Zmiany regulaminu'>
							Właściciel serwisu zastrzega sobie prawo do zmiany niniejszego regulaminu. Zmiany wchodzą w
							życie z chwilą ich opublikowania w serwisie. Dalsze korzystanie z serwisu po wprowadzeniu zmian
							oznacza ich akceptację.
						</PolicySection>

						<PolicySection title='8. Kontakt'>
							W sprawach związanych z regulaminem prosimy o kontakt:
							<br />
							E-mail: kontakt@lubevent.pl
						</PolicySection>
					</div>
				</div>
			</Wrapper>
		</main>
	);
}
