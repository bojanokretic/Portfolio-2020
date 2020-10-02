// exported function which returns a matched object from array
// based on params (slug in this case)
export const deserializePagesAndProjects = function(arr, params) {
	return arr.find(d => d.slug == params)
}

// function which returns fetched data response
export const getData = async function(url, axios) {
	let response = await axios.get(url)
	return {
		data: response.data.stories
	}
}