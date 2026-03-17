import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Cards } from './Cards';

export function WhyChooseUs() {
	return (
		<section className='p-4 py-20 md:p-5 md:py-25 lg:p-7.5 lg:py-30'>
			<div className='max-w-325 w-full m-auto'>
				<div className='flex flex-col justify-between gap-5 lg:flex-row'>
					<div className='flex flex-col items-start w-full gap-3 md:gap-5  lg:max-w-120'>
						<SectionLabel>Dlaczego wybrać nas</SectionLabel>
						<SectionTitle>
							Tworzymy wydarzenia dopracowane <br className='hidden md:block lg:hidden' />{' '}
							w każdym szczególe
						</SectionTitle>
					</div>
					<div className='lg:w-1/2'>
						<Cards />
					</div>
				</div>
			</div>
		</section>
	);
}
