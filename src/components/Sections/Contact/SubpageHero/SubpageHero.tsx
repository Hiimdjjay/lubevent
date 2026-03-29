import { ImageComponent } from '@/components/UI/ImageComponent';
import { MainTitle } from '@/components/UI/MainTitle';
import { SectionLabel } from '@/components/UI/SectionLabel';

export function SubpageHero() {
	return (
		<section>
			<div className=''>
				<SectionLabel bgColor='bg-bg-white'>Kontakt</SectionLabel>
				<MainTitle>Skontaktuj się z nami</MainTitle>
			</div>
			<ImageComponent src='/Happy-woman.png' />
		</section>
	);
}
