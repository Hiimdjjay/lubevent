import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Cards } from './Cards';
import { ImageCard } from '../Images/ImageCard';

export function Description() {
	return (
		<section>
			<div className='max-w-325 w-full m-auto p-4 py-20 md:p-5 md:py-25 lg:p-7.5 lg:py-30'>
				<div className='flex flex-col items-center gap-10'>
					<div className='flex flex-col items-center gap-5 md:gap-7.5'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Kim jesteśmy</SectionLabel>
						<SectionTitle textCenter smallFont>
							Jesteśmy czymś więcej niż agencją — jesteśmy Twoim partnerem w tworzeniu
							wydarzeń niezapomnianych, dopracowanych i wolnych od stresu.
						</SectionTitle>
						<p className='text-black/60 text-center font-medium md:text-lg lg:text-xl'>
							Wychodzimy poza organizację imprez, oferując wsparcie i doświadczenie, które
							sprawia, że każde wydarzenie przebiega płynnie, profesjonalnie i bez
							niespodzianek od początku do końca.
						</p>
					</div>
					<Cards />
				</div>
			</div>
		</section>
	);
}
