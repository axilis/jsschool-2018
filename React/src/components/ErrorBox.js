import React, { Component } from 'react';

class ErrorBox extends Component {
	render() {
		return (
			<div className="alert alert-danger" role="alert">
				Oops, something wrong happened! Please try again later.
			</div>
		);
	}
}

export default ErrorBox;
