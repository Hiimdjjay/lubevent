import Link from 'next/link';
import { NavItems } from '../../../constans/header';

type ActivePathProps = {
	activePath: string;
};

export function DesktopNav({ activePath }: ActivePathProps) {
	return (
		<nav className='hidden items-center gap-6 font-semibold lg:flex'>
			{NavItems.map(({ name, path }) => {
				return (
					<Link
						key={name}
						href={path}
						className={`text-black/60 transition-colors duration-200 hover:text-black ${activePath === path && 'active'}`}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
}
