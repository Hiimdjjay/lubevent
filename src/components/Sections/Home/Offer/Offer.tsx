import { Wrapper } from '@/components/UI/Wrapper';
import { OfferImage } from './OfferImage';
import { OfferContent } from './OfferContent';

export function Offer() {
	return (
		<section className='bg-black'>
			<Wrapper noPaddingX>
				<div className='flex flex-col lg:flex-row'>
					<OfferImage />
					<OfferContent />
				</div>
			</Wrapper>
		</section>
	);
}
