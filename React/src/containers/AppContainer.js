import React, { Component } from 'react';
import App from '../components/App';
import axios from 'axios';
import uuid from 'uuid';

class AppContainer extends Component {
	constructor() {
		super();

		this.state = {
			filterText: '',
			addText: '',
			isLoading: false,
			hasError: false,
			todos: []
		};
	}

	handleIsDoneToggle = (todoId, isDone) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === todoId) {
					return { ...todo, isDone: isDone };
				} else {
					return todo;
				}
			})
		});
	};

	onFilterTextChanged = (text) => {
		this.setState({
			filterText: text
		});
	};

	onAddTextChanged = (text) => {
		this.setState({
			addText: text
		});
	};

	handleAddButtonClick = () => {
		if (this.state.addText.trim().length < 0) {
			return;
		}
		this.setState({
			addText: '',
			filterText: '',
			todos: [...this.state.todos, { id: uuid(), text: this.state.addText, isDone: false }]
		});
	};

	handleTrashClicked = async (todoId) => {
		this.setState({
			todos: this.state.todos.filter((t) => t.id !== todoId)
		});
	};

	async componentDidMount() {
		this.setState({ isLoading: true });
		try {
			let resp = await axios.get('https://react.axilis.com/pero/todos');
			this.setState({
				todos: resp.data
			});
		} catch (err) {
			this.setState({ hasError: true });
		} finally {
			this.setState({ isLoading: false });
		}
	}

	filter = (todos, filter) => {
		if (filter && filter.trim().length > 0) {
			return todos.filter((t) => t.text.indexOf(filter) > -1);
		}
		return todos;
	};

	render() {
		return (
			<App
				filterText={this.state.filterText}
				addText={this.state.addText}
				isLoading={this.state.isLoading}
				hasError={this.state.hasError}
				todos={this.filter(this.state.todos, this.state.filterText)}
				handleIsDoneToggle={this.handleIsDoneToggle}
				handleTrashClicked={this.handleTrashClicked}
				onFilterTextChanged={this.onFilterTextChanged}
				onAddTextChanged={this.onAddTextChanged}
				handleAddButtonClick={this.handleAddButtonClick}
			/>
		);
	}
}

export default AppContainer;
