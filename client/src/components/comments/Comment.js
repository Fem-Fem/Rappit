import React from 'react'
import '../../comment.css'

const Comment = ({comment: {id, content}, userId, postId, title, deleteComment, updateComment}) =>
	<div>
		<div id="comment" className={id}>
			- {content}
			<button id="delete_button" 
			onClick={() => deleteComment(id, postId, parseInt(sessionStorage["logged_in"]))}>
				Delete
			</button>
			</div>
	</div>

export default Comment

