export function PulsingDot() {
	return (
		<span className='relative flex items-center justify-center h-3 w-3'>
			<span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40 [animation-duration:2s]'></span>
			<span className='relative inline-flex h-1.5 w-1.5 rounded-full bg-black'></span>
		</span>
	);
}
