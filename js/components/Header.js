import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const { cart }= { ...this.props };
		const animateScale= `icon-cart ${cart.animate.scale}`;
		return (
			<header>
				<h3 className="logo">MEAT SHOP</h3>
				<div className="search-cart">
					<div className="search">
						<input type="text" name="search" placeholder="Search..." />
						<button><i className="icon-search"></i></button>					
					</div>
					<Link className="cart" to="/cart/">
						<span className="total-items-cart">{cart.totalItems}</span>
						<i className={animateScale}></i>
					</Link>
				</div>				
			</header>
		)
	}
}

export default Header;