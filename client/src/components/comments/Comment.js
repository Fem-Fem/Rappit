import React from 'react'

const Comment = props => {
	return (
		<div>
			<li>
				{props.content}
			</li>
		</div>
	)
}