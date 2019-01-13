const baseUrl = 'http://localhost:3000'

export const loginUser = user => {
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
		.then(user => dispatch({
			type: 'STORE_USER',
			payload: user
		}))
		.catch(err => err)
	}
}

// export const signupUser = user => {
// 	let data = {
// 		method: 'POST',
// 		headers: {
// 			'Accept': 'application/json',
// 			'Content-Type': 'application/json'
// 		},
// 		body: JSON.stringify({user})
// 	}

// 	return dispatch =>{
// 		fetch(`${baseUrl}/signup`, data)
// 		.then(response => response.json())
// 		.then(user => dispatch({
// 			type: 'STORE_USER',
// 		}))
// 		.catch(err => err)
// 	}
// }