const baseUrl = 'http://localhost:3000/posts'

export const createComment = comment => {

	let data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		body: JSON.stringify({comment})
	}

	fetch(`${baseUrl}/${comment.id}/comments`)
	.then(response => response.json())
	.then(comments =>dispatch({
		type: 'ADD_COMMENT',
	}))
	.catch(err => err)
}