import React, { Component } from 'react';

class Todo extends Component {
	render() {
		const { id, text, isDone } = this.props;
		return (
			<tr>
				<td>
					<h6>{text}</h6>
				</td>
				<td>
					<button className="btn btn-dark btn-sm float-right">
						<i className={'oi ' + (isDone ? 'oi-check' : 'oi-minus')} />
					</button>
					<button className="btn btn-dark btn-sm mr-2 float-right">
						<i className="oi oi-trash" />
					</button>
				</td>
			</tr>
		);
	}
}

export default Todo;
