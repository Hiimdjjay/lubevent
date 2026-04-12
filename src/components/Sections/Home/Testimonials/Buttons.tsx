import Image from 'next/image';

type ButtonsProps = {
	value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>;
	totalLength: number;
};

export function Buttons({ setValue, totalLength }: ButtonsProps) {
	return (
		<div className='flex justify-center gap-5 mt-10'>
			<button
				className='bg-bg-sectionLabel p-2 rounded-xl md:p-3'
				onClick={() => setValue(prev => (prev === 0 ? totalLength - 1 : prev - 1))}>
				<Image src='/Icons/left.svg' width='25' height='25' alt='Ikona Google' />
			</button>
			<button
				className='bg-bg-sectionLabel p-2 rounded-xl md:p-3'
				onClick={() => setValue(prev => (prev === totalLength - 1 ? 0 : prev + 1))}>
				<Image src='/Icons/right.svg' width='25' height='25' alt='Ikona Google' />
			</button>
		</div>
	);
}
