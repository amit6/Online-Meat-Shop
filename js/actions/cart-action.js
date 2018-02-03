function addToCartAction(id, quantity){
	console.log("add to cart reducer....!");
	return {
		type: 'ADD_CART',
		payload: {
			id,
			quantity
		}
	}
}

export default addToCartAction;