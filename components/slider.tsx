'use client'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import '@/styles/blocks/_swiper.scss'

import { days } from '@/data/days'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import SliderItem from './slider-item'

const Slider = () => {
	const firstNotDoneIndex = days.findIndex(day => !day.isDone)

	return (
		<>
			<button className={'swiper__left'} id='arrowLeft'>
				<Image src={'/arrow.svg'} alt='arrowLeft' width={15} height={15} />
			</button>
			<Swiper
				slidesPerView={6}
				spaceBetween={10}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					360: {
						slidesPerView: 3.3,
						spaceBetween: 0,
					},
					450: {
						slidesPerView: 4,
						spaceBetween: 0,
					},
					570: {
						slidesPerView: 5,
						spaceBetween: 0,
					},
					756: {
						slidesPerView: 6,
						spaceBetween: 10,
					},
				}}
				modules={[Navigation]}
				navigation={{
					nextEl: '#arrowRight',
					prevEl: '#arrowLeft',
				}}
				className={'swiper'}
			>
				{days.map((day, index) => (
					<SwiperSlide key={day.id}>
						<SliderItem
							title={day.title}
							isDone={day.isDone}
							workoutType={day.workoutType}
							isFirstNotDone={index === firstNotDoneIndex}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<button className={'swiper__right'} id='arrowRight'>
				<Image src={'/arrow.svg'} alt='arrowRight' width={15} height={15} />
			</button>
		</>
	)
}

export default Slider
