import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AdminLTE from './theme/js/AdminLTE';
import store from './store';
import AppRouter from './AppRouter';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<AdminLTE>
					<AppRouter />
				</AdminLTE>
			</Router>
		</Provider>
	);
}

export default App;
