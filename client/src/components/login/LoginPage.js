import React from "react";
import LoginForm from "./LoginForm";
import { withRouter, Link} from "react-router-dom";
import '../../login.css'

class LoginPage extends React.Component {
	render() {
		return (
			<div id="center_login_signup">
				Have an Account? Log in to Rappit!
				<div id="loginform">
					<LoginForm />
				</div>
				<div>
					<Link to='/signup'>Sign Up if you don't have an account!</Link>
				</div>
			</div>
		)
	}
}

export default withRouter(LoginPage)
