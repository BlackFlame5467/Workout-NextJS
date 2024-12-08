import { it } from 'node:test'
import { versions } from 'process'

interface IFaq {
	id: number
	title: string
	text: string
}

export const faqItems: IFaq[] = [
	{
		id: 1,
		title: 'How many videos should i do per day?',
		text: "You are recommended to do ALL videos listed for each day, e.g. if a day has three videos, you should do all three. If a video is listed twice, you should do it twice. If you're having trouble doing them, stick to the low impact versions until you get stronger. That being said, if a video is labeled as optional then it’s up to you if you want to do it or not. The warmup and cool down videos are optional but highly recommended. However, at the end of the day, these schedules are my recommended guide - please feel free to make changes as necessary to suit your needs.",
	},
	{
		id: 2,
		title: 'One side of my body is stronger than the other, what can I do?',
		text: 'For some areas such as our upper body, our dominant hand tends to be our dominant arm as well. Some of us have a weak left leg, a weak left glute etc. There are many reasons for that, but if you do feel like there is an imbalance, incorporating uni-lateral exercises can help. This is because it allows you to focus on one side at a time and make sure you are doing the movement correctly on the body part.',
	},
	{
		id: 3,
		title: 'Can I do the same program twice in a row?',
		text: "It is alright to do the same program twice, but it's recommended to take a one week break in between programs as your body needs to heal and repair.",
	},
]
