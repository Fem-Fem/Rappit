const baseUrl = 'http://localhost:3001/posts'

export const createComment = comment => {

	let data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({comment})
	}

	fetch(`${baseUrl}/${comment.id}/comments`, data)
	.then(response => response.json())
	.then(comments =>dispatch({
		type: 'ADD_COMMENT',
	}))
	.catch(err => err)
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
	
	fetch(`${baseUrl}/${comment.id}/comments/${comment.id}`, data)
	.then(response => response.json())
	.then(comments =>dispatch({
		type: 'EDIT_COMMENT',
	}))
	.catch(err => err)
}

export const deleteComment = (id, postId) => {

	let data = {
		method: 'DELETE',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}
	
	fetch(`${baseUrl}/${postId}/comments/${id}`, data)
	.then(response => response.json())
	.then(comments =>dispatch({
		type: 'DELETE_COMMENT',
	}))
	.catch(err => err)
}