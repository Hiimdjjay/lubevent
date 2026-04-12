'use client';

import { useState } from 'react';
import { InfoPage } from './InfoPage';

export function Form() {
	return (
		<form className='flex flex-col gap-5 w-full bg-bg-sectionLabel p-5 rounded-2xl text-[17px] md:p-10 md:gap-7 lg:gap-10'>
			<InfoPage />
		</form>
	);
}
