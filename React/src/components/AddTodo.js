import React, { Component } from 'react';

class AddTodo extends Component {
	render() {
		return (
			<div className="pb-2">
				<div className="row">
					<div className="col">
						<input value={this.props.inputText} type="text" placeholder="" className="form-control" />
					</div>
					<div className="col">
						<button className="btn btn-dark"> Add Todo</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AddTodo;
