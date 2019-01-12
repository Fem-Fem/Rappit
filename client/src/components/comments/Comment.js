import React from 'react'

const Comment = ({comment: {id, content}, postId, deleteComment}) =>
	<div>
		<li>
			{description}
			<button onClick={() => deleteComment(id, postId)}
			{props.content}
		</li>
	</div>

export default Comment

import React from 'react'