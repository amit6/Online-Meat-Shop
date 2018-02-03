import React from 'react';
import ReactDOM from 'react-dom';

class PlusMinusComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { item, cart }= { ...this.props };
		return (
			<div className="icon-minus-plus-wrapper">
				<i className="icon-minus" onClick={this.props.minusItemAction.bind(null, item)}></i>
				<span>{cart.items[item.id].quantity}</span>
				<i className="icon-plus" onClick={this.props.plusItemAction.bind(null, item)}></i>
			</div>
		);
	}

}

export default PlusMinusComponent;