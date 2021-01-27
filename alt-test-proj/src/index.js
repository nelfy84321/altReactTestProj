import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<AppContainer />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
