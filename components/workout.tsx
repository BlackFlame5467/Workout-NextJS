import React from 'react'
import styles from '@/styles/blocks/_workout.module.scss'
import WorkoutTask from './workout-task'

const Workout = () => {
	return (
		<div className={styles.workout}>
			<h2 className={styles.workout__title}>Today's Workout</h2>
			<div className={styles.workout__list}>
				<WorkoutTask title={'Warm Up'} duration={5} imageSrc='/task-1.png' />
				<WorkoutTask title={'Cooldown'} duration={15} imageSrc='/task-2.png' />
				<WorkoutTask
					title={'Booty & Legs'}
					duration={25}
					imageSrc='/task-1.png'
				/>
			</div>
		</div>
	)
}

export default Workout
