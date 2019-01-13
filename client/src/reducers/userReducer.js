export default function userReducer(state = {
	logged_in: []
}, action) {

	switch (action.type) {

		case 'STORE_USER':
			// const user = {title: action.username};
			return {
				...state,
				logged_in: [action.payload]
			}

		case 'UNSTORE_USER':
			return {
				...state,
				logged_in: [false]
			}

		default:
			return state;
	}
};