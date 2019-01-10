import React, { Component } from 'react';

const Posts = (props) => (
		<div>
			<h1>Posts</h1>
			{props.posts.map(post => <h1>{post.title}</h1>)}
		</div>
	)

export default Posts;