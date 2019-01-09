import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export default class LoginForm extends Component {

	constructor(props) {
		super(props);

		this.handleUsernameChange = this.handleUsernameChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)

		this.handleSubmit = this.handleSubmit.bind(this)

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
	console.log(this.state)
}

render() {
	return (
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<FormControl
				name="username"
				type="text"
				value={this.state.value}
				placeholder="Enter username"
				onChange={this.handleUsernameChange}
				/>
			</FormGroup>

			<FormGroup controlID="password">
				<ControlLabel>Password</ControlLabel>
				<FormControl
				name="password"
				type="password"
				value={this.state.value}
				placeholder="Enter password"
				onChange={this.handlePasswordChange}
				/>
			</FormGroup>
			<Button type="submit">Login</Button>
		</form>
		)
	}
}