import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createComment, deleteComment } from '../actions/commentActions'
import CommentForm from '../components/comments/CommentForm'
import Comment from '../components/comments/Comment'

import { fetchPosts} from '../actions/postActions'


class commentsContainer extends Component {
	// $("#comments").innerHTML = '';

	componentWillMount() {
	}

	render() {
		const { current_post, current_post_comments } = this.props
		return(
			<div id="comments">
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
	createComment,
	deleteComment,
	fetchPosts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(commentsContainer)