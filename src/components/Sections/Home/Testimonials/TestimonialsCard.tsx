import Image from 'next/image';
import Google from '../../../../../public/google.svg';
import Star from '../../../../../public/star.svg';
import Opinion1 from '../../../../../public/Testimonials/1-man.jpg';
import Opinion2 from '../../../../../public/Testimonials/2-man.jpg';
import Opinion3 from '../../../../../public/Testimonials/3-woman.jpg';
import Opinion4 from '../../../../../public/Testimonials/4-woman.jpg';

type TestimonialsCardProps = {
	name: string;
	surname: string;
};

export function TestimonialsCard({ name, surname }: TestimonialsCardProps) {
	return (
		<div className='flex flex-col min-w-full justify-between bg-bg-sectionLabel rounded-xl overflow-hidden p-10 h-115'>
			<div className='flex flex-col gap-5'>
				<div className='flex items-center gap-2'>
					<div>
						<Image src={Google} width='28' height='28' alt='Ikona Google' />
					</div>
					<div className='flex gap-0.5'>
						<Image src={Star} width='13' height='13' alt='Ikona Google' />
						<Image src={Star} width='13' height='13' alt='Ikona Google' />
						<Image src={Star} width='13' height='13' alt='Ikona Google' />
						<Image src={Star} width='13' height='13' alt='Ikona Google' />
						<Image src={Star} width='13' height='13' alt='Ikona Google' />
					</div>
				</div>
				<p className='font-medium text-lg '>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod quae dicta facere
					at ipsa perspiciatis consectetur maiores, porro iure vitae possimus, cum
					voluptatem et iusto voluptatibus est.
				</p>
			</div>

			<div className='flex gap-3 border-t border-black/20 pt-5 '>
				<div className='relative w-18 h-18 rounded-xl overflow-hidden'>
					<Image
						src={Opinion1}
						fill
						sizes='80px'
						className='object-cover object-top'
						alt='Miniaturka zdjęcia, osoby wyrażającej opinie'
					/>
				</div>
				<div className='flex flex-col'>
					<p className='text-sm'>Osoba prywatna</p>
					<p className='font-medium'>{`${name} ${surname}`}</p>
				</div>
			</div>
		</div>
	);
}
