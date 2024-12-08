import React from 'react'
import styles from '@/styles/blocks/_faq.module.scss'
import PageWrapper from './wrapper'
import FaqItem from './faq-item'
import { faqItems } from '@/data/faq'

const Faq = () => {
	return (
		<div className={styles.faq}>
			<h2 className={styles.faq__title}>Faq</h2>
			<div className={styles.faq__block}>
				{faqItems.map(item => (
					<PageWrapper key={item.id}>
						<FaqItem title={item.title} text={item.text} />
					</PageWrapper>
				))}
			</div>
		</div>
	)
}

export default Faq
