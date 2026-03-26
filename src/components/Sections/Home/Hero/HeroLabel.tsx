import { PulsingDot } from '../../../UI/PulsingDot';

type HeroLabelProps = {
	children: React.ReactNode;
};

export function HeroLabel({ children }: HeroLabelProps) {
	return (
		<div
			className={`flex flex-row w-fit items-center gap-2 py-2 px-4 rounded-full bg-white`}>
			<PulsingDot />
			<p className='text-sm text-black/7git add public/Aftermovie.mp4
git commit -m "add compressed video"
git push origin main0 font-semibold'>{children}</p>
		</div>
	);
}
