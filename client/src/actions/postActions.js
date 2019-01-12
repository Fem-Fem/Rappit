const baseUrl = 'http://localhost:3000'

export const fetchPosts = () => {
	let data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}

	fetch(`${baseUrl}/posts`, data)
	.then(response => response.json())
	.then(posts =>dispatch({
		type: 'GET_POSTS',
	}))
	.catch(err => err)
}

export const createPost = post => {
	let data = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		body: JSON.stringify({post})
	}

	fetch(`${baseUrl}/posts`)
	.then(response => response.json())
	.then(post =>dispatch({
		type: 'ADD_POST',
	}))
	.catch(err => err)
}