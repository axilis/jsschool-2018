import React, { Component } from 'react';

class Header extends Component {
	render() {
		return <h2 className="pb-4">{this.props.text}</h2>;
	}
}

export default Header;
