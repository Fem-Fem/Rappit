const baseUrl = 'http://localhost:3001'

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
			payload: posts
		}))
		.catch(err => err)
	}
}

export const fetchPost = id => {
	let data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}
	return dispatch => {
		fetch(`${baseUrl}/posts/${id}`, data)
		.then(response => response.json())
		.then(post => dispatch({
			type: 'GET_POST',
			payload: post
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

	return dispatch => {
		fetch(`${baseUrl}/posts`, data)
		.then(response => response.json())
		.then(post => dispatch({
			type: 'ADD_POST',
			payload: post
		}))
		.catch(err => err)
	}
}

export const editPost = (id) => {
	let data = {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	}

	return dispatch => {
		fetch(`${baseUrl}/posts/${id}`, data)
		.then(response => response.json())
		.then(post =>dispatch({
			type: 'EDIT_POST',
			payload: post
		}))
		.catch(err => err)
	}
}

export const deletePost = (id, user_id) => {
	let data = {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({user_id})
	}
	return dispatch => {
		fetch(`${baseUrl}/posts/${id}`, data)
		.then(response => response.json())
		.then(post =>dispatch({
			type: 'DELETE_POST',
			payload: post
		}))
		.catch(err => err)
	}
}