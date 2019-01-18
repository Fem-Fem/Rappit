import React from 'react'
import { Link} from "react-router-dom";
import '../../post.css'

const Post = ({post: {id, title, content, user_id}, deletePost, fetchPost}) => {
	return (
		<div>
			<div id="post" className={id}>
				<Link to={`/posts/${id}`} onClick={() => fetchPost(id)}>{title}</Link> - {content}
			</div>
			<button onClick={() => deletePost(id, user_id)}>Delete Post</button>
		</div>
	)
}

export default Post
