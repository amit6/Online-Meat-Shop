import React from 'react';
import ReactDOM from 'react-dom';

import AddCommentComponent from './AddCommentComponent';

class ReviewComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	__fetchRatingIcons(num){
		let icons= [];
		for(let i=0; i<num; i++){
			icons.push(<i className="icon-heart" key={i}></i>);
		}
		return icons;
	}

	__fetchReviews(reviews) {
		return reviews.map( (review, id) => {
			return (
				<article key={id}>
					<div className="review">
						<div className="rating-wrapper">
							<i className="icon-user"></i>
							<div className="info">
								<span>{review.name}</span>
								<div className="ratings">
									{this.__fetchRatingIcons(Number(review.ratings))}
								</div>
							</div>
							<span className="date">{review.date}</span>
						</div>
						<div className="comment">
							<p>{review.comment}</p>
						</div>
					</div>
				</article>
			);
		})
	}

	render() {
		const {itemReviews, userLoggedIn }= { ...this.props };

		//check if the user has given a review.
		const reviewGiven= itemReviews.findIndex( (review) => {
			return (review.id === userLoggedIn.id);
		})

		return (
			<div className="review-container">
				<header>
					<h3>{`Review & Ratings (${itemReviews.length})`}</h3>
				</header>
				<section>
					{ (userLoggedIn.loggedIn) 
			  			? ((reviewGiven === -1) ? <AddCommentComponent {...this.props}/> : null)
			  			: <button onClick={this.props.showLoginForm.bind(null, true)} >ADD REVIEW</button>
					}
					{this.__fetchReviews(itemReviews)}
				</section>
			</div>
		);
	}

}

export default ReviewComponent;