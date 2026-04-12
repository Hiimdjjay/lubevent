import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Cards } from './Cards';
import { Wrapper } from '@/components/UI/Wrapper';

export function AboutsUs() {
	return (
		<section className='py-20 md:py-25 lg:py-30'>
			<Wrapper>
				<div className='flex flex-col justify-between gap-5 lg:flex-row'>
					<div className='flex flex-col items-start w-full gap-3 md:gap-5 lg:max-w-120'>
						<SectionLabel bgColor='bg-bg-sectionLabel'>Dlaczego wybrać nas</SectionLabel>
						<SectionTitle>
							Tworzymy wydarzenia dopracowane <br className='hidden md:block lg:hidden' />{' '}
							w każdym szczególe
						</SectionTitle>
					</div>
					<div className='lg:w-1/2'>
						<Cards />
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
