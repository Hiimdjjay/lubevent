import { Wrapper } from '@/components/UI/Wrapper';
import { startingStepsData } from '@/constans/cardsData';

export function HowToStart() {
	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-3'>
				<h4 className='text-[22px] font-semibold md:text-[24px] lg:text-[28px]'>Jak to działa</h4>
				<p className='whitespace-pre-line text-justify font-semibold text-black/60'>
					Uprościliśmy proces organizacji Twojego wydarzenia do 3 prostych kroków, które gwarantują szybkość,
					kompleksowość i indywidualne dopasowanie. Oto jak wygląda współpraca z nami:
				</p>
				<div>
					{startingStepsData.map((card, index) => (
						<div key={index}>
							<div>
								<span>0{index}</span>
							</div>
							<div>{card}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
