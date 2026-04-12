'use client';

import { Logo } from '@/components/UI/Logo';
import { SecondaryButton } from '@/components/UI/SecondaryButton';
import { Wrapper } from '@/components/UI/Wrapper';

export function QuoteNav() {
	return (
		<div className='fixed top-0 left-0 w-full z-50 p-4 md:py-5 lg:py-7.5'>
			<Wrapper noPaddingX>
				<div className='flex items-center justify-between rounded-lg p-3 bg-bg-white-blur backdrop-blur-md border border-white/40 shadow-lg md:p-3.5 '>
					<Logo size='h-8.5 md:h-10.5 ' />
					<div className='flex justify-center items-center '>
						<SecondaryButton href='/' arrowLeft>
							Wyjście
						</SecondaryButton>
					</div>
				</div>
			</Wrapper>
		</div>
	);
}
