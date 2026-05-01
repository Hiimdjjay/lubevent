type SubtitleProps = {
	children: React.ReactNode;
	textCenter?: boolean;
	largerText?: boolean;
};

export function Subtitle({ children, textCenter = false, largerText = false }: SubtitleProps) {
	return (
		<p
			className={`font-semibold text-black/70 md:text-[19px] lg:text-xl ${textCenter && 'text-center'} ${largerText} `}>
			{children}
		</p>
	);
}
