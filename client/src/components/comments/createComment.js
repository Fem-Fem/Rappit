import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createComment } from '../actions/postActions'

class CreateComment extends Component {

	constructor() {
		super();
		this.state = {
			content: '',
		};

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

handleChange = event => {
	this.setState({
		content: event.target.value
	})
}

handleSubmit = event => {
	event.preventDefault();
	console.log(this.state);
	this.setState({content: ""})
}


	render() {
		return (
			<form onSubmit = {this.handleSubmit}>
				<FormGroup>
					<ControlLabel>Comment</ControlLabel>
					<FormControl
					name="content"
					type="text"
					value={this.state.value}
					placeholder="Enter content"
					onChange={this.handleChange}
					/>
				</FormGroup>

				<Button type="submit">Upload Comment</Button>
			</form>
			)
		}
	}
	
export default connect(null, mapDispatchtoProps)(createComment)