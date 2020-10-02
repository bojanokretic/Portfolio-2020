<template>
	<div class="project">
		
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	middleware: 'load-data',
	computed: {
		...mapState('projects', ['project'])
	},
	async fetch({ store, route }) {
		let slug = route.params.slug
		await store.dispatch('projects/getProject', slug)
	}
}
</script>

<style lang="scss">

</style>