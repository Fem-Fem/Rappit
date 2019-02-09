import React, {Component} from 'react';


class Like extends Component {

	constructor() {
		super();
		this.state = {
			counter: 0
		}
	}

	onClick = event => {
		this.setState({
			counter: this.state.counter + 1
		})
	}

render() {
	return(
		<div>
		<button onClick = {this.onClick}>
			{this.state.counter}
		</button>
		</div>
	)
	}
}


export default Like;