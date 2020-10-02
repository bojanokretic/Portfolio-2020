import { deserializePagesAndProjects, getData } from '@/helpers/store-helpers.js';
import api from '@/api/api.js';

export const state = () => ({
	projects: [],
	featuredProjects: [],
	project: null
})

export const actions = {
	async getProjects({ commit }) {
		let { data: projects } = await getData(api.config.projectsUrl, this.$axios)
		commit('SET_PROJECTS', projects)
	},

	async getFeaturedProjects({ commit }) {
		commit('SET_FEATURED_PROJECTS')
	},

	async getProject({ commit }, slug) {
		commit('SET_PROJECT', slug)
	},
}

export const mutations = {
	SET_PROJECTS(state, projects) {
		state.projects = projects
	},

	SET_FEATURED_PROJECTS(state) {
		let featuredProjects = state.projects.filter(f => f.content.featured)
		state.featuredProjects = featuredProjects
	},

	SET_PROJECT(state, slug) {
		let project = deserializePagesAndProjects(state.projects, slug)
		state.project = project
	}
}
