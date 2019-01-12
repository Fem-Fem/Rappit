const baseUrl = 'http://localhost:3000'


export const fetchPosts = () => {
	fetch(`${baseUrl}/posts`)
	.then(response => response.json())
	.then(posts =>dispatch({
		type: 'GET_POSTS',
	}))
	.catch(err => err)
}