import Link from 'next/link';
import { NAVIGATION_ITEMS } from '../../../constants/navigationData';

type ActivePathProps = {
	activePath: string;
};

export function NavDesktop({ activePath }: ActivePathProps) {
	return (
		<nav className='hidden items-center gap-6 font-semibold lg:flex'>
			{NAVIGATION_ITEMS.slice(0, 4).map(({ id, name, path }) => {
				return (
					<Link key={id} href={path} className={`link ${activePath === path && 'active'}`}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
}
