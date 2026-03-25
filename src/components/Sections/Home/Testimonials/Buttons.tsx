// import Previous from '../../../../../public/star.svg';
import Left from '../../../../../public/left.svg';
import Right from '../../../../../public/right.svg';
import Image from 'next/image';

type ButtonsProps = {
	setValue: React.Dispatch<React.SetStateAction<number>>;
};

export function Buttons({ setValue }: ButtonsProps) {
	return (
		<div className='flex justify-center gap-5 mt-10'>
			<button
				className='bg-bg-sectionLabel p-2 rounded-xl '
				onClick={() => setValue(prev => prev - 1)}>
				<Image src={Left} width='25' height='25' alt='Ikona Google' />
			</button>
			<button
				className='bg-bg-sectionLabel p-2 rounded-xl'
				onClick={() => setValue(prev => prev + 1)}>
				<Image src={Right} width='25' height='25' alt='Ikona Google' />
			</button>
		</div>
	);
}
