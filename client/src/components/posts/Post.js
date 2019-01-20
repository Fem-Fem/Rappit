import React from 'react'
import { Link} from "react-router-dom";

import '../../post.css'

const Post = ({post: {id, title, content, user_id}, deletePost, fetchPost}) => {
	return (
		<div>
			<div id="post" className={id}>
				<Link to={`/posts/${id}`} onClick={() => fetchPost(id)}>
					<button id="open_comments">{title} : {content}</button>
				</Link>
				<button id="delete_button" 
					onClick={() => deletePost(id, parseInt(sessionStorage["logged_in"]))}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Post
