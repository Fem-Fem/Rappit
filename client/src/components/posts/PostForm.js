import React, {Component} from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';

import { createPost } from '../../actions/postActions'
import '../../post.css'



class PostForm extends Component {

	constructor() {
		super();
		this.state = {
			user_id: sessionStorage['logged_in'],
			content: '',
			title: '',
		};
	}

handleTitleChange = event => {
		this.setState({
			title: event.target.value
		})
	}

handleContentChange = event => {
		this.setState({
			content: event.target.value,
		})
	}

handleSubmit = event => {
	event.preventDefault();

	console.log(this.state);
	this.props.createPost(this.state)
	this.setState({
		title: "",
		content: ""})
}

render(){
	return (
		<div>
		<div className="newformtitle">
			Upload a New Post!
		</div>
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Title </ControlLabel>
				<FormControl
				name="title"
				type="text"
				value={this.state.value}
				placeholder="Enter title"
				onChange={this.handleTitleChange}
				/>
			</FormGroup>

			<FormGroup>
				<ControlLabel>Content </ControlLabel>
				<FormControl
				name="content"
				type="text"
				value={this.state.value}
				placeholder="Enter content"
				onChange={this.handleContentChange}
				/>
			</FormGroup>
			<Button type="submit" id="upload_button">Upload Post</Button>
		</form>
		</div>
		)
	}
}


const mapDispatchToProps = dispatch => bindActionCreators({
	createPost
}, dispatch)

export default connect(null, mapDispatchToProps)(PostForm)