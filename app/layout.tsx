import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/style.scss'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Workout',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${font.className} antialiased`}>
				<div className='min-h-screen flex flex-col'>
					<Header />
					<div className='container flex-1'>{children}</div>
					<Footer />
				</div>
			</body>
		</html>
	)
}
