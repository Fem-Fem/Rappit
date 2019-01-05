import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostsContainer extends Component {

	render() {
		return(
			<div></div>
		)
	}
};

const mapStateToProps = (state) => {
	return { comments: state.posts}
}

export default connect()(PostsContainer);