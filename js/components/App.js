import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action-creators';
import { withRouter } from 'react-router-dom';

import Main from './Main';

function mapStateToProps(state){
	return {
		foodItems: state.foodItems,
		cart: state.cart,
		reviews: state.reviews,
		currentComponent: state.currentComponent,
		userLoggedIn: state.userLoggedIn
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

const App= withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;