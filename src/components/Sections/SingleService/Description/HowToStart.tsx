import { STARTING_STEPS_DATA, WHAT_WE_PROVIDE_DATA } from '@/constants/cardsData';
import { Headset, Map } from 'lucide-react';

export function HowToStart() {
	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-3'>
				<h4 className='text-[22px] font-semibold md:text-[24px] lg:text-[28px]'>Jak to działa</h4>
				<p className='whitespace-pre-line text-justify font-semibold text-black/60'>
					Uprościliśmy proces organizacji Twojego wydarzenia do 3 prostych kroków, które gwarantują szybkość,
					kompleksowość i indywidualne dopasowanie. Oto jak wygląda współpraca z nami:
				</p>
				<div className='flex flex-col gap-5 md:flex-row'>
					{STARTING_STEPS_DATA.map(({ id, name }) => (
						<div
							key={id}
							className='flex flex-col justify-between mt-2 min-h-35  p-5 rounded-2xl bg-white md:w-1/3'>
							<div className='flex justify-center items-center  w-9 h-9 rounded-full bg-linear-to-r from-bg-btn-blue to-bg-btn-purple'>
								<span className='font-medium text-sm text-white'>0{id}</span>
							</div>
							<h4 className='font-semibold text-xl'>{name}</h4>
						</div>
					))}
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<h4 className='text-[22px] font-semibold md:text-[24px] lg:text-[28px]'>Co zyskujesz z nami</h4>
				<p className='whitespace-pre-line text-justify font-semibold text-black/60'>
					Wiemy, że każde wydarzenie to coś więcej niż tylko logistyka – to wyjątkowe chwile, które zostają w
					pamięci na długo. Nasze usługi obejmują:
				</p>
				<ul className='flex flex-col gap-2 ml-5'>
					{WHAT_WE_PROVIDE_DATA.map(({ id, text }) => (
						<li className='list-disc font-semibold text-black/60' key={id}>
							{text}
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-8 lg:flex-row'>
				<div className='flex flex-col justify-between  min-h-60 p-5 rounded-2xl bg-linear-to-r  from-bg-btn-blue to-bg-btn-purple lg:w-1/2'>
					<div className='flex justify-center items-center  w-12 h-12 rounded-full bg-white'>
						<Headset />
					</div>
					<div className='flex flex-col gap-2'>
						<span className='text-white text-2xl font-semibold'>Skontaktuj się z nami</span>
						<div className='flex flex-col'>
							<a href='tel:+48500500500' className='text-white font-medium text-lg'>
								+48 500 500 500
							</a>
							<a href='mailto:kontakt@lubevent.pl ' className='text-white  font-medium text-lg'>
								kontakt@lubevent.pl
							</a>
						</div>
					</div>
				</div>
				<div className='flex flex-col justify-between min-h-60 p-5 rounded-2xl  bg-white lg:w-1/2'>
					<div className='flex justify-center items-center  w-12 h-12 rounded-full bg-bg-sectionLabel'>
						<Map />
					</div>
					<div className='flex flex-col gap-2'>
						<span className=' text-2xl font-semibold'>Obszar działania</span>
						<div className='flex flex-col'>
							<p className=' font-medium text-lg'>Województwo Lubelskie</p>
							<p className=' font-medium text-lg'>Regiony wschodniej Polski</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
