import React from 'react'
import '../../comment.css'

const Comment = ({comment: {id, content}, userId, postId, title, deleteComment}) =>
	<div>
		<div id="comment">
			-{content}
			<button onClick={() => deleteComment(id, postId, userId)}>Delete</button>
			</div>
	</div>

export default Comment

