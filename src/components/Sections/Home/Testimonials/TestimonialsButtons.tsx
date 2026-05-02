import { ArrowNext } from '@/components/UI/Icons/ArrowNext';
import { ArrowPrevious } from '@/components/UI/Icons/ArrowPrevious';

type TestimonialsButtonsProps = {
	value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>;
	totalLength: number;
};

export function TestimonialsButtons({ setValue, totalLength }: TestimonialsButtonsProps) {
	return (
		<div className='flex justify-center gap-5 mt-10'>
			<button
				className='bg-bg-sectionLabel p-2 rounded-xl md:p-3'
				onClick={() => setValue(prev => (prev === 0 ? totalLength - 1 : prev - 1))}>
				<ArrowPrevious size={28} />
			</button>
			<button
				className='bg-bg-sectionLabel p-2 rounded-xl md:p-3'
				onClick={() => setValue(prev => (prev === totalLength - 1 ? 0 : prev + 1))}>
				<ArrowNext size={28} />
			</button>
		</div>
	);
}
