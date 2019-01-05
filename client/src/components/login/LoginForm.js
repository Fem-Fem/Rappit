import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap"

export default class LoginForm extends Component {

	constructor(props) {
		super(props);

	this.state = {
		username: "",
		password: "",
	};
}

validateForm() {
	return this.state.username.length > 0 && this.sate.password.length > 0;
}

handleChange = event => {
	this.setState({
		[event.target.id]: event.target.value
	});
}

handleSubmit = event => {
	event.preventDefault();
}

render() {
	return (
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<FormControl
				type="text"
				value={this.state.value}
				placeholder="Enter username"
				onChange={this.handleChange}
				/>
			</FormGroup>
			<FormGroup controlID="password">
				<ControlLabel>Password</ControlLabel>
				<FormControl
				value={this.state.value}
				placeholder="Enter password"
				onChange={this.handleChange}
				/>
			</FormGroup>
			<Button type="submit">Login</Button>
		</form>
		)
	}
}