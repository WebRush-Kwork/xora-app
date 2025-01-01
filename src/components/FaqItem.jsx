import clsx from 'clsx'
import { useState } from 'react'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const FaqItem = ({ item, index }) => {
	const [activeId, setActiveId] = useState(null)
	const active = activeId === item.id

	return (
		<div className='relative z-2 mb-16'>
			<div
				className='group relative flex cursor-pointer px-7 gap-10 justify-between items-center'
				onClick={() => setActiveId(activeId === item.id ? null : item.id)}
			>
				<div className='flex-1'>
					<div className='mb-0.5 small-compact text-p3 max-lg:hidden'>
						{index < 9 && 0}
						{index + 1}
					</div>
					<div
						className={clsx(
							'h6 text-p4 max-md:flex max-md:items-center transition-colors duration-500 max-md:min-h-20',
							active && 'max-lg:text-p1'
						)}
					>
						{item.question}
					</div>
				</div>
				<div
					className={clsx(
						'faq-icon border-2 border-s2 relative flex justify-center items-center rounded-full size-12 transition-all duration-500 group-hover:border-s4',
						active && 'before:bg-s1 after:rotate-0 after:bg-p1'
					)}
				>
					<div className='size-11/20 rounded-xl g4 shadow-300' />
				</div>
			</div>
			<SlideDown>
				{activeId === item.id && (
					<div className='px-7 py-3.5 body-3'>{item.answer}</div>
				)}
			</SlideDown>
			<div
				className={clsx(
					'opacity-0 transition-opacity duration-500 g5 -bottom-7 -top-7 rounded-3xl left-0 right-0 -z-1 absolute',
					active && 'opacity-100'
				)}
			>
				<div className='absolute inset-0.5 rounded-3xl g4 -z-1' />
				<div className='absolute left-8 top-0 h-0.5 w-40 bg-p1' />
			</div>
		</div>
	)
}

export default FaqItem
