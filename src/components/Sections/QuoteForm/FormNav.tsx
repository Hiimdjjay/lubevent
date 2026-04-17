// import { Check } from 'lucide-react';

// const formNavData = [
// 	{ id: 1, name: 'Dane' },
// 	{ id: 2, name: 'Wydarzenie' },
// 	{ id: 3, name: 'Miejsce' },
// 	{ id: 4, name: 'Usługi' },
// 	{ id: 5, name: 'Wiadomość' },
// 	{ id: 6, name: 'Podsumowanie' }
// ];

// export function FormNav({ showStep }) {
// 	return (
// 		<div className='flex justify-center w-full'>
// 			{formNavData.map(({ id }) => {
// 				return (
// 					<div key={id} className='flex items-center flex-1 last:flex-none text-sm'>
// 						<div className='flex flex-col items-center gap-2'>
// 							<div
// 								className={`flex items-center justify-center w-8 h-8 aspect-square  rounded-full font-medium   ${
// 									id === showStep
// 										? 'bg-linear-to-r from-bg-btn-blue to-bg-btn-purple text-white'
// 										: 'bg-white text-black/60'
// 								}`}>
// 								{showStep <=  id ? id : <Check strokeWidth={1.5} className='text-black/60' />}
// 							</div>
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }
