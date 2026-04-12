import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/animation.css';
import { Manrope } from 'next/font/google';

export const metadata: Metadata = {
	title: 'LubEvent',
	description:
		'LubEvent - profesjonalna organizacja wydarzeń w Lublinie i okolicach. Eventy firmowe, konferencje, wesela, scena, nagłośnienie i oprawa techniczna.'
};

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='pl' suppressHydrationWarning>
			<body className={manrope.className}>{children}</body>
		</html>
	);
}
