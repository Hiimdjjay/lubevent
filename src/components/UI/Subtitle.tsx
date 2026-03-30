type SubtitleProps = {
	children: React.ReactNode;
	textCenter?: boolean;
	textSize?: string;
};

export function Subtitle({
	children,
	textCenter = false,
	textSize = 'text-base'
}: SubtitleProps) {
	return (
		<p
			className={`font-semibold text-black/70 ${textCenter && 'text-center'} ${textSize} `}>
			{children}
		</p>
	);
}
