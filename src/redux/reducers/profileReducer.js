import { GET_BASIC_USER_INFO } from '../types'

const initialState = {
	emailEntered: null,
	passwordEntered: null,
	verPasswordEntered: null,
	displayNameEntered: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BASIC_USER_INFO:
			return { ...state, basicUserInfo: action.basicUserInfo }
		case 'RESET_BASIC_USER_INFO':
			return initialState
		case 'CREATE_ACCOUNT_PASSWORD':
			return { ...state, passwordEntered: action.passwordEntered }
		case 'VERIFY_ACCOUNT_PASSWORD':
			return { ...state, verPasswordEntered: action.verPasswordEntered }
		case 'STORE_USER_EMAIL':
			return { ...state, emailEntered: action.emailEntered }
		case 'CREATE_USER_DISPLAY_NAME':
			return { ...state, displayNameEntered: action.displayNameEntered }
		default:
			return state
	}
}

export default profileReducer
