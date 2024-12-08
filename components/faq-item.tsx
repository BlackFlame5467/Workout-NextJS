'use client'

import React, { useState } from 'react'
import styles from '@/styles/blocks/_faq.module.scss'
import Image from 'next/image'
import cn from 'clsx'

type Props = {
	title: string
	text: string
}

const FaqItem = ({ title, text }: Props) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className={styles.faq__item}>
			<div className={styles.faq__wrapper}>
				<h3 className={styles.faq__item_title}>{title}</h3>
				<button
					className={cn(styles.faq__btn, !isOpen ? styles.faq__plus : '')}
					onClick={() => setIsOpen(!isOpen)}
				></button>
			</div>
			<div
				className={cn(
					styles.faq__info,
					!isOpen ? styles.faq__none : styles.faq__show
				)}
			>
				<div className={styles.faq__line}></div>
				<p className={styles.faq__text}>{text}</p>
			</div>
		</div>
	)
}

export default FaqItem
