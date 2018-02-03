function cartReducer(state={}, action){
	switch(action.type) {
		case 'ADD_TO_CART':
			var id= action.payload.item.id;
			var newItem= { ...action.payload.item};
			newItem.quantity= 1;
			var animation= 'animate-scale1';
			if(state.animate.scale === 'animate-scale1'){
				animation= 'animate-scale2';
			}
			return {
				...state,
				items: { ...state.items, [id]: newItem },
				totalItems: state.totalItems + 1,
				animate: { ...state.animate, itemId: id, scale: animation }
			}

		case 'PLUS_ITEM':
			var id= action.payload.item.id;
			var newItem= { ...state.items[id] };
			newItem.quantity= newItem.quantity + 1;
			return {
				...state,
				items: { ...state.items, [id]: newItem },
				animate: { ...state.animate, itemId: id }
			}

		case 'MINUS_ITEM' :
			var id= action.payload.item.id;
			var newItem= { ...state.items[id] };
			newItem.quantity= newItem.quantity - 1;
			var animation= 'animate-scale1';
			if(state.animate.scale === 'animate-scale1'){
				animation= 'animate-scale2';
			}

			// show add to cart button,
			// instead of plus/minus icon
			if(newItem.quantity <= 0){
				let newItems= { ...state.items };
				delete newItems[id];
				return{
					...state,
					items: newItems,
					totalItems: state.totalItems - 1,
					animate: { ...state.animate, itemId: id, scale: animation }
				}
			}

			return {
				...state,
				items: { ...state.items, [id] : newItem},
				animate: { ...state.animate, itemId: id }
			}

		case 'REMOVE_FROM_CART' :
			var animation= 'animate-scale1';
			if(state.animate.scale === 'animate-scale1'){
				animation= 'animate-scale2';
			}
			
			let newItem= { ...state.items };
			delete newItem[action.payload.item.id];

			return {
				...state,
				items: newItem,
				totalItems: state.totalItems - 1,
				animate: { ...state.animate, scale: animation }
			}

		default :
			return state;
	}		
}

export default cartReducer;