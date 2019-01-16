import React from "react";
import SignupForm from "./SignupForm";
import '../../login.css'

class SignupPage extends React.Component {
	render() {
		return (
			<div class="center">
				<div id="loginform">
					<SignupForm />
				</div>
			</div>
		)
	}
}

export default SignupPage