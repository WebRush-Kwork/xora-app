import { socials } from '../constants'

const Footer = () => {
	return (
		<footer>
			<div className='container py-10'>
				<div className='flex justify-between items-center max-md:flex-col w-full'>
					<div className='small-compact'>
						<p className='opacity-70'>Copyright, Gleb</p>
					</div>
					<div className='flex'>
						<p className='legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1'>Privacy policy</p>
						<p className='legal-before relative text-p5 transition-all duration-500 hover:text-p1'>Terms of Use</p>
					</div>
					<ul className='flex items-center justify-center gap-3 max-md:mt-10'>
						{socials.map(({ id, title, icon, url }) => (
							<li key={id}>
								<a href={url} className='social-icon'>
									<img src={icon} className='size-1/3 object-contain' alt={title} />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
