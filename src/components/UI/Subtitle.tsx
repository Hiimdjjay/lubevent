type SubtitleProps = {
	children: React.ReactNode;
};

export function Subtitle({ children }: SubtitleProps) {
	return <p>{children}</p>;
}
