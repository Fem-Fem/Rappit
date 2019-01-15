import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Link} from "react-router-dom";
import Signup from './signup/SignupPage';
import Login from './login/LoginPage'
import PostsContainer from '../containers/postsContainer';


const Navigation = () => {
	return(
		<Router>
			<Switch>
			<div>
				<Route exact path='/' render={ () => loggedIn() ? <PostsContainer/> : <Redirect to="/login"/>}/>
				<Route path='/login' render={ () => loggedIn() ? <Redirect to="/"/> : <Login/>}/>
				<Route path='/signup' render={ () => loggedIn() ? <Redirect to="/"/> : <Signup/>}/>
				<Route path='/posts' render={ () => loggedIn() ? <PostsContainer/> : <Redirect to="/"/> }/>
				<Route path='/logout' render={ () => logout()}/>
			</div>
			</Switch>
		</Router>
	)
}

const loggedIn = () => !!sessionStorage['logged_in']

const logout = () => {
	if(sessionStorage['loggedIn']) sessionStorage.removeItem('logged_in')

	return <Redirect to="/login"/>
}

export default Navigation;