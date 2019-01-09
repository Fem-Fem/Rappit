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

export default connect(null, mapDispatchtoProps)(CreateComment)