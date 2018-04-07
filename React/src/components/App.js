import React, { Component } from 'react';
import ErrorBox from './ErrorBox';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import Loader from './Loader';
import AddTodo from './AddTodo';

class App extends Component {
	render() {
		return (
			<div className="container p-5">
				<ErrorBox active={this.props.hasError} />
				<Header text="My Todo List" />
				<Loader active={this.props.isLoading} />
				{!this.props.isLoading && (
					<div>
						<TodoList
							todos={this.props.todos}
							filterText={this.props.filterText}
							onFilterTextChanged={this.props.onFilterTextChanged}
							handleIsDoneToggle={this.props.handleIsDoneToggle}
							handleTrashClicked={this.props.handleTrashClicked}
						/>
						<AddTodo
							inputText={this.props.addText}
							handleAddButtonClick={this.props.handleAddButtonClick}
							onAddTextChanged={this.props.onAddTextChanged}
						/>
					</div>
				)}

				<Footer label="Axilis JavaScript School" />
			</div>
		);
	}
}

export default App;
