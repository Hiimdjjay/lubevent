import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../../public/Logo/lubevent-logo.svg';

type LogoProps = {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Logo({ setOpen }: LogoProps) {
	return (
		<Link href='/' onClick={() => setOpen(false)}>
			<Image
				src={LogoImage}
				alt='Logo LubEvent'
				priority
				className='h-8.5 w-auto md:h-10.5 lg:h-13'
			/>
		</Link>
	);
}
