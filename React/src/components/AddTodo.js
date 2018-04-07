import React, { Component } from 'react';

class AddTodo extends Component {
	onInputChanged = (e) => {
		this.props.onAddTextChanged(e.target.value);
	};

	render() {
		return (
			<div className="pb-2">
				<div className="row">
					<div className="col">
						<input
							onChange={this.onInputChanged}
							value={this.props.inputText}
							type="text"
							placeholder=""
							className="form-control"
						/>
					</div>
					<div className="col">
						<button onClick={this.props.handleAddButtonClick} className="btn btn-dark">
							Add Todo
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AddTodo;
