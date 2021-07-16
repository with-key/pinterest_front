import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './modules/configStore';

import { ConnectedRouter } from 'connected-react-router';
import { history } from './modules/configStore';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);
