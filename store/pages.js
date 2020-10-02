import { deserializePagesAndProjects, getData } from '@/helpers/store-helpers.js';
import api from '@/api/api.js';

export const state = () => ({
	pages: [],
	page: null
})

export const actions = {
	async getPages({ commit }) {
		let { data: pages } = await getData(api.config.pagesUrl, this.$axios)
		commit('SET_PAGES', pages)
	},

	async getPage({ commit }, slug) {
		commit('SET_PAGE', slug)
	}
}

export const mutations = {
	SET_PAGES(state, pages) {
		state.pages = pages
	},

	SET_PAGE(state, slug) {
		let page = deserializePagesAndProjects(state.pages, slug)
		state.page = {
			hero: page.content.hero[0]
		}
	}
}