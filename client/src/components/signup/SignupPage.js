import React from "react";
import { Link} from "react-router-dom";

import SignupForm from "../../containers/signupForm";
import '../../login.css'

class SignupPage extends React.Component {
	render() {
		return (
			<div id="center_login_signup">
				No account? Make one to access Rappit!
				<div id="loginform">
					<SignupForm />
				</div>
				<div>
					<Link to='/login'>Login if you already have an account!</Link>
				</div>
			</div>
		)
	}
}

export default SignupPage