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
		return(
			<div>
				<form>
					<p>
						<label>Title</label>
						<input type="text" onChange={(event) => this.handleTitleChange(event)}/>
						<label>Content</label>
						<input type="text" onChange={(event) => this.handleContentChange(event)}/>
					</p>
					<input type="submit" />
				</form>
			<div>
		)
	)
}

export default connect(null, mapDispatchtoProps)(CreatePost)