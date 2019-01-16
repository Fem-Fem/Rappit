import React from "react";
import LoginForm from "./LoginForm";
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, withRouter, Link} from "react-router-dom";
import Signup from '../signup/SignupPage';
// import Navigation from "../Navigation"

class LoginPage extends React.Component {
	render() {
		return (
			<div>
				<LoginForm />
					<Router>
						<Switch>
							<div>
								<Link to='/signup'>Signup</Link>
								<Route exact path='/signup' Component={withRouter(Signup)}/>
							</div>
						</Switch>
					</Router>
			</div>
		)
	}
}

export default withRouter(LoginPage)
