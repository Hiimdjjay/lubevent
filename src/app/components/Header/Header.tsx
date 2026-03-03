import Link from 'next/link';
import { BurgerButton } from './BurgerButton';

export function Header() {
	return (
		<header className='fixed flex justify-between items-center w-full px-4 py-3 border-b border-white/15'>
			<Link href='/'>
				<img src='/Logo/lubevent-logo.svg' alt='LubEvent' className='h-[40px]'></img>
			</Link>
			<nav className='hidden'>
				<Link href='/'>Home</Link>
				<Link href='/o-nas'>O nas</Link>
			</nav>
			<BurgerButton />
		</header>
	);
}
