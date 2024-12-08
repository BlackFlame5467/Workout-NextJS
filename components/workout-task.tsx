'use client'

import styles from '@/styles/blocks/_workout-item.module.scss'
import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

type Props = {
	title: string
	duration: number
	imageSrc: string
}

const WorkoutTask = ({ title, imageSrc, duration }: Props) => {
	const [isCompleted, setIsCompleted] = useState<boolean>(false)

	return (
		<div className={styles.task}>
			<div
				onClick={() => setIsCompleted(!isCompleted)}
				className={cn(
					styles.task__checkbox,
					isCompleted ? styles.task__checked : ''
				)}
			>
				{isCompleted && (
					<Image src={'/checkbox.svg'} alt={'checked'} width={15} height={12} />
				)}
			</div>
			<div className={styles.task__wrapper}>
				{isCompleted ? (
					<div className={styles.task__completed}>
						<h4 className={styles.task__title}>{title}</h4>
						<div className={styles.task__container}>
							<p className={styles.task__message}>WORKOUT COMPLETE</p>
							<button className={cn(styles.task__btn, isCompleted ? styles.task__btn_completed : '')}>
								<Image
									src={'/task-arrow.svg'}
									alt={'Arrow'}
									width={20}
									height={20}
								/>
							</button>
						</div>
					</div>
				) : (
					<div className={styles.task__block}>
						<Image src={imageSrc} alt={title} width={275} height={140} />
						<div className={styles.task__info}>
							<h4 className={styles.task__title}>{title}</h4>
							<p className={styles.task__text}>Duration: {duration} min</p>
						</div>
						<button className={styles.task__btn}>
							<Image
								src={'/task-arrow.svg'}
								alt={'Arrow'}
								width={20}
								height={20}
							/>
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default WorkoutTask
