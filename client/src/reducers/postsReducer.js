export default function manage(state = {
	posts: [],
	comments: [],
	logged_in: [],
}, action) {

	switch (action.type) {

		case 'GET_POSTS':

		case 'ADD_POST':
			const post = {title: action.title, content: action.content, id: cuidFN()};
			return {
				...state,
				posts: [...state.posts, post]
			}

		case 'EDIT_POST':

		case 'DELETE_POST':
			const posts = state.posts.filter(post => post.id! == action.id);
			return {...state, posts}

		case 'ADD_COMMENT':
			const comment = {content: action.comment.content, postId: action.comment.postId, id: cuidFN()};
			return {
				...state,
				comments: [...state.comments, comment]
			}

		case 'EDIT_COMMENT':

		case 'DELETE_COMMENT':
			const comments = state.comments.filter(comment => comment.id! == action.id);
			return {...state, comments}

		default:
			return state;
	}
};