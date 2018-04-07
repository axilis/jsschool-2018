import React, { Component } from 'react';
import Todo from './Todo';
class TodoList extends Component {
	onInputChanged = (e) => {
		this.props.onFilterTextChanged(e.target.value);
	};

	render() {
		return (
			<div>
				<div className="pb-2">
					<input
						onChange={this.onInputChanged}
						value={this.props.filterText}
						type="text"
						placeholder="Filter todos"
						className="form-control"
					/>
				</div>
				<table className="table table-hover">
					<tbody>
						{this.props.todos.length <= 0 && (
							<tr>
								<td>Nothing on your schedule. Nice job!</td>
							</tr>
						)}
						{this.props.todos.map((t) => (
							<Todo
								key={t.id}
								{...t}
								handleIsDoneToggle={this.props.handleIsDoneToggle}
								handleTrashClicked={this.props.handleTrashClicked}
							/>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default TodoList;
