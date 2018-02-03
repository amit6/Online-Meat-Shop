import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';

class LoginComponent extends React.Component {

	constructor(props) {
		super(props);
		this.__validateForm= this.__validateForm.bind(this);
	}

	__validateForm(event){
		//validate username/ password
		if(this.refs.name.value === ''){
			this.refs.name.className= 'error-offset';
		}

		if(this.refs.pswd.value === ''){
			this.refs.pswd.className= 'error-offset';
		}

		if(this.refs.name.value !== '' && this.refs.pswd.value !== ''){
			this.refs.name.className= '';
			this.refs.pswd.className= '';
			this.props.userLoggedInAction(this.refs.name.value);
			this.props.showLoginForm(false);
		}

		event.preventDefault();
	}	

	render() {
		const { userLoggedIn }= { ...this.props };
		return (
			<div className="login-component">
				<header>
					<span>Profile</span>
					<span>Log In or Sign Up</span>
				</header>
				<section>
					<div className="social-login">
						<button className="btn-facebook">
							<i className="icon-facebook"></i>
							<span>Facebook</span>
						</button>
						<button className="btn-google">
							<i className="icon-gplus"></i>
							<span>Google</span>
						</button>
					</div>
					<span>Log In</span>
					<form className="log-in" onSubmit={this.__validateForm}>
						<input type="text" ref="name" name="logInName" placeholder="User name" />
						<input type="password" ref="pswd"  name="logInPassword" placeholder="Password" />
						<input type="submit" name="logIn" value="Log In" />
						<span>Don't have an account? Sign Up</span>
					</form>
				</section>
			</div>
		)
	}

}

export default LoginComponent;