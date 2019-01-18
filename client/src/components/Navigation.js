import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Signup from './signup/SignupPage';
import Login from './login/LoginPage'
import PostsContainer from '../containers/PostsContainer';
import CommentsContainer from '../containers/commentsContainer';

const Navigation = () => {
	return(
		<Router>
			<Switch>
			<div>
				<Route exact path='/' render={ () => loggedIn() ? <Redirect to="/posts"/> : <Redirect to="/login"/>}/>
				<Route path='/login' render={ () => loggedIn() ? <Redirect to="/"/> : <Login/>}/>
				<Route path='/signup' render={ () => loggedIn() ? <Redirect to="/"/> : <Signup/>}/>
				<Route path='/posts' render={ () => loggedIn() ? <PostsContainer/> : <Redirect to="/"/> }/>
				<Route path='/logout' render={ () => logout()}/>
				<Route path='/posts/:id' render={ () => loggedIn() ? <CommentsContainer/> : <Redirect to="/"/>}/>
			</div>
			</Switch>
		</Router>
	)
}

const loggedIn = () => !!sessionStorage['logged_in'] && !(sessionStorage['logged_in'] === 'undefined')

const logout = () => {
	if(sessionStorage['logged_in']) sessionStorage.removeItem('logged_in')

	return <Redirect to="/login"/>
}

export default Navigation;
