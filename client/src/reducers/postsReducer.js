export default function manage(state = {
	posts: [],
	comments: [],
	logged_in: [],
}, action) {

	switch (action.type) {

		case 'ADD_POST':
			const post = {title: action.title, content: action.content, id: action.id};
			return {
				...state,
				posts: [...state.posts, post]
			}

		case 'DELETE_POST':
			const posts = state.posts.filter(post => post.id !== action.id);
			return {...state, posts}

		case 'ADD_COMMENT':
			const comment = {content: action.comment.content, postId: action.comment.postId, id: action.comment.id};
			return {
				...state,
				comments: [...state.comments, comment]
			}

		case 'DELETE_COMMENT':
			const comments = state.comments.filter(comment => comment.id !== action.id);
			return {...state, comments}

		default:
			return state;
	}
};