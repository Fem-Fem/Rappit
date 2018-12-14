import React from "react";

class createPost extends Component {

	constructor() {
		super();
		this.state = {
			content: '',
			title: '',
		};
	}

	handleChange(event) {
		this.setState({
			title: event.target.value
			content: event.target.value,
		})
	}

	render(
		return(
			<div>
				<form>
					<p>
						<label>Title</label>
						<input type="text" />
						<label>Content</label>
						<input type="text" />
					</p>
					<input type="submit" />
				</form>
			<div>
		)
	)
}

export default Post;