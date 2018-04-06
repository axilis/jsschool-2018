import React, { Component } from 'react';

class ErrorBox extends Component {
	render() {
		if (!this.props.active) {
			return null;
		}

		return (
			<div className="alert alert-danger" role="alert">
				Oops, something wrong happened! Please try again later.
			</div>
		);
	}
}

export default ErrorBox;
