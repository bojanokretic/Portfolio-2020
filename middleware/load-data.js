// function dispatches actions to the vuex if
// it is initial load to the application
export default async function ({ store, from }) {
	let initial = !from;
	
	if (initial) {
		await Promise.all([
			store.dispatch('pages/getPages'),
			store.dispatch('projects/getProjects')
		])
	}
}