import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';

class NavComponent extends React.Component {
	render() {
		return (
			
			<nav className="link-container">
				<ul>
					<li>
						<NavLink to='/' exact activeClassName="active-link">
							Chicken
						</NavLink>
					</li>
					<li>
						<NavLink to='/meat' activeClassName="active-link">
							Meat
						</NavLink>
					</li>
					<li>
						<NavLink to='/seafood' activeClassName="active-link">
							Sea Food
						</NavLink>
					</li>
				</ul>
			</nav>

		)
	}
}

export default NavComponent;