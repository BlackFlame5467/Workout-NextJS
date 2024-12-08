import styles from '@/styles/blocks/_main.module.scss'

type Props = {
	children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
	return <div className={styles.main__wrapper}>{children}</div>
}

export default PageWrapper
