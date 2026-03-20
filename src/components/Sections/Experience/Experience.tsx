import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import Image from 'next/image';
import HappyWoman from '../../../../public/Conference-guy.png';
import HappyGuests from '../../../../public/LandingPage/Group-of-people-Chat-GPT .png';
import BusinessMeeting from '../../../../public/Business-meeting.jpg';
import { ImgCard } from './ImgCard';

const cardsData = [
	{
		id: 1,
		theme: 'purple',
		title: 'Zadowoleni klienci',
		counter: '300+',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates omnis ab suscipit ab!',
		image: HappyWoman
	},
	{
		id: 2,
		theme: '',
		title: '',
		counter: '',
		content: '',
		image: HappyGuests
	},
	{
		id: 3,
		theme: 'white',
		title: 'Doświadczenie zawodowe',
		counter: '10+ lat',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates omnis ab suscipit ab!',
		image: ''
	},
	{
		id: 4,
		theme: 'none',
		title: 'Zadowoleni klienci',
		counter: '300+',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates omnis ab suscipit ab!',
		image: BusinessMeeting
	},
	{
		id: 5,
		theme: 'black',
		title: 'Zadowoleni klienci',
		counter: '300+',
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates omnis ab suscipit ab!',
		image: ''
	}
];

export function Experience() {
	return (
		<section className='bg-bg-sectionLabel'>
			<div className=' max-w-325 m-auto f-full p-4 py-20 md:p-5 md:py-25 lg:p-7.5 lg:py-30'>
				<div className='flex flex-col gap-5'>
					<div className='flex flex-col items-center gap-3'>
						<SectionLabel bgColor='bg-white'>Nasze doświadczenie</SectionLabel>
						<SectionTitle textCenter smallFont>
							Najlepsza impreza to taka, na której wszystko działa — a Ty nie musisz się o
							nic martwić. To nie tylko światło, dźwięk i logistyka, ale pewność, że każdy
							element jest dopracowany w najmniejszym szczególe.
						</SectionTitle>
					</div>
					<div className='grid gap-y-3'>
						<div className='relative text-white p-5 h-110 bg-linear-to-r from-bg-btn-blue to-bg-btn-purple rounded-2xl overflow-hidden'>
							<div className='flex flex-col gap-5'>
								<div>
									<p className='text-sm font-semibold'>Zrealizowanych wydarzeń</p>
									<div className='flex flex-col gap-2'>
										<span className='text-[34px]'>300+</span>
										<p className='w-[85%]'>
											Od eventów firmowych po duże realizacje sceniczne. Scena, dźwięk,
											światło i koordynacja w jednym miejscu.
										</p>
									</div>
								</div>
								<Image
									src={HappyWoman}
									className='absolute w-75 -bottom-38 self-end'
									alt='Uśmiechnięta dziewczyna'
								/>
							</div>
						</div>
						<ImgCard src={HappyGuests} alt='Bawiąca i uśmiechnięta grupa ludzi'></ImgCard>
						<div className='text-black bg-white p-5 rounded-2xl overflow-hidden'>
							<div className='flex flex-col gap-5'>
								<div>
									<p className='text-sm font-semibold'>Doświadczenie zawodowe</p>
									<div className='flex flex-col gap-2'>
										<span className='text-[34px]'>10+ lat</span>
										<p className='w-[85%]'>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
											omnis ab suscipit ab!
										</p>
									</div>
								</div>
								{false && (
									<Image
										src={HappyWoman}
										className='w-55 self-center'
										alt='Uśmiechnięta dziewczyna'
									/>
								)}
							</div>
						</div>
						<ImgCard
							src={BusinessMeeting}
							alt='Bawiąca i uśmiechnięta grupa ludzi'></ImgCard>
						<div className='text-white bg-black p-5 rounded-2xl overflow-hidden'>
							<div className='flex flex-col gap-5'>
								<div>
									<p className='text-sm font-semibold'>Wydarzeń zrealizowanych</p>
									<div className='flex flex-col gap-2'>
										<span className='text-[34px]'>300+</span>
										<p className='w-[85%]'>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
											omnis ab suscipit ab!
										</p>
									</div>
								</div>
								{false && (
									<Image
										src={HappyWoman}
										className='w-55 self-center'
										alt='Uśmiechnięta dziewczyna'
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
