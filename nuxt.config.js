export default {
	head: {
		title: 'Portfolio2020',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500;700&display=swap' }
		]
	},

	css: [
		'@/assets/css/main.css',
		'@/assets/scss/main.scss'
	],

	modules: [
		[
			'@nuxtjs/axios'
		],
	]
}