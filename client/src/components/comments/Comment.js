import React from 'react'
import '../../comment.css'

const Comment = ({comment: {id, content}, postId, title, deleteComment}) =>
	<div>
		<div id="comment">
			-{content}
			<button onClick={() => deleteComment(id, postId)}>Delete</button>
			</div>
	</div>

export default Comment

