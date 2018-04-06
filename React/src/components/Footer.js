import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="float-right mt-5">
				<h6>
					{this.props.label} © {new Date().getFullYear()}
				</h6>
			</div>
		);
	}
}

export default Footer;
