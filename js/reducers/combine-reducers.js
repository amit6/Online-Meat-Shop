import { combineReducers } from 'redux';

// import user defined reducers.
import initialStateReducer from './initial-state-reducer';
import cartReducer from './cart-reducer';
import reviewReducer from './review-reducer';
import currentComponentReducer from './current-component-reducer';
import userLoggedInReducer from './user-logged-in-reducer';

const combineReducer= combineReducers({
							foodItems: initialStateReducer, 
							cart: cartReducer,
							reviews: reviewReducer,
							currentComponent: currentComponentReducer,
							userLoggedIn: userLoggedInReducer
					   });

export default combineReducer;