import React, {Component} from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

export default class SignupForm extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)

		this.state = {
		username: "",
		password: "",
	};

}


handleChange = event => {
	const name = event.target.name;
	this.setState({name: event.target.value});
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
				name="username"
				type="text"
				value={this.state.value}
				placeholder="Enter username"
				onChange={this.handleChange}
				/>
			</FormGroup>

			<FormGroup controlID="password">
				<ControlLabel>Password</ControlLabel>
				<FormControl
				name="password"
				type="password"
				value={this.state.value}
				placeholder="Enter password"
				onChange={this.handleChange}
				/>
			</FormGroup>
			<Button type="submit">Sign Up</Button>
		</form>
		)
	}
}