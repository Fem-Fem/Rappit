const baseUrl = 'http://localhost:3000'

export const fetchPosts = () => {
	let data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	return dispatch => {
		fetch(`${baseUrl}/posts`, data)
		.then(response => response.json())
		.then(posts => dispatch({
			type: 'GET_POSTS',
		}))
		.catch(err => err)
	}
}

export const createPost = post => {
	let data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({post})
	}

	fetch(`${baseUrl}/posts`, data)
	.then(response => response.json())
	.then(post => dispatch({
		type: 'ADD_POST',
	}))
	.catch(err => err)
}

export const editPost = (id) => {
	let data = {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({post})
	}

	fetch(`${baseUrl}/posts/${id}`, data)
	.then(response => response.json())
	.then(post =>dispatch({
		type: 'EDIT_POST',
	}))
	.catch(err => err)
}

export const deletePost = id => {
	let data = {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	fetch(`${baseUrl}/posts/${post.id}`, data)
	.then(response => response.json())
	.then(post =>dispatch({
		type: 'DELETE_POST',
	}))
	.catch(err => err)
}