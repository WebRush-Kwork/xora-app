import clsx from 'clsx'
import Marker from './Marker'

const Button = ({
	icon,
	children,
	href,
	containerClassName,
	onClick,
	markerFill,
}) => {
	const Inner = () => {
		return (
			<>
				<span className='flex items-center relative min-h-[60px] g4 px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>
					<span className='absolute -left-[1px]'>
						<Marker markerFill={markerFill} />
					</span>
					{icon && (
						<img
							src={icon}
							alt='circle'
							className='mr-5 object-contain size-10 z-10'
						/>
					)}
					<span className='uppercase text-p1 base-bold z-2'>{children}</span>
				</span>
				<span className='glow-before glow-after' />
			</>
		)
	}

	return href ? (
		<a
			href={href}
			className={clsx(
				'relative rounded-2xl g5 shadow-500 group p-0.5 min-h-[60px] overflow-hidden flex items-center',
				containerClassName
			)}
		>
			<Inner />
		</a>
	) : (
		<button
			className={clsx(
				'relative rounded-2xl g5 shadow-500 group p-0.5 min-h-[60px] overflow-hidden flex items-center',
				containerClassName
			)}
			onClick={onClick}
		>
			<Inner />
		</button>
	)
}

export default Button
