'use client'

import Image from 'next/image'
import styles from '@/styles/blocks/_main.module.scss'
import { useEffect, useRef, useState } from 'react'
import { days, IDays } from '@/data/days'

const Banner = () => {
	const completedDays = days.filter(day => day.isDone).length
	const [progressWidth, setProgressWidth] = useState<number>(0)
	const fullLineRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const calculateProgressWidth = () => {
			if (fullLineRef.current) {
				const fullLineWidth = fullLineRef.current.offsetWidth
				const progress = (completedDays / 30) * fullLineWidth
				setProgressWidth(progress)
			}
		}

		calculateProgressWidth()

		window.addEventListener('resize', calculateProgressWidth)

		return () => {
			window.removeEventListener('resize', calculateProgressWidth)
		}
	}, [completedDays])

	return (
		<div className={styles.main__banner}>
			<div className={styles.info}>
				<h3 className={styles.info__title}>2024 Daily 30 Challenge</h3>
				<p className={styles.info__subtitle}>TODAY’S WORKOUT</p>
			</div>
			<div className={styles.score}>
				<Image src='/banner.png' width={474} height={220} alt='Banner' />
				<div className={styles.score__line}>
					<div className={styles.score__fullLine} ref={fullLineRef}></div>
					<div
						className={styles.score__progressLine}
						style={{ width: `${progressWidth}px` }}
					></div>
					<div className={styles.score__progress}>
						<p className={styles.score__text}>Day {completedDays} / 30</p>
						<p className={styles.score__text}>
							{Math.round((completedDays / 30) * 100)}%
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
