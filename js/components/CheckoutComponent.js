import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import LoginComponent from './LoginComponent';
import CartComponent from './CartComponent';

class CheckoutComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { cart, userLoggedIn }= { ...this.props };

		return (
			<div className="checkout-container">
				{ (userLoggedIn.loggedIn)? null : <LoginComponent { ...this.props } /> }
				<CartComponent cart={cart} { ...this.props } />
			</div>
		)
	}

}

export default CheckoutComponent;