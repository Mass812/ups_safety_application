import { LOADING } from '../types'

const initialState = {
	isLoading: false
}

const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, isLoading: false }
		case 'SV_LIST_LOADING':
			return { ...state, svListLoading: action.svListLoading }

		default:
			return state
	}
}

export default loadingReducer
