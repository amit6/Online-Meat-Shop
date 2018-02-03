import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// import user defined reducers.
import combineReducer from './reducers/combine-reducers';

const defaultState= {
	foodItems: {
		chicken: [],
		meat: [],
		seaFood: []
	},
	cart: {
		items: {},
		totalItems: 0,
		totalPrice: 0,
		tax: 20,
		animate: {
			itemId: null,
			scale: ''
		}
	},
	reviews: {
		chicken: {},
		meat: {},
		seaFood: {}
	},
	currentComponent: "chicken",
	userLoggedIn: {
		loggedIn: false,
		name: null,
		id: null,
		showLoginForm: false
	}
};

const store= createStore(combineReducer, defaultState, applyMiddleware(thunk, promise()));

export default store;