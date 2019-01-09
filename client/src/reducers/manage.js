import cuid from 'cuid';
export const cuidFN = cuid;

export default function manage(state = {
	posts: [],
	comments: [],
	logged_in: [],
}, action) {

	switch (action.type) {

		case 'ADD_POST':
			const post = {title: action.title, content: action.content, id: cuidFN()};
			return {
				...state,
				comments: [...state.comments, comment]
			}

		case 'DELETE_POST':
			const posts = state.posts.filter(filter => filter.id! == action.id);
			return {...state, posts}

	}
}