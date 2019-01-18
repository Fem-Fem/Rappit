import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link} from "react-router-dom";

import { fetchPosts, createPost, deletePost, fetchPost } from '../actions/postActions'
import PostForm from '../components/posts/PostForm'
import Post from '../components/posts/Post'

class PostsContainer extends Component {
	componentWillMount() {
		this.props.fetchPosts()
	}

	render() {

		const { posts } = this.props
		return(
			<div className="center">
				<PostForm/>
				{posts.map(post => <Post key ={ post.id } post={post}
				fetchPost={this.props.fetchPost} deletePost={this.props.deletePost}/>)}
				<Link to='/logout'>Logout</Link>
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
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)