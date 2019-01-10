import React from "react";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from './signup/SignupPage';
import Login from './login/LoginPage'

const posts = [
{
	title: "Kendrick Lamar",
	content: "I really believe"
}
]

const Posts = () => 
<div>
Posts This
</div>;

const Home = () => {
	return(
		<div>
			<Posts/>
		<Router>
			<div>
				<p>Log In, or sign up!</p>
				<ul>
					<li><Link to="/login">Login</Link></li>
					<li><Link to="/signup">Signup</Link></li>
					<li><Link to="/comments">Comments</Link></li>
				</ul>

				<ul>
					<Route path="/login" component={Login}/>
					<Route path="/signup" component={Signup}/>
				</ul>
			</div>
		</Router>
		</div>
		)
	}

export default Home;