<template>
	<div class="page page-informations">
		
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
		...mapState('pages', ['page'])
	}
}
</script>

<style lang="scss">
</style>