import React from 'react';
import ReactDOM from 'react-dom';
import  { Link } from 'react-router-dom';

import AddToCartComponent from './AddToCartComponent';
import AddButtonComponent from './AddButtonComponent';
import PlusMinusComponent from './PlusMinusComponent';

class Card extends React.Component {

	constructor(props) {
		super(props);
	}

	__getLink(item) {
		return (
			<Link to={`/view/${item.id}`}>				
				<img src={`../../images/${item['img-src']}`}></img>
				<div className="label-like-item">
					<span className="label">{item['name']}</span>
					<i className="icon-heart">{item['likes']}</i>
				</div>
				<div className="description">
					<span>{item['caption']}</span>
				</div>
			</Link>
		)
	}

	render() {
		const { item, cart }= this.props; 
		const sliderAnimation= item.id === cart.animate.itemId ? 'animate-slide' : '';
		return (
			<div className="card-container">
				{this.__getLink(item)}
				<div className="price-add-cart">
					<span>{item['price'] + '/'+item['weight']}</span>
					<AddToCartComponent>
						{(typeof cart.items[item.id] !== 'undefined') 
							? <PlusMinusComponent {...this.props} />
							: <AddButtonComponent {...this.props} />
						}
					</AddToCartComponent>
				</div>
				<footer className={sliderAnimation}></footer>
			</div>
		)
	}

}

export default Card;