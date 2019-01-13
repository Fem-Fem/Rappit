import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchComments, createComment, deleteComment } from '../actions/commentActions'
import CommentForm from '../components/comments/CommentForm'
import Comment from '../components/comments/Comment'

class commentsContainer extends Component {
	componentWillMount() {
		this.props.fetchComments()
	}

	render() {

		const { comments } = this.props
		return(
			<div>
				<CommentForm/>
				{comments.map(post => <Comment id= {comment.id} comment={comment} deleteComment={this.props.deleteComment}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user.logged_in,
		posts: state.posts.posts
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
	fetchComments,
	createComment,
	deleteComment
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(commentsContainer)