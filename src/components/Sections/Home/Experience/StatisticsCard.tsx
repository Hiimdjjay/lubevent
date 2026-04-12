import Image from 'next/image';
import { Counter } from './Counter';

type StatisticsCardProps = {
	title: string;
	src?: string;
	target: number;
	content: string;
	imageAlt?: string;
	className?: string;
	classNameText?: string;
};

export function StatisticsCard({
	title,
	src,
	target,
	content,
	imageAlt,
	className,
	classNameText
}: StatisticsCardProps) {
	return (
		<div
			className={`relative w-full p-5 rounded-2xl overflow-hidden md:h-full ${className} }`}>
			<div className='flex flex-col h-full'>
				<div className='flex flex-col gap-5 h-full md:justify-between'>
					<p className='text-sm font-semibold'>{title}</p>
					<div className='flex flex-col gap-2 '>
						<Counter target={target} title={title} />
						<p className={`w-[85%] font-medium ${classNameText} `}>{content}</p>
					</div>
				</div>
				{src && (
					<Image
						width={300}
						height={300}
						src={src}
						className='absolute w-75 -right-5 -bottom-40 self-end md:-right-10'
						alt={imageAlt ?? ''}
					/>
				)}
			</div>
		</div>
	);
}
