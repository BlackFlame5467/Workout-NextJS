import Link from 'next/link'
import styles from '@/styles/blocks/_listItem.module.scss'

type Props = {
	title: string
	link: string
}

const ListItem = ({ title, link }: Props) => {
	return (
		<li className={styles.list__item}>
			<Link href={link}>{title}</Link>
		</li>
	)
}

export default ListItem
