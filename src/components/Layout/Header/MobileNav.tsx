import { NavItems } from '../../../constans/navigation';
import Link from 'next/link';

type ActivePathProps = {
	activePath: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function MobileNav({ activePath, setOpen }: ActivePathProps) {
	return (
		<nav className='flex flex-col items-center gap-4'>
			{NavItems.map(({ name, path }) => {
				return (
					<Link
						key={name}
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
