function currentComponentReducer(state='chicken', action) {
	switch (action.type){
		case 'CURRENT_COMPONENT' :
			return action.payload.currentComponent
		default :
			return state
	}
}

export default currentComponentReducer;