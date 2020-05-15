const initialState = {
	employeeList: { team: [ 'select a supervisor' ] },
	getActiveSVList: '',
	changeSVActiveMessage: '',
	changeSVEmployeeMessage: '',
	svsDocs: [],
	isLoading: false,
	rankMessage: ''
}

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESET_ADMIN':
			return initialState
		case 'GET_SVS_DOCS':
			return { ...state, svsDocs: action.payload }

		case 'ACTIVE_SV_LIST':
			return { ...state, activeSVList: action.payload }
		case 'GET_SV_EMPLOYEES':
			return { ...state, employeeList: action.payload }
		case 'SUCCESSFUL_CHANGE_ACTIVE_SV':
			return { ...state, changeSVActiveMessage: action.payload }
		case 'SUCCESSFUL_CHANGE_SV_TEAM':
			return { ...state, changeSVEmployeeMessage: action.payload }
		case 'RANK_LOADING':
			return { ...state, isLoading: action.payload }
		case 'RANK_MESSAGE':
			return { ...state, rankMessage: action.payload }

		default:
			return state
	}
}

export default adminReducer
