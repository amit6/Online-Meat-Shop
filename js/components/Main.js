import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';

import Header from './Header';
import NavComponent from './NavComponent';
import ChickenComponent from './ChickenComponent';
import MeatComponent from './MeatComponent';
import SeaFoodComponent from './SeaFoodComponent';
import ViewComponent from './ViewComponent';
import CheckoutComponent from './CheckoutComponent';
import LoginComponent from './LoginComponent';

class Main extends React.Component{
	
	constructor(props) {
		super(props);
		this.__handleLoginForm= this.__handleLoginForm.bind(this);
	}

	__handleLoginForm(event){
		if(event.target.className === "login-form"){
			this.props.showLoginForm(false);
		}
		event.stopPropagation();
	}

	componentDidMount() {
		this.props.initialStateAction();
	}

	render() {
		const { userLoggedIn }=  { ...this.props };
		const showLoginForm= userLoggedIn.showLoginForm;

		return (
			<div className="main-wrapper">
				<div className="main-container">
					<nav className="nav-bar">
						<Header { ...this.props } />
						<NavComponent />
					</nav>
					<Switch>
						<Route path='/' exact component={ (props) => {
							return <ChickenComponent {...this.props} items={this.props.foodItems.chicken} />
						}} />
						<Route path='/meat' component={ (props) => {
							return <MeatComponent {...this.props} items={this.props.foodItems.meat} />
						}} />
						<Route path='/seafood' component={ (props) => {
							return <SeaFoodComponent {...this.props} items={this.props.foodItems.seaFood} />
						}} />
						<Route path="/view/:itemId" render={ props => (
							<ViewComponent {...this.props} itemId={props.match.params.itemId}/> 
						)} />
						<Route path="/cart" component={ props => {
							return <CheckoutComponent {...this.props} />
						}} />
					</Switch>
				</div>
				{ (showLoginForm) ? <div className="login-form" onClick={this.__handleLoginForm}>
										<LoginComponent className="absolute" { ...this.props }/> 
									</div>
								  : null 
				}
			</div>
		)
	}
}

export default Main;