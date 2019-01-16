import React from 'react'
import '../../comment.css'

const Comment = ({comment: {id, content}, userId, postId, title, editComment, deleteComment, updateComment}) =>
	<div>
		<div id="comment">
			-{content}
			<button onClick={() => deleteComment(id, postId, userId)}>Delete</button>
			<button onClick={() => editComment(id, postId, userId)}>Edit</button>
			</div>
	</div>

export default Comment

