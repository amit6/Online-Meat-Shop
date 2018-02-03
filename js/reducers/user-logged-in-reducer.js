function userLoggedInReducer(state= {}, action){
	switch(action.type){
		case 'USER_LOGGED_IN_INFO' :
			return {
				...state,
				name: action.payload.name,
				id: new Date().valueOf(),
				loggedIn: true,
			}
		case 'SHOW_LOGIN_FORM' :
			return {
				...state,
					showLoginForm: action.payload.show
			}
		default :
			return state;
	}
}

export default userLoggedInReducer;