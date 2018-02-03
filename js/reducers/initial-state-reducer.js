function initialStateReducer(state={}, action){
	
	switch(action.type){
		case 'INITIAL_STATE_FULFILLED':					
			return {
				...state, 
				...action.payload.data
			}
		default:
			return state;
	}
}

export default initialStateReducer;