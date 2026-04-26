export function ArrowLeft({ color = '#000', size = 20 }) {
	return (
		<svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M20 12H4M4 12L10 6M4 12L10 18'
				stroke={color}
				strokeWidth='2.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
}
