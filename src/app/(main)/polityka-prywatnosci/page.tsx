import { Wrapper } from '@/components/UI/Wrapper';
import { SubpageHero } from '@/components/Sections/PrivacyPolicy&Terms/SubpageHero';
import { PolicySection } from '@/components/Sections/PrivacyPolicy&Terms/PolicySection';
import { PolicySectionWithList } from '@/components/Sections/PrivacyPolicy&Terms/PolicySectionWithList';
import { PRIVACY_COLLECTED_DATA, PRIVACY_USER_RIGHTS } from '@/constants/policyData';

export default function PrivacyPolicy() {
	return (
		<main className='pt-30 pb-10 md:pt-45 lg:pt-60'>
			<Wrapper marginForText>
				<div className='flex flex-col gap-10 max-w-3xl '>
					<SubpageHero title='Polityka prywatności' lastUpdated='02 maj 2026' />
					<div className='flex flex-col gap-10 p-5 rounded-2xl bg-white  md:p-8 lg:p-10'>
						<PolicySection title='1. Administrator danych osobowych'>
							Administratorem Twoich danych osobowych jest Lubevent Dominik Berwertz, z siedzibą w Lublinie. W
							sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami pod adresem e-mail:
							biuro@lubevent.pl
						</PolicySection>

						<PolicySectionWithList title='2. Jakie dane zbieramy' items={PRIVACY_COLLECTED_DATA}>
							Zbieramy dane, które podajesz dobrowolnie wypełniając formularz kontaktowy lub wyceny:
						</PolicySectionWithList>

						<PolicySection title='3. Cel przetwarzania danych'>
							Twoje dane przetwarzamy wyłącznie w celu odpowiedzi na zapytanie, przygotowania wyceny usług
							oraz realizacji umowy. Dane nie są przekazywane podmiotom trzecim ani wykorzystywane w celach
							marketingowych bez Twojej zgody.
						</PolicySection>

						<PolicySection title='4. Podstawa prawna'>
							Przetwarzanie danych odbywa się na podstawie art. 6 ust. 1 lit. b RODO — przetwarzanie jest
							niezbędne do wykonania umowy lub podjęcia działań przed jej zawarciem, a także na podstawie art.
							6 ust. 1 lit. a RODO — zgody osoby, której dane dotyczą.
						</PolicySection>

						<PolicySection title='5. Okres przechowywania danych'>
							Dane przechowujemy przez okres niezbędny do realizacji celu, w jakim zostały zebrane, a po jego
							zakończeniu przez czas wymagany przepisami prawa (np. przepisami podatkowymi).
						</PolicySection>

						<PolicySectionWithList
							title='6. Twoje prawa'
							items={PRIVACY_USER_RIGHTS}
							footer='Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem: kontakt@lubevent.pl'>
							Przysługują Ci następujące prawa:
						</PolicySectionWithList>

						<PolicySection title='7. Pliki cookies'>
							Strona może wykorzystywać pliki cookies wyłącznie w celu poprawnego funkcjonowania serwisu.
							Możesz zarządzać ustawieniami cookies w swojej przeglądarce.
						</PolicySection>

						<PolicySection title='8. Kontakt'>
							W razie pytań dotyczących przetwarzania danych osobowych skontaktuj się z nami:
							<br />
							E-mail: biuro@lubevent.pl
						</PolicySection>
					</div>
				</div>
			</Wrapper>
		</main>
	);
}
