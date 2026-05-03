import { Google } from '@/components/UI/Icons/Google';
import { Star } from '@/components/UI/Icons/Star';
import Image from 'next/image';
import TESTIMONIAL from '@/assets/photos/testimonials/1-man.jpg';

type TestimonialsCardProps = {
	name: string;
	surname: string;
	content: string;
};

export function TestimonialsCard({ name, surname, content }: TestimonialsCardProps) {
	return (
		<div className='flex flex-col justify-between bg-bg-sectionLabel rounded-xl overflow-hidden p-9 h-120 md:min-w-1/2 '>
			<div className='flex flex-col gap-5'>
				<div className='flex items-center gap-3'>
					<Google size={28} />
					<div className='flex gap-0.5'>
						{Array.from({ length: 5 }).map((_, index) => (
							<Star key={index} size={16} />
						))}
					</div>
				</div>
				<p className='font-medium text-lg '>{content}</p>
			</div>

			<div className='flex gap-3 border-t border-black/20 pt-5 '>
				<div className='relative w-18 h-18 rounded-xl overflow-hidden'>
					<Image
						src={TESTIMONIAL}
						alt='Miniaturka zdjęcia, osoby wyrażającej opinie'
						placeholder='blur'
						fill
						className='object-cover object-top'
					/>
				</div>
				<div className='flex flex-col'>
					<span className='text-sm'>Osoba prywatna</span>
					<p className='font-medium'>{`${name} ${surname}`}</p>
				</div>
			</div>
		</div>
	);
}
