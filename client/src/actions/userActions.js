const baseUrl = 'http://localhost:3001'

export const loginUser = (user, callback) => {
	let data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({user})
	}

	return dispatch => {
		fetch(`${baseUrl}/login`, data)
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				sessionStorage.setItem('logged_in', user.id)
				dispatch({
				type: 'STORE_USER',
				payload: user
			})
			callback()
		} else {
			const error = user.errors.error
			alert(`${error}`)
		}
		})
		.catch(err => err)
	}
}

export const signupUser = (user, callback) => {
	let data = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({user})
	}

	return dispatch =>{
		fetch(`${baseUrl}/signup`, data)
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				sessionStorage.setItem('logged_in', user.id)
				dispatch({
				type: 'STORE_USER',
				payload: user	
			})
			callback()
		} else {
			const error = user.errors
			alert(`${error}`)
		}
		})
		.catch(err => err)
	}
}