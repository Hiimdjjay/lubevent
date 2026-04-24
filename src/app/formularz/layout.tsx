import { MultiStepFormNav } from '@/components/Sections/MultiStepForm/MultiStepFormNav';

export default function QuoteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<MultiStepFormNav />
			{children}
		</div>
	);
}
