import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, Link} from "react-router-dom";
import Signup from '../signup/SignupPage';

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<LoginForm />
					<Router>
						<Switch>
							<div>
								<Link to='/signup'>Signup</Link>
								<Route path='/signup' Component={Signup}/>
							</div>
						</Switch>
					</Router>
			</div>
		)
	}
}

export default LoginPage
