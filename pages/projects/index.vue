<template>
	<div class="page page-projects">
		
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	middleware: 'load-data',

	async fetch({ store, route }) {
		let slug = route.name
		await store.dispatch('pages/getPage', slug)
	},

	computed: {
		...mapState('pages', ['page']),
		...mapState('projects', ['projects'])
	}
}
</script>

<style lang="scss">
</style>