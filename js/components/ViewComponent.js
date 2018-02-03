import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import ReviewComponent from './ReviewComponent';

class ViewComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { currentComponent, itemId }= { ...this.props };
		if(!this.props.reviews[currentComponent][itemId]){
			this.props.fetchReviewAction();
		}
	}

	render() {
		const { currentComponent, itemId }= { ...this.props };

		// find food index.
		const index= this.props.foodItems[currentComponent].findIndex( (item) => {
			return item.id === itemId
		});

		// point food item object.
		const item= this.props.foodItems[currentComponent][index];

		// similar do for reviews.
		let itemReviews= this.props.reviews[currentComponent][itemId]
						? this.props.reviews[currentComponent][itemId].reviews
						: [];

		return (
			<div className="view-container">
				<Card {...this.props} key={index} item={item} />
				<ReviewComponent itemReviews={itemReviews} itemId={itemId} { ...this.props } />
			</div>
		);
	}

}

export default ViewComponent;