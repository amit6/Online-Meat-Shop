import React from 'react';
import ReactDOM from 'react-dom';

class AddToCartComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		console.log("prakash");
		return (
			<div className="cart-add-button-container">
				{this.props.children}
			</div>
		);
	}

}

export default AddToCartComponent;