import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { AboutUsCardList } from './AboutsUsCardList';
import { Wrapper } from '@/components/UI/Wrapper';
import { Subtitle } from '@/components/UI/Subtitle';
import { AboutUsBoxImages } from './AboutUsBoxImages';

export function AboutUsSection() {
	return (
		<section className='py-20 md:py-25 lg:py-30 bg-whiteSection'>
			<Wrapper>
				<div className='flex flex-col items-center gap-10'>
					<div className='flex flex-col items-center gap-5 md:gap-7.5 lg:w-[85%]'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Kim jesteśmy</SectionLabel>
						<SectionTitle textCenter smallFont>
							Jesteśmy czymś więcej niż agencją — jesteśmy Twoim partnerem w tworzeniu wydarzeń
							niezapomnianych, dopracowanych i wolnych od stresu.
						</SectionTitle>
						<Subtitle textCenter>
							Wychodzimy poza organizację imprez, oferując wsparcie i doświadczenie, które sprawia, że każde
							wydarzenie przebiega płynnie, profesjonalnie i bez niespodzianek od początku do końca.
						</Subtitle>
					</div>
					<AboutUsCardList />
					<AboutUsBoxImages />
				</div>
			</Wrapper>
		</section>
	);
}
