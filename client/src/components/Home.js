import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
	return(
		<div>
			<p>Log In, or sign up!</p>
			<ul>
				<li><Link to="/login">Login</Link></li>
				<li><Link to="/signup">Signup</Link></li>
			</ul>
		</div>
	)
}

export default Home;