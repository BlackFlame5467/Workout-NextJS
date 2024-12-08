import Banner from '@/components/banner'
import Faq from '@/components/faq'
import Form from '@/components/form'
import Slider from '@/components/slider'
import Workout from '@/components/workout'
import PageWrapper from '@/components/wrapper'
import styles from '@/styles/blocks/_main.module.scss'
import Image from 'next/image'

const MainPage = () => {
	return (
		<main className={styles.main}>
			<h3 className={styles.main__title}>My Schedule</h3>
			<div className={styles.main__block}>
				<PageWrapper>
					<Banner />
					<div className={styles.slider}>
						<Slider />
					</div>
				</PageWrapper>
			</div>
			<div className={styles.main__block}>
				<PageWrapper>
					<Workout />
				</PageWrapper>
			</div>
			<Faq />
			<Form />
		</main>
	)
}

export default MainPage
