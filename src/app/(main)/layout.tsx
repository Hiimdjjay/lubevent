import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';

export default function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
