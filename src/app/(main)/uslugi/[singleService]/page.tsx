import { Description } from '@/components/Sections/SingleService/Description/Description';
import { OtherServices } from '@/components/Sections/SingleService/OtherServices/OtherServices';
import { SubpageHero } from '@/components/Sections/SingleService/SubpageHero/SubpageHero';
import { CtaSection } from '@/components/UI/CtaSection/CtaSection';
import { servicesData } from '@/constans/servicesData';
import { notFound } from 'next/navigation';

export default async function Service({ params }: { params: Promise<{ singleService: string }> }) {
	const { singleService } = await params;

	const serviceToRender = servicesData.find(service => service.path === `/uslugi/${singleService}`);

	if (!serviceToRender) notFound();

	const randomIndex = Math.floor(Math.random() * (servicesData.length - 2));

	return (
		<main>
			<SubpageHero subpageData={serviceToRender} />
			<Description subpageData={serviceToRender} />
			<OtherServices startIndex={randomIndex} />
			<CtaSection
				primaryText='Darmowa wycena'
				primaryPath='/formularz'
				secondaryText='Poznaj nas'
				secondaryPath='/o-nas'
			/>
		</main>
	);
}

export function generateStaticParams() {
	return [
		{ singleService: 'wesele' },
		{ singleService: 'studniowka' },
		{ singleService: '18-nastka' },
		{ singleService: 'impreza-tematyczna' },
		{ singleService: 'gala-bankiet' },
		{ singleService: 'jubileusz' },
		{ singleService: 'konferencja' },
		{ singleService: 'event-marketingowy' },
		{ singleService: 'dj-wodzirej' },
		{ singleService: 'dj-sportowy-speaker' },
		{ singleService: 'technika-sceniczna' },
		{ singleService: 'wynajem-sprzetu' },
		{ singleService: 'lubbar' },
		{ singleService: 'fotobudka' },
		{ singleService: 'animatorzy' },
		{ singleService: 'konferansjer' }
	];
}
