import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Wrapper } from '@/components/UI/Wrapper';
import { servicesData } from '@/constans/servicesData';
import { SingleServiceCard } from '../../Services/SubpageHero/SingleServiceCard';

export function OtherServices({ startIndex }: { startIndex: number }) {
	const randomNumber = startIndex;

	return (
		<section className='py-20 md:py-25 lg:py-30 bg-black'>
			<Wrapper>
				<div className='flex flex-col gap-10 lg:flex-row'>
					<div className='flex flex-col gap-5'>
						<SectionTitle textColor>Inne usługi</SectionTitle>
						<div className='max-w-120'>
							<p className='text-white font-medium'>
								Odkryj pełną ofertę usług eventowych dopasowanych do każdej okazji – od kameralnych
								uroczystości po duże wydarzenia firmowe. Każde marzenie zamieniamy w rzeczywistość.
							</p>
						</div>
						<PrimaryButton path='/uslugi'>Sprawdź nasze usługi</PrimaryButton>
					</div>
					<div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
						{servicesData.slice(randomNumber, randomNumber + 2).map((card, index) => {
							return <SingleServiceCard key={index} card={card} />;
						})}
					</div>
				</div>
			</Wrapper>
		</section>
	);
}
