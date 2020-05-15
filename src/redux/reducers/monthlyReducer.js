const initialState = {
	isLoading: false
}

const monthlyReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MONTHLY_REPORT':
			return { ...state, monthlyReport: action.payload }
		case 'MONTHLY_IS_LOADING':
			return { ...state, monthlyIsLoading: action.payload }

		default:
			return state
	}
}

export default monthlyReducer
