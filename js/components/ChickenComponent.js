import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

class ChickenComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.currentComponentAction('chicken');
	}

	render() {
		return (
			<div className="card-container-wrapper">
				 {this.props.items.map((item, i) => <Card {...this.props} key={i} item={item} index={i}/>)}
			</div>
		)
	}

}

export default ChickenComponent;
