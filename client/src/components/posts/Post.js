import React from 'react'

const Post = ({post: {id, title, content}, deletePost}) => {
	return (
		<div>
			<li>
				{title}
				<button onClick={() => deletePost(id, postId)}>Delete</button>
			</li>
		</div>
	)
}

export default Post