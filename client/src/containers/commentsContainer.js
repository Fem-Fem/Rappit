import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createComment, deleteComment } from '../actions/commentActions'
import CommentForm from '../components/comments/CommentForm'
import Comment from '../components/comments/Comment'

import { fetchPosts} from '../actions/postActions'
import '../comment.css'


class commentsContainer extends Component {
	// $("#comments").innerHTML = '';

	componentWillMount() {
	}

	render() {
		const { current_post, current_post_comments } = this.props
		return(
			<div>
			<div id="comment_form">
				<CommentForm post={this.props.current_post}/>
				</div>
				{current_post_comments.map(comment => <Comment id= {comment.id} comment={comment} postId={current_post.id} deleteComment={this.props.deleteComment}/>)}
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