import React, { Component } from 'react';

class Todo extends Component {
	render() {
		return (
			<tr>
				<td>
					<h6>Shoot the deputy as well</h6>
				</td>
				<td>
					<button className="btn btn-dark btn-sm float-right">
						<i className="oi oi-check" />
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
