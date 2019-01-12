const baseUrl = 'http://localhost:3000'

export const loginUser = () => {
	fetch(`${baseUrl}/login`)
	.then(response => response.json())
	.then(posts =>dispatch({
		type: 'STORE_USER',
	}))
	.catch(err => err)
}

export const signupUser = () => {
	fetch(`${baseUrl}/signup`)
	.then(response => response.json())
	.then(posts =>dispatch({
		type: 'STORE_USER',
	}))
	.catch(err => err)
}

export const logoutUser = () => {
	fetch(`${baseUrl}/logout`)
	.then(response => response.json())
	.then(posts =>dispatch({
		type: 'UNSTORE_USER',
	}))
	.catch(err => err)
}