import React from "react";

const Posts = () => {
	return (
		<div>
			<p>
				Posts
			</p>
			<Route path='/:id' component={Post} />
		</div>
	)
}

export default Posts