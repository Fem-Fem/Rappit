import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../actions/userActions'


class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
		username: "",
		password: "",
	};

}

handleUsernameChange = event => {
	this.setState({
		username: event.target.value
	})
}

handlePasswordChange = event => {
	this.setState({
		password: event.target.value,
	})
}

handleSubmit = event => {
	event.preventDefault();

	const user = this.state
	this.props.loginUser(user, () => this.props.history.push('/'))
}

render() {
	return (
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username </ControlLabel>
				<FormControl
				name="username"
				type="text"
				value={this.state.value}
				placeholder="Enter username"
				onChange={this.handleUsernameChange}
				/>
			</FormGroup>

			<FormGroup controlID="password">
				<ControlLabel>Password </ControlLabel>
				<FormControl
				name="password"
				type="password"
				value={this.state.value}
				placeholder="Enter password"
				onChange={this.handlePasswordChange}
				/>
			</FormGroup>
			<Button type="submit" id="login_signup">Login</Button>
		</form>
		)
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	loginUser
}, dispatch)

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))