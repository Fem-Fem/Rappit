import React from "react";
import { connect } from "react-redux";

class CreateComment extends Component {

	constructor() {
		super();
		this.state = {
			content: '',
		};
	}

	handleChange(event) {
		this.setState({
			content: event.target.value
		})
	}


	render(
		return(
			<div>
				<form>
					<p>
						<label>Content</label>
						<input type="text" onChange={(event) => this.handleChange(event)}/>
					</p>
					<input type="submit" />
				</form>
			<div>
		)
	)
}

export default connect(null, mapDispatchtoProps)(CreatePost)