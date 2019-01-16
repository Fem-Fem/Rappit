import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom'
import Signup from './signup/SignupPage';
import Login from './login/LoginPage'
import '../login.css'

const Home = () => {
	return(
		<Router>
			<Switch>
				<div class="center">
					<Link to='/logout'>Logout</Link>
					<Route path='/logout' render={ () => logout()}/>
				</div>
			</Switch>
		</Router>
		)
	}

const loggedIn = () => !!sessionStorage['logged_in']

const logout = () => {
	if(sessionStorage['logged_in']) sessionStorage.removeItem('logged_in')
	return <Redirect to="/login"/>
}

export default Home;