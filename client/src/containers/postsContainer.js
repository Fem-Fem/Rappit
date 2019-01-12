import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts, createPost, deletePost } from '../actions/userActions'
import createPost from '../components/posts/createPost'

class postsContainer extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	render() {

		const posts = this.props
		return(
			<div>
				<createPost/>
				{posts.map(post => <Post id= {post.id} post={post} deletePost={this.props.deletePost}/>)}
			</div>
		)
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
	fetchPosts,
	createPost,
	deletePost}
}, dispatch)

export default connect(null, mapDispatchToProps)(postsContainer)