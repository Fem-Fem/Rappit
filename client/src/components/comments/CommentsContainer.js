import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsContainer extends Component {

	render() {
		return(
			<div></div>
		)
	}
};

const mapStateToProps = (state) => {
	return { comments: state.comments}
}

export default connecct()(CommentsContainer);