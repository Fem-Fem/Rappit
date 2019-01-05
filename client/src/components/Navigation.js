import React from "react";
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const Navigation = () => {
	return(
		<div>
			<NavLink to="/posts">All Posts</NavLink>
			<NavLink to="/posts/1">Your Posts</NavLink>
			<NavLink to="/">Log Out</NavLink>
			<NavLink to="/posts/new">Make A Post</NavLink>
		</div>
	)
}

export default Navigation;