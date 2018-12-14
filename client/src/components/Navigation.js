import React from "react";
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const Navigation = () => {
	return(
		<div>
			<NavLink to="/posts">All Posts</NavLink>
			<NavLink to="/posts/1">Your Posts</NavLink>
		</div>
	)
}

export default Navigation;