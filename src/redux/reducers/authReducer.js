const authReducer = (state = false, action) => {
	switch (action.type) {
		case 'VERIFY_USER_ROUTE':
			return { ...state, verifyUseerRoute: action.verifyUserRoute }
		default:
			return state
	}
}

export default authReducer
