'use client'

import styles from '@/styles/blocks/_form.module.scss'
import cn from 'clsx'
import Image from 'next/image'
import { FormEvent, useState } from 'react'

const Form = () => {
	const [isSubmit, setIsSubmit] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [surname, setSurname] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [number, setNumber] = useState<string>('')

	const handleSubmitForm = (e: FormEvent) => {
		e.preventDefault()

		setName('')
		setSurname('')
		setEmail('')
		setNumber('')

		setIsSubmit(!isSubmit)
	}

	return (
		<div className={styles.form}>
			<h3 className={styles.form__title}>
				Do you have a busy schedule, but want to do workouts?
			</h3>
			<div className={styles.form__wrapper}>
				<div className={styles.form__message}>
					<p className={styles.form__text}>
						Our team will help you create a personal training schedule. Fill out
						the form and our manager will contact you.
					</p>
				</div>
				<form
					className={cn(styles.form__form, isSubmit ? styles.form__none : '')}
					onSubmit={handleSubmitForm}
				>
					<input
						value={name}
						onChange={e => setName(e.target.value)}
						className={styles.form__input}
						type='text'
						placeholder='Name'
					/>
					<input
						value={surname}
						onChange={e => setSurname(e.target.value)}
						className={styles.form__input}
						type='text'
						placeholder='Surname'
					/>
					<input
						value={email}
						onChange={e => setEmail(e.target.value)}
						className={styles.form__input}
						type='mail'
						placeholder='Email'
					/>
					<input
						value={number}
						onChange={e => setNumber(e.target.value)}
						className={styles.form__input}
						type='number'
						placeholder='Number'
					/>
					<button type='submit' className={styles.form__btn}>
						Send
					</button>
				</form>
				{isSubmit && (
					<div className={styles.submit}>
						<div className={styles.submit__wrapper}>
							<h4 className={styles.submit__title}>
								Thank you for choosing us. We appreciate every person.
							</h4>
							<Image
								className={styles.submit__image}
								src={'/submit.svg'}
								alt={'Submit'}
								width={250}
								height={230}
							/>
						</div>
						<button className={styles.submit__btn} onClick={handleSubmitForm}>
							turn back
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default Form
