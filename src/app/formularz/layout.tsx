import { QuoteNav } from '@/components/Sections/QuoteForm/QuoteNav';

export default function QuoteLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<QuoteNav />
			{children}
		</div>
	);
}
