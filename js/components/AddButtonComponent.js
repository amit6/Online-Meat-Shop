import React from 'react';
import ReactDOM from 'react-dom';

class AddButtonComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { item }= this.props;
		return (
			<button className="add-cart" onClick={this.props.addToCartAction.bind(null, item)}>
				Add to Cart
			</button>
		);
	}

}

export default AddButtonComponent;