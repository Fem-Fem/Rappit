export default function postsReducer(state = {
	posts: [],
	logged_in: []
}, action) {

	switch (action.type) {

		case 'GET_POSTS':
			return {
				...state, posts: action.payload
			}

		case 'ADD_POST':
			return {
				...state,
				posts: [...state.posts, action.payload]
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