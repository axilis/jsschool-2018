import React, { Component } from 'react';

class Todo extends Component {
	onIsDoneClick = () => {
		this.props.handleIsDoneToggle(this.props.id, !this.props.isDone);
	};

	onTrashClicked = () => {
		this.props.handleTrashClicked(this.props.id);
	};

	render() {
		const { id, text, isDone } = this.props;
		return (
			<tr>
				<td>
					<h6>{text}</h6>
				</td>
				<td>
					<button onClick={this.onIsDoneClick} className="btn btn-dark btn-sm float-right">
						<i className={'oi ' + (isDone ? 'oi-check' : 'oi-minus')} />
					</button>
					<button onClick={this.onTrashClicked} className="btn btn-dark btn-sm mr-2 float-right">
						<i className="oi oi-trash" />
					</button>
				</td>
			</tr>
		);
	}
}

export default Todo;
