import React from 'react'
import styles from '@/styles/blocks/_footer.module.scss'
import { footer } from '@/data/navigation'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<nav className={styles.footer__nav}>
					<ul className={styles.footer__list}>
						{footer.map(item => (
							<li key={item.id}>
								<Link className={styles.footer__link} href={item.link}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
