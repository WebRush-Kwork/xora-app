import { Element, Link as LinkScroll } from 'react-scroll'
import Button from '../components/Button'

const Hero = () => {
	return (
		<section className='relative pb-40 pt-60 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32'>
			<Element name='hero'>
				<div className='container'>
					<div className='relative z-2 max-w-512 max-lg:ma-w-388'>
						<div className='caption small-2 uppercase text-p3'>
							Video Editing
						</div>
						<h1 className='h1 mb-6 max-lg:mg-7 uppercase text-p4 max-lg:h2 max-md:mb-4 max-md:leading-12 max-md:text-5xl'>
							Amazingly simple
						</h1>
						<p className='mb-14 body-1 max-md:mb-10'>
							We designed XORA AI Video Editor to be an easy to use, quick to
							learn, and surprisingly powerful.
						</p>
						<LinkScroll to='features' smooth spy offset={-100}>
							<Button icon='/images/zap.svg'>Try it now</Button>
						</LinkScroll>
					</div>
					<div className='absolute left-[calc(50%-340px)] -top-32 w-[1230px] pointer-events-none hero-img_res'>
						<img
							src='/images/hero.png'
							className='max-lg:h-auto size-1230'
							alt='hero'
						/>
					</div>
				</div>
			</Element>
		</section>
	)
}

export default Hero
