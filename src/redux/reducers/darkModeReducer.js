const darkModeReducer = (state = true, action) => {
	switch (action.type) {
		case 'DARK_MODE':
			return { ...state, darkMode: action.darkMode }
		default:
			return state
	}
}

export default darkModeReducer
