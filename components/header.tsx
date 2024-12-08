'use client'

import { header } from '@/data/navigation'
import Link from 'next/link'
import ListItem from './list-item'
import cn from 'clsx'

import styles from '@/styles/blocks/_header.module.scss'
import { useState } from 'react'

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__wrapper}>
					<Link href='#' className={styles.header__title}>
						chloe ting
					</Link>
					<nav
						className={cn(
							styles.header__nav,
							isOpen ? styles.header__nav_active : ''
						)}
					>
						<button
							className={styles.header__burger}
							onClick={() => setIsOpen(!isOpen)}
						>
							<span></span>
						</button>
						<ul className={styles.header__list}>
							{header.map(nav => (
								<ListItem key={nav.id} title={nav.title} link={nav.link} />
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
