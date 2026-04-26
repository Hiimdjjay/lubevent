import Link from 'next/link';
import { navigation } from '../../../constans/navigation';

type ActivePathProps = {
	activePath: string;
};

export function DesktopNav({ activePath }: ActivePathProps) {
	return (
		<nav className='hidden items-center gap-6 font-semibold lg:flex'>
			{navigation.slice(0, 4).map(({ name, path }) => {
				return (
					<Link key={name} href={path} className={`link ${activePath === path && 'active'}`}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
}
