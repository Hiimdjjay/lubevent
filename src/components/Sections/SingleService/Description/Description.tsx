import { Wrapper } from '@/components/UI/Wrapper';
import { HowToStart } from './HowToStart';

type SubpageDataProps = {
	subpageData: {
		generalDescription: string;
		sideDescription: string;
		eventTerms: string[];
	};
};

export function Description({
	subpageData: { generalDescription, sideDescription, eventTerms }
}: SubpageDataProps) {
	return (
		<section className='pb-20 md:pb-25 lg:pb-30'>
			<Wrapper marginForText>
				<div className='flex flex-col gap-8'>
					<div className='flex flex-col gap-3'>
						<h4 className='text-[22px] font-semibold md:text-[24px] lg:text-[28px]'>Opis usługi</h4>
						<p className='whitespace-pre-line text-justify font-semibold text-black/60'>
							{generalDescription}
						</p>
					</div>
					<div className='flex flex-col gap-3'>
						<h4 className='text-[22px] font-semibold md:text-[24px] lg:text-[28px]'>Co oferujemy</h4>
						<p className='whitespace-pre-line text-justify font-semibold text-black/60'>{sideDescription}</p>
					</div>
					<ul className='flex flex-col gap-2 ml-5'>
						{eventTerms.map((term, index) => (
							<li className='list-disc font-semibold text-black/60' key={index}>
								{term}
							</li>
						))}
					</ul>
					<HowToStart />
				</div>
			</Wrapper>
		</section>
	);
}
