import React from 'react'
import styles from '@/styles/blocks/_sliderItem.module.scss'
import cn from 'clsx'

type Props = {
	title: string
	isDone: boolean
	workoutType: string
	isFirstNotDone: boolean
}

const SliderItem = ({ title, isDone, workoutType, isFirstNotDone }: Props) => {
	return (
		<div
			className={cn(
				styles.day,
				isDone
					? styles.day__done
					: isFirstNotDone
					? styles.day__firstNotDone
					: ''
			)}
		>
			<h3 className={styles.day__title}>Day {title}</h3>
		</div>
	)
}

export default SliderItem
