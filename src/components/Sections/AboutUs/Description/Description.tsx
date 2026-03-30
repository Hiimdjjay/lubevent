import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Cards } from './Cards';
import { Wrapper } from '@/components/UI/Wrapper';
import { Subtitle } from '@/components/UI/Subtitle';

export function Description() {
	return (
		<section className='py-20 md:py-25 lg:py-30'>
			<Wrapper>
				<div className='flex flex-col items-center gap-10'>
					<div className='flex flex-col items-center gap-5 md:gap-7.5 lg:w-[85%]'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Kim jesteśmy</SectionLabel>
						<SectionTitle textCenter smallFont>
							Jesteśmy czymś więcej niż agencją — jesteśmy Twoim partnerem w tworzeniu
							wydarzeń niezapomnianych, dopracowanych i wolnych od stresu.
						</SectionTitle>
						<Subtitle textCenter textSize='md:text-lg lg:text-xl'>
							Wychodzimy poza organizację imprez, oferując wsparcie i doświadczenie, które
							sprawia, że każde wydarzenie przebiega płynnie, profesjonalnie i bez
							niespodzianek od początku do końca.
						</Subtitle>
					</div>
					<Cards />
				</div>
			</Wrapper>
		</section>
	);
}
