import { NavItems } from '../../constans/Header';
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
						className={`text-black/60 font-medium text-lg md:text-xl transition-colors duration-200 hover:text-black ${activePath === path && 'active'}`}
						onClick={() => setOpen(false)}>
						{name}
					</Link>
				);
			})}
		</nav>
	);
}
