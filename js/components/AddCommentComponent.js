import React from 'react';
import ReactDOM from 'react-dom';

class AddCommentComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			ratings: new Array(5).fill('empty-heart'),
			userRatings: 0
		};
		this.__handleReviews= this.__handleReviews.bind(this);
		this.__handleRatings= this.__handleRatings.bind(this);
	}

	__handleReviews(event){
		const { itemId, currentComponent, userLoggedIn }= { ...this.props };
		const data= {
			itemId: itemId,
			userName: userLoggedIn.name,
			userId: userLoggedIn.id,
			component: currentComponent,
			comment: this.refs.comment.value,
			ratings: this.state.userRatings,
			date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getYear()}`
		}
		this.props.addReviewAction(data);
		event.preventDefault();
	}

	__handleRatings(event){
		const num= Number(event.target.id);
		this.setState({
			userRatings: num+1
		});
		const elems= event.target.parentElement.getElementsByClassName('user-rating');
		for(let i=0; i<=4; i++){
			elems[i].classList.remove("filled-heart", "empty-heart");
			if(i <= num){
				elems[i].classList.add("filled-heart");
			}else{
				elems[i].classList.add("empty-heart");
			}
		}
	}

	__showRatingsDOM(){
		const ratings= [ ...this.state.ratings ];
		return ratings.map( (rating, ind) => {
			return <i key={ind} id={ind} className={`icon-heart user-rating ${rating}`} />
		});
	}

	render() {
		const { userLoggedIn, itemId, currentComponent, reviews }= { ...this.props };
		const { ratings }= { ...reviews };
		return (
			<div className="review-component">
				<article>
					<div className="review">
						<i className="icon-user"></i>
						<div className="info">
							<span>{userLoggedIn.name}</span>
							<div className="ratings" onClick={this.__handleRatings}>
								{this.__showRatingsDOM()}
							</div>
						</div>
						<span className="date">{`${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getYear()}`}</span>
					</div>
					<form className="comment" onSubmit={this.__handleReviews} >
						<input type="text" ref="comment" name="userComment" placeholder="Comment here ..." />
						<input type="submit" name="save" value="SAVE" />
					</form>
				</article>
			</div>
		);
	}

}

export default AddCommentComponent;