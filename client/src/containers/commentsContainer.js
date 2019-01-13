import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchComments, createComment, deleteComment } from '../actions/commentActions'
import CommentForm from '../components/comments/CommentForm'
import Comment from '../components/comments/Comment'

class commentsContainer extends Component {
	componentWillMount() {
		this.props.fetchComments(this.props.current_post.id)
	}

	render() {

		const { current_post_comments } = this.props.current_post_comments
		return(
			<div>
				<CommentForm/>
				{current_post_comments.map(comment => <Comment id= {comment.id} comment={comment} deleteComment={this.props.deleteComment}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.logged_in,
		posts: state.posts.posts,
		current_post: state.posts.current_post,
		current_post_comments: state.posts.current_post_comments
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
	fetchComments,
	createComment,
	deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(commentsContainer)