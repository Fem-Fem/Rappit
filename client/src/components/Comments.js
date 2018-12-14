import React from "react";

const Comments = () => {
	return (
		<div>
			<p>
				Comments
			</p>
			<Route path='/:id' component={Comment} />
		</div>
	)
}

export default Comments