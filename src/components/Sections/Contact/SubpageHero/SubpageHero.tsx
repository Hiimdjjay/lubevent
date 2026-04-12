import { MainTitle } from '@/components/UI/MainTitle';
import { SectionLabel } from '@/components/UI/SectionLabel';
import { Subtitle } from '@/components/UI/Subtitle';
import { ContactCards } from './ContactCards';
import Image from 'next/image';

export function SubpageHero() {
	return (
		<section className='flex flex-col bg-bg-sectionLabel lg:flex-row lg:gap-5'>
			<div className='w-full  lg:w-1/2'>
				<div className='mx-auto px-4 pt-30 pb-20 md:p-5 md:pt-45 md:pb-25 lg:max-w-162.5 lg:ml-auto lg:mr-0 lg:px-2.5 lg:pt-60 lg:pb-30'>
					<div className='flex flex-col gap-5'>
						<div className='flex flex-col gap-5'>
							<SectionLabel bgColor='bg-white'>Kontakt</SectionLabel>
							<MainTitle>
								Skontaktuj się <br />z nami
							</MainTitle>
							<Subtitle textSize="lg:text-lg">
								Jesteśmy tutaj, aby pomóc Ci stworzyć dopracowane wydarzenie. Skontaktuj
								się z nami telefonicznie, mailowo lub przez formularz — odpowiemy szybko i
								zajmiemy się wszystkim od koncepcji po realizację.
							</Subtitle>
						</div>
						<ContactCards />
					</div>
				</div>
			</div>
			<div className='relative w-full aspect-3/4 md:aspect-square lg:w-1/2'>
				<Image src='/Photos/contact.png' fill alt='sdf' className='object-cover' />
			</div>
		</section>
	);
}
