import { Element } from 'react-scroll'
import { faq } from '../constants'
import FaqItem from '../components/FaqItem'

const Faq = () => {
	const halfLength = Math.floor(faq.length / 2)

	return (
		<section>
			<Element name='faq' className='relative'>
				<div className='container py-28 relative z-2'>
					<div>
						<h3 className='h3 max-md:h5 mt-7 max-w-640 max-lg:max-w-md text-p4'>
							Curiosity didn't kill the cat, it gave it answers.
						</h3>
						<p className='body-1 max-lg:max-w-sm'>
							You've got questions, we've got answers.
						</p>
					</div>
					<div className='faq-line_after w-0.5 h-full absolute top-0 left-[calc(50%-1px)] -z-1 bg-s2' />
				</div>
				<div className='faq-glow_before relative z-2 border-2 border-s2 bg-s1'>
					<div className='container flex gap-10 max-lg:block'>
						<div className='rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1'>
							<img src='/images/faq-logo.svg' className='size-1/2' alt='logo' />
						</div>
						<div className='relative pt-24 flex-1'>
							{faq.slice(0, halfLength).map((item, index) => (
								<FaqItem key={item.id} item={item} index={index} />
							))}
						</div>
						<div className='relative lg:pt-24 flex-1'>
							{faq.slice(halfLength).map((item, index) => (
								<FaqItem key={item.id} item={item} index={halfLength + index} />
							))}
						</div>
					</div>
					<div className='faq-line_after absolute -z-1 left-[calc(50%-1px)] top-0 h-full w-0.5 bg-s2 max-lg:hidden' />
				</div>
			</Element>
		</section>
	)
}

export default Faq
