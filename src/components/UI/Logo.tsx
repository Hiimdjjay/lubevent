import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/assets/logo/lubevent-logo.svg';

type LogoProps = {
	setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
	size: string;
};

export function Logo({ setOpen, size }: LogoProps) {
	return (
		<Link href='/' onClick={() => setOpen?.(false)}>
			<Image
				src={LogoImage}
				alt='Logo LubEvent'
				priority
				className={`${size} w-auto lg:h-13`}
			/>
		</Link>
	);
}
