import { Description } from '@/components/Sections/SingleService/Description/Description';
import { SubpageHero } from '@/components/Sections/SingleService/SubpageHero/SubpageHero';
import { servicesData } from '@/constans/servicesData';
import { notFound } from 'next/navigation';

export default async function Service({ params }: { params: Promise<{ singleService: string }> }) {
	const { singleService } = await params;

	const serviceToRender = servicesData.find(service => service.path === `/uslugi/${singleService}`);

	if (!serviceToRender) notFound();

	return (
		<main>
			<SubpageHero subpageData={serviceToRender} />
			<Description subpageData={serviceToRender} />
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
