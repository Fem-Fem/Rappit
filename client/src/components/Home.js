import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Signup from './signup/SignupPage';
import Login from './login/LoginPage'

const Home = () => {
	return(
		<div>
			Login or Signup to use Rappit!
		</div>
		)
	}

export default Home;