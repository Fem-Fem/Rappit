import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, createPost, deletePost } from '../actions/postActions'
import PostForm from '../components/posts/PostForm'
import Post from '../components/posts/Post'

class postsContainer extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	render() {

		const posts = this.props
		return(
			<div>
				<PostForm/>
				{posts.map(post => <Post id= {post.id} post={post} deletePost={this.props.deletePost}/>)}
			</div>
		)
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
	fetchPosts,
	createPost,
	deletePost
}, dispatch)

export default connect(null, mapDispatchToProps)(postsContainer)