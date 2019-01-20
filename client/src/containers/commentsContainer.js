import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createComment, deleteComment } from '../actions/commentActions'
import { fetchPosts} from '../actions/postActions'

import CommentForm from '../components/comments/CommentForm'
import Comment from '../components/comments/Comment'

import '../comment.css'


class CommentsContainer extends Component {

	componentWillMount() {
	}

	render() {
		const { current_post, current_post_comments } = this.props
		return(
			<div id="comments_container">
				<div id="comment_form">
					<CommentForm post={this.props.current_post}/>
				</div>
				{current_post_comments.map(comment => <Comment key ={ comment.id } comment={comment} 
				postId={current_post.id} 
				userId={comment.user_id} 
				deleteComment={this.props.deleteComment}/>)}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		user: state.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer)