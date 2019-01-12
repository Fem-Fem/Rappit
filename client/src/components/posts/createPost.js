import React from "react";
import { connect } from "react-redux";

class CreatePost extends Component {

	constructor() {
		super();
		this.state = {
			content: '',
			title: '',
		};
	}

	handleTitleChange(event) {
		this.setState({
			title: event.target.value
		})
	}

	handleContentChange(event) {
		this.setState({
			content: event.target.value,
		})
	}

render(
	return (
		<form onSubmit = {this.handleSubmit}>
			<FormGroup>
				<ControlLabel>Username</ControlLabel>
				<FormControl
				name="title"
				type="text"
				value={this.state.value}
				placeholder="Enter title"
				onChange={this.handleTitleChange}
				/>
			</FormGroup>

			<FormGroup
				<ControlLabel>Content</ControlLabel>
				<FormControl
				name="content"
				type="text"
				value={this.state.value}
				placeholder="Enter content"
				onChange={this.handleContentChange}
				/>
			</FormGroup>
			<Button type="submit">Upload Post</Button>
		</form>
		)
)

export default connect(null, mapDispatchtoProps)(createPost)