import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [hasScrolled, setHasScrolled] = useState(false)

	useEffect(() => {
		const handleScrolled = () => {
			setHasScrolled(window.scrollY > 32)
		}
		window.addEventListener('scroll', handleScrolled)

		return () => {
			window.removeEventListener('scroll', handleScrolled)
		}
	}, [])

	const NavLink = ({ title }) => (
		<LinkScroll
			to={title}
			offset={-100}
			smooth
			spy
			activeClass='nav-active'
			onClick={() => setIsOpen(false)}
			className='uppercase text-p4 base-bold transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5'
		>
			{title}
		</LinkScroll>
	)

	return (
		<header
			className={clsx(
				'w-full py-10 fixed z-50 left-0 top-0 transition-all duration-500 max-lg:py-4',
				hasScrolled && 'py-4 backdrop-blur-[8px] bg-black-100'
			)}
		>
			<div className='container flex h-14 items-center max-lg:px-5'>
				<a href='/' className='lg:hidden flex-1 z-2'>
					<img src='/images/xora.svg' width={115} height={55} alt='logo' />
				</a>
				<div
					className={clsx(
						'w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0',
						isOpen
							? 'max-[1024px]:opacity-100'
							: 'max-[1024px]:pointer-events-none'
					)}
				>
					<div className='max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
						<nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
							<ul className='flex max-lg:block max-lg:px-12'>
								<li className='nav-li'>
									<NavLink title='features' />
									<div className='dot'></div>
									<NavLink title='pricing' />
								</li>

								<li className='nav-logo'>
									<LinkScroll
										to='hero'
										offset={-250}
										smooth
										spy
										className={clsx(
											'max-lg:hidden transition-transform duration-500 cursor-pointer'
										)}
									>
										<img
											src='/images/xora.svg'
											width={160}
											height={55}
											alt='logo'
										/>
									</LinkScroll>
								</li>

								<li className='nav-li'>
									<NavLink title='faq' />
									<div className='dot'></div>
									<NavLink title='download' />
								</li>
							</ul>
						</nav>
						<div className='lg:hidden w-[960px] h-[380px] rotate-90 translate-x-[-290px] -translate-y-1/2 absolute block top-1/2 left-0'>
							<img
								src='/images/bg-outlines.svg'
								alt='outline'
								width={960}
								height={380}
								className='relative z-2'
							/>
							<img
								src='/images/bg-outlines-fill.png'
								alt='outline-fill'
								className='absolute inset-0 mix-blend-soft-light opacity-5'
							/>
						</div>
					</div>
				</div>
				<button
					className='lg:hidden flex items-center rounded-full border-s4/25 border-2 size-10 justify-center z-2'
					onClick={() => setIsOpen(prev => !prev)}
				>
					<img
						src={`/images/${isOpen ? 'close' : 'magic'}.svg`}
						className='object-contain size-1/2'
						alt='magic'
					/>
				</button>
			</div>
		</header>
	)
}

export default Header
