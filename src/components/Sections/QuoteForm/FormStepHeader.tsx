import { SectionLabel } from '@/components/UI/SectionLabel';
import { SectionTitle } from '@/components/UI/SectionTitle';
import { Subtitle } from '@/components/UI/Subtitle';

type FormStepHeaderProps = {
	label: string;
	title: string;
	subtitle: string;
};

export function FormStepHeader({ label, title, subtitle }: FormStepHeaderProps) {
	return (
		<div className={`flex flex-colitems-start`}>
			<SectionLabel bgColor='bg-white'>{label}</SectionLabel>
			<SectionTitle>{title}</SectionTitle>
			<Subtitle>{subtitle}</Subtitle>
		</div>
	);
}
