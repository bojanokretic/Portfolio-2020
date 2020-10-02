<template>
	<div class="page page-home">
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	middleware: 'load-data',

	async fetch({ store, route }) {
		let slug = route.name
		await store.dispatch('pages/getPage', slug)
		await store.dispatch('projects/getFeaturedProjects')
	},

	computed: {
		...mapState('pages', ['page']),
		...mapState('projects', ['featuredProjects'])
	}
}
</script>

<style lang="scss">
</style>