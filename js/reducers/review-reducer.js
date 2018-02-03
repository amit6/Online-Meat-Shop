function fetchReviewReducer(state={}, action){
	switch (action.type) {
		case 'FETCH_REVIEWS_FULFILLED':
			return {
				...state,
				chicken: action.payload.reviews.chicken,
				meat: action.payload.reviews.meat,
				seaFood: action.payload.reviews.seaFood
			}

		case 'ADD_REVIEW':
			const { itemId, userName, userId, component, comment, ratings, date }= { ...action.payload };
			let tempReviews= [ {name: userName, id: userId, comment, ratings, date}, ...state[component][itemId].reviews ];
			let tempItem= { ...state[component][itemId], reviews: tempReviews};
			let tempComponent= { ...state[component], [itemId]: tempItem };
			return {
				...state,
				[component]: tempComponent
			}
		default :
			return state
	}
}

export default fetchReviewReducer;