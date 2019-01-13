import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';

import { createComment } from '../../actions/commentActions'

class CommentForm extends Component {

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
	const {postId} = this.props
	this.props.createComment(this.state, postId)
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

const mapDispatchToProps = dispatch => bindActionCreators({
	createComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentForm)