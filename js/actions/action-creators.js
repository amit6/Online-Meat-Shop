export function initialStateAction() {
	return {
		type: 'INITIAL_STATE',
		payload: new Promise( (resolve, reject) => {
			const xhr= new XMLHttpRequest();
			xhr.open('GET', '../../data/fetchItems.json');
			xhr.onload= ()=> {
				const data=JSON.parse(xhr.responseText);
				resolve(data);
			}
			xhr.onerror= ()=> {
				reject(xhr.statusText);
			}
			xhr.send();
		})
	}
}

export function addToCartAction(item){
	return {
		type: 'ADD_TO_CART',
		payload: {
			item
		}
	}
}

export function removeFromCart(item){
	return {
		type: 'REMOVE_FROM_CART',
		payload: {
			item
		}
	}
}

export function plusItemAction(item){
	return {
		type: 'PLUS_ITEM',
		payload: {
			item
		}
	}
}

export function minusItemAction(item){
	return {
		type: 'MINUS_ITEM',
		payload: {
			item
		}
	}
}
export function fetchReviewAction(){
	return {
		type: 'FETCH_REVIEWS',
		payload: new Promise( (resolve, reject) => {
			const xhr= new XMLHttpRequest();
			xhr.open('GET', '../../data/reviews.json');
			xhr.onload= ()=> {
				resolve(JSON.parse(xhr.responseText));
			};
			xhr.onerror= ()=> {
				reject(xhr.statusText);
			}
			xhr.send();
		})
	}
}

export function addReviewAction(data) {
	const {itemId, userName, userId, component, comment, ratings, date}= {...data};
	return {
		type: 'ADD_REVIEW',
		payload: {
			itemId, userName, userId, component, comment, ratings, date
		}
	}
}

export function currentComponentAction(component){
	return {
		type: 'CURRENT_COMPONENT',
		payload: {
			currentComponent: component
		}
	}
}

export function userLoggedInAction(name){
	return {
		type: 'USER_LOGGED_IN_INFO',
		payload: {
			name
		}
	}
}

export function showLoginForm(value){
	return {
		type: 'SHOW_LOGIN_FORM',
		payload: {
			show: value
		}
	}
}


