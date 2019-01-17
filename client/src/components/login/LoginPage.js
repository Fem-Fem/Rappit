import React from "react";
import LoginForm from "./LoginForm";
import { withRouter, Link} from "react-router-dom";
import Signup from '../signup/SignupPage';
import '../../login.css'

class LoginPage extends React.Component {
	render() {
		return (
			<div class="center">
				<div id="loginform">
					<LoginForm />
				</div>
				<div>
					<Link to='/signup'>Signup</Link>
				</div>
			</div>
		)
	}
}

export default withRouter(LoginPage)
