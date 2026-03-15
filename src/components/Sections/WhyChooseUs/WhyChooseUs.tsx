import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Cards } from './Cards';

export function WhyChooseUs() {
	return (
		<section className='p-4 py-20'>
			<div className='max-w-325 w-full m-auto'>
				<div className="grid grid-cols-1 gap-5">
					<div className='flex flex-col items-start w-full gap-4'>
						<SectionLabel>Dlaczego wybrać nas</SectionLabel>
						<SectionTitle>
							Tworzymy wydarzenia dopracowane w każdym szczególe
						</SectionTitle>
					</div>
					<Cards />
				</div>
			</div>
		</section>
	);
}
