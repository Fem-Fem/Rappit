import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';

import { createComment } from '../../actions/commentActions'

class CommentForm extends Component {

	constructor() {
		super();
		this.state = {
			post_id: '',
			user_id: sessionStorage['logged_in'],
			content: '',
		};

	}

handleChange = event => {
	this.setState({
		post_id: this.props.post.id,
		content: event.target.value
	})
}

handleSubmit = event => {
	event.preventDefault();

	console.log(this.state);
	const postId = this.props.post.id
	this.props.createComment(this.state, postId)
}


	render() {
		return (
			<form onSubmit = {this.handleSubmit}>
				<FormGroup>
					<ControlLabel>Upload a New Comment! </ControlLabel>
					<FormControl
					name="content"
					type="text"
					value={this.state.value}
					placeholder="Enter content"
					onChange={this.handleChange}
					/>
				</FormGroup>

				<Button type="submit" id="upload_button">Upload Comment</Button>
			</form>
			)
		}
	}

const mapDispatchToProps = dispatch => bindActionCreators({
	createComment
}, dispatch)

export default connect(null, mapDispatchToProps)(CommentForm)