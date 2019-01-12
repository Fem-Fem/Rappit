import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink, Link} from "react-router-dom";
import Signup from './signup/SignupPage';
import Login from './login/LoginPage'
//import Posts from '././containers/postsContainer';


const Navigation = () => {
	return(
		<Router>
			<div>
				<ul>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/signup">Signup</Link></li>
					<li><Link to="/posts">All Posts</Link></li>
					<li><Link to="/newpost">New Post</Link></li>
				</ul>

				<ul>
					<Route path="/login" component={Login}/>
					<Route path="/signup" component={Signup}/>
				</ul>
			</div>
		</Router>
	)
}

export default Navigation;