import { NAVIGATION_ITEMS } from '../../../constants/navigationData';
import Link from 'next/link';

type ActivePathProps = {
	activePath: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function NavMobile({ activePath, setOpen }: ActivePathProps) {
	return (
		<nav className='flex flex-col items-center gap-4'>
			{NAVIGATION_ITEMS.slice(0, 4).map(({ id, name, path }) => {
				return (
					<Link
						key={id}
						href={path}
						className={`text-black font-medium text-lg md:text-xl  ${activePath === path && 'active'}`}
						onClick={() => setOpen(false)}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
}
