import React from 'react';
import ReactDOM from 'react-dom';

import PlusMinusComponent from './PlusMinusComponent';

class CartComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	__getOrder() {
		const { cart }= { ...this.props };
		let items= cart.items;
		
		return Object.keys(items).map( (key, i) => {
			let item= items[key];
			return (
				<div className="order" key={i}>
					<img src={`../../images/${item['img-src']}`}></img>
					<div className="item-info">
						<div className="info">
							<span>{item.name}</span>
							<i className="icon-plus close" onClick={this.props.removeFromCart.bind(null, item)}></i>
						</div>
						<div className="quantity-items">
							<PlusMinusComponent item={item} { ...this.props }/>
							<span className="price">{item.price}</span>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="summary-order-component">
				<header>
					<h3>ORDER SUMMARY</h3>
				</header>
				<section>
					<div className="delivery-time">
						<div className="underline-buttons">
							<button>Deliver Now</button>
							<button>Deliver Latter</button>
						</div>
						<span>Your Order will be delivered within</span>
						<h2>45 minutes</h2>
					</div>
					<div className="order-summary">
						{this.__getOrder()}
						<div className="coupon">
							<input type="text" name="coupon" />
							<button>APPLY</button>
 						</div>

						<div className="donate">
							<i className="icon-ok-squared"></i>
							<span>Donate for a Social Cause</span>
						</div>

						<div className="total-cost">
							<div className="items-price">
								<span>Item Price</span>
								<span className="total">220.00</span>
							</div>
							<div className="tax">
								<span>Tax</span>
								<span>20.00</span>
							</div>
						</div>

						<button className="place-order">PLACE ORDER</button>
					</div>
				</section>
			</div>
		);
	}

}

export default CartComponent;