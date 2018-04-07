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
				<ErrorBox />
				<Header />
				<Loader />
				<TodoList />
				<AddTodo />
				<Footer />
			</div>
		);
	}
}

export default App;
