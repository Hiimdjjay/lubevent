import { navigation } from '@/constans/navigation';
import Link from 'next/link';

type NavForFooter = {
	activePath: string;
};

export function FooterNav({ activePath }: NavForFooter) {
	return (
		<div className='flex flex-col gap-5 w-full md:w-[30%]'>
			<h2 className='text-xl font-semibold lg:text-2xl'>Podstrony</h2>
			<div className='flex text-sm font-medium md:text-base'>
				<div className='flex flex-col justify-start w-1/2 gap-2 '>
					{navigation.slice(0, 4).map(({ name, path }, index) => {
						return (
							<Link className={`w-fit link ${activePath === path && 'active'}`} key={index} href={path}>
								{name}
							</Link>
						);
					})}
				</div>
				<div className='flex flex-col justify-start w-1/2 gap-2'>
					{navigation.slice(4, 7).map(({ name, path }, index) => {
						return (
							<Link className={`w-fit link ${activePath === path && 'active'}`} key={index} href={path}>
								{name}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}
