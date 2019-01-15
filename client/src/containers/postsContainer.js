import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, createPost, deletePost, editPost, fetchPost } from '../actions/postActions'
// import {fetchComments} from '../actions/commentActions'
import PostForm from '../components/posts/PostForm'
import Post from '../components/posts/Post'

class PostsContainer extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	render() {

		const { posts } = this.props
		return(
			<div>
				<PostForm/>
				{posts.map(post => <Post id= {post.id} post={post} fetchPost={this.props.fetchPost} deletePost={this.props.deletePost} editPost={this.props.editPost}/>)}
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
	fetchPosts,
	fetchPost,
	createPost,
	deletePost,
	editPost
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)