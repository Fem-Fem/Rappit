const baseUrl = 'http://localhost:3000'

export const createComment = () => {
	fetch(`${baseUrl}/comments`)
	.then(response => response.json())
	.then(comments =>dispatch({
		type: 'ADD_COMMENT',
	}))
	.catch(err => err)
}