import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

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