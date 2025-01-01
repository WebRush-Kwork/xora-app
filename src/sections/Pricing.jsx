import clsx from 'clsx'
import Button from '../components/Button'
import { useState } from 'react'
import { Element } from 'react-scroll'
import { plans } from '../constants'
import CountUp from 'react-countup'

const Pricing = () => {
	const [monthly, setMonthly] = useState(false)

	return (
		<section>
			<Element name='pricing'>
				<div className='container'>
					<div className='m-w-960 pricing-head_before relative border-r border-l mx-auto border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16'>
						<h3 className='h3 max-lg:h4 max-md:h5 mx-auto z-3 relative max-w-lg mb-14 text-center max-md:mb-11 max-sm:max-w-sm text-p4'>
							Flexible pricing for teams of all sizes
						</h3>
						<div className='flex relative z-4 w-[375px] mx-auto border-[3px] border-s4/25 rounded-3xl bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]'>
							<button
								className={clsx('pricing-head_btn', monthly && 'text-p4')}
								onClick={() => setMonthly(true)}
							>
								Monthly
							</button>
							<button
								className={clsx('pricing-head_btn', !monthly && 'text-p4')}
								onClick={() => setMonthly(false)}
							>
								Annual
							</button>
							<div
								className={clsx(
									'h-[calc(100%-16px)] w-[calc(50%-8px)] pricing-head_btn_before g4 absolute left-2 top-2 rounded-14 before:h-100 overflow-hidden shadow-400 transition-transform duration-500',
									!monthly && 'translate-x-full'
								)}
							/>
							<div className='pricing-bg'>
								<img
									src='/images/bg-outlines.svg'
									alt='outline'
									className='relative z-2'
									width={960}
									height={380}
								/>
								<img
									src='/images/bg-outlines-fill.png'
									alt='outline'
									className='absolute inset-0 opacity-5 mix-blend-soft-light'
									width={960}
									height={380}
								/>
							</div>
						</div>
					</div>
					<div className='scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6'>
						{plans.map((plan, index) => (
							<div
								key={plan.id}
								className='pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even p-7 relative border-2 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%-2px)]'
							>
								{index === 1 && (
									<div className='absolute left-0 right-0 top-0 h-330 g4 rounded-tl-3xl rounded-tr-3xl' />
								)}
								<div
									className={clsx(
										'absolute flex items-center justify-center z-2 left-0 right-0',
										index === 1 ? '-top-6' : '-top-6 xl:-top-11'
									)}
								>
									<img
										src={plan.logo}
										className={clsx(
											'object-contain drop-shadow-2xl',
											index === 1 ? 'size-[120px]' : 'size-[88px]'
										)}
										alt={plan.title}
									/>
								</div>
								<div
									className={clsx(
										'relative flex items-center flex-col',
										index === 1 ? 'pt-24' : 'pt-12'
									)}
								>
									<div
										className={clsx(
											'small-2 rounded-20 relative z-2 mb-6 py-1.5 uppercase px-4 border-2 mx-auto',
											index === 1 ? 'border-p3 text-p3' : 'border-p1 text-p1'
										)}
									>
										{plan.title}
									</div>
									<div className='flex relative z-2 justify-center items-center'>
										<div
											className={clsx(
												'h-num flex items-start',
												index === 1 ? 'text-p3' : 'text-p4'
											)}
										>
											$
											<CountUp
												start={plan.priceMonthly}
												end={monthly ? plan.priceMonthly : plan.priceYearly}
												duration={0.4}
												preserveValue
											/>
										</div>
										<div className='ml-1 small-1 relative top-3 uppercase'>
											/ month
										</div>
									</div>
								</div>
								<div
									className={clsx(
										'body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4',
										index === 1 && 'border-b'
									)}
								>
									{plan.caption}
								</div>
								<ul className='space-y-4 mx-auto xl:p-7'>
									{plan.features.map(feature => (
										<li
											key={feature}
											className='relative flex items-center gap-5'
										>
											<img
												src='/images/check.png'
												className='size-10 object-contain'
												alt='check'
											/>
											<p className='flex-1'>{feature}</p>
										</li>
									))}
								</ul>
								<div className='mt-10 flex w-full justify-center'>
									<Button icon={plan.icon}>Get started</Button>
								</div>
								{index === 1 && (
									<p className='small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-["-"] after:mx-2.5 after:content-["-"] '>
										Limited time offer
									</p>
								)}
							</div>
						))}
					</div>
				</div>
			</Element>
		</section>
	)
}

export default Pricing
