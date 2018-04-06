import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
	render() {
		return (
			<div>
				<div className="pb-2">
					<input
						value={this.props.filterText}
						type="text"
						placeholder="Filter todos"
						className="form-control"
					/>
				</div>
				<table className="table table-hover">
					<tbody>
						<Todo />
						<Todo />
						<Todo />
					</tbody>
				</table>
			</div>
		);
	}
}

export default TodoList;
