const baseUrl = 'http://localhost:3001/posts'

export const fetchComments = post => {
	let data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({post})
	}

	return dispatch => {
		fetch(`${baseUrl}/posts`, data)
		.then(response => response.json())
		.then(comments => dispatch({
			type: 'GET_COMMENTS',
			payload: comments
		}))
		.catch(err => err)
	}
}

export const createComment = comment => {

	let data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({comment})
	}

	return dispatch => {
		fetch(`${baseUrl}/${comment.id}/comments`, data)
		.then(response => response.json())
		.then(comments =>dispatch({
			type: 'ADD_COMMENT',
		}))
		.catch(err => err)
	}
}

export const editComment = (id, comment) => {

	let data = {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({comment})
	}
	
	return dispatch => {
		fetch(`${baseUrl}/${comment.id}/comments/${comment.id}`, data)
		.then(response => response.json())
		.then(comments =>dispatch({
			type: 'EDIT_COMMENT',
		}))
		.catch(err => err)
	}
}

export const deleteComment = (id, postId) => {

	let data = {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}
	
	return dispatch => {
		fetch(`${baseUrl}/${postId}/comments/${id}`, data)
		.then(response => response.json())
		.then(comments =>dispatch({
			type: 'DELETE_COMMENT',
		}))
		.catch(err => err)
	}
}