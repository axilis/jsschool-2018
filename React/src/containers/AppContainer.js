import React, { Component } from 'react';
import App from '../components/App';

const dummyList = [
	{
		id: '0a64f4ee-6c1e-4a57-82da-b313b4953098',
		isDone: true,
		text: 'Push slinky down an escalator.'
	},
	{
		id: '7545b20f-46ad-41d1-b2ce-d74f20ab6a41',
		isDone: false,
		text: 'Find a burger that actually looks like the one in the commercial.'
	},
	{
		id: 'd8434dc5-464a-43a1-ba01-20c57aa5bf42',
		isDone: false,
		text: 'Drop out of college. Start a multi-billion dollar company.'
	}
];

class AppContainer extends Component {
	render() {
		return <App filterText="" addText="" isLoading={false} hasError={false} todos={dummyList} />;
	}
}

export default AppContainer;
