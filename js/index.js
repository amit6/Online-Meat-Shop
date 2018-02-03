import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// user defined store.
import store from './store';

// user defined components.
import App from './components/App';

class OnlineStore extends React.Component {

	render() {
		return(
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		)
	}

}

ReactDOM.render(<OnlineStore/>, document.getElementById('root'));