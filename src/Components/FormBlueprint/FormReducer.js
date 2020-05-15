const initialState = {
	q1BlueprintSafeCount: 0,
	q1BlueprintUnSafeCount: 0,
	q2BlueprintSafeCount: 0,
	q2BlueprintUnSafeCount: 0,
	q3BlueprintSafeCount: 0,
	q3BlueprintUnSafeCount: 0,
	q4BlueprintSafeCount: 0,
	q4BlueprintUnSafeCount: 0,
	q5BlueprintSafeCount: 0,
	q5BlueprintUnSafeCount: 0,
	q6BlueprintSafeCount: 0,
	q6BlueprintUnSafeCount: 0,
	blueprintSV: 'Anonymous',
	blueprintPersonsCount: 0,
	q1BlueprintFeedBack: 'Appreciative Feedback Given',
	q2BlueprintFeedBack: 'Appreciative Feedback Given',
	q3BlueprintFeedBack: 'Appreciative Feedback Given',
	q4BlueprintFeedBack: 'Appreciative Feedback Given',
	q5BlueprintFeedBack: 'Appreciative Feedback Given',
	q6BlueprintFeedBack: 'Appreciative Feedback Given',
	blueprintComments: ''
}

const blueprintReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_BLUEPRINT_AUDIT':
			return { ...state, blueprintData: action.blueprintDataObject }
		case 'RESET_FORM':
			return initialState

		case 'BLUEPRINT_AUDIT_SV':
			return {
				...state,
				blueprintSV: action.blueprintSV
			}
		case 'ADD_BLUEPRINT_EMPLOYEE_COUNT':
			return {
				...state,
				blueprintPersonsCount: action.blueprintPersonsCount
			}
		case 'BLUEPRINT_COMMENTS':
			return {
				...state,
				blueprintComments: action.blueprintComments
			}
		case 'Q1_BLUEPRINT_FEEDBACK':
			return {
				...state,
				q1BlueprintFeedBack: action.q1BlueprintFeedBack
			}

		case 'Q1_BLUEPRINT_SAFE_INCREMENT':
			return {
				...state,
				q1BlueprintSafeCount: state.q1BlueprintSafeCount + 1
			}
		case 'Q1_BLUEPRINT_SAFE_DECREMENT':
			return {
				...state,
				q1BlueprintSafeCount: state.q1BlueprintSafeCount - 1
			}
		case 'Q1_BLUEPRINT_UNSAFE_INCREMENT':
			return {
				...state,
				q1BlueprintUnSafeCount: state.q1BlueprintUnSafeCount + 1
			}
		case 'Q1_BLUEPRINT_UNSAFE_DECREMENT':
			return {
				...state,
				q1BlueprintUnSafeCount: state.q1BlueprintUnSafeCount - 1
			}

		case 'Q2_BLUEPRINT_SAFE_INCREMENT':
			return {
				...state,
				q2BlueprintSafeCount: state.q2BlueprintSafeCount + 1
			}
		case 'Q2_BLUEPRINT_SAFE_DECREMENT':
			return {
				...state,
				q2BlueprintSafeCount: state.q2BlueprintSafeCount - 1
			}
		case 'Q2_BLUEPRINT_UNSAFE_INCREMENT':
			return {
				...state,
				q2BlueprintUnSafeCount: state.q2BlueprintUnSafeCount + 1
			}
		case 'Q2_BLUEPRINT_UNSAFE_DECREMENT':
			return {
				...state,
				q2BlueprintUnSafeCount: state.q2BlueprintUnSafeCount - 1
			}
		case 'Q2_BLUEPRINT_FEEDBACK':
			return {
				...state,
				q2BlueprintFeedBack: action.q2BlueprintFeedBack
			}
		case 'Q3_BLUEPRINT_SAFE_INCREMENT':
			return {
				...state,
				q3BlueprintSafeCount: state.q3BlueprintSafeCount + 1
			}
		case 'Q3_BLUEPRINT_SAFE_DECREMENT':
			return {
				...state,
				q3BlueprintSafeCount: state.q3BlueprintSafeCount - 1
			}
		case 'Q3_BLUEPRINT_UNSAFE_INCREMENT':
			return {
				...state,
				q3BlueprintUnSafeCount: state.q3BlueprintUnSafeCount + 1
			}
		case 'Q3_BLUEPRINT_UNSAFE_DECREMENT':
			return {
				...state,
				q3BlueprintUnSafeCount: state.q3BlueprintUnSafeCount - 1
			}

		case 'Q3_BLUEPRINT_FEEDBACK':
			return {
				...state,
				q3BlueprintFeedBack: action.q3BlueprintFeedBack
			}

		case 'Q4_BLUEPRINT_SAFE_INCREMENT':
			return {
				...state,
				q4BlueprintSafeCount: state.q4BlueprintSafeCount + 1
			}
		case 'Q4_BLUEPRINT_SAFE_DECREMENT':
			return {
				...state,
				q4BlueprintSafeCount: state.q4BlueprintSafeCount - 1
			}
		case 'Q4_BLUEPRINT_UNSAFE_INCREMENT':
			return {
				...state,
				q4BlueprintUnSafeCount: state.q4BlueprintUnSafeCount + 1
			}
		case 'Q4_BLUEPRINT_UNSAFE_DECREMENT':
			return {
				...state,
				q4BlueprintUnSafeCount: state.q4BlueprintUnSafeCount - 1
			}
		case 'Q4_BLUEPRINT_FEEDBACK':
			return {
				...state,
				q4BlueprintFeedBack: action.q4BlueprintFeedBack
			}

		case 'Q5_BLUEPRINT_SAFE_INCREMENT':
			return {
				...state,
				q5BlueprintSafeCount: state.q5BlueprintSafeCount + 1
			}
		case 'Q5_BLUEPRINT_SAFE_DECREMENT':
			return {
				...state,
				q5BlueprintSafeCount: state.q5BlueprintSafeCount - 1
			}
		case 'Q5_BLUEPRINT_UNSAFE_INCREMENT':
			return {
				...state,
				q5BlueprintUnSafeCount: state.q5BlueprintUnSafeCount + 1
			}
		case 'Q5_BLUEPRINT_UNSAFE_DECREMENT':
			return {
				...state,
				q5BlueprintUnSafeCount: state.q5BlueprintUnSafeCount - 1
			}
		case 'Q5_BLUEPRINT_FEEDBACK':
			return {
				...state,
				q5BlueprintFeedBack: action.q5BlueprintFeedBack
			}

		case 'Q6_BLUEPRINT_SAFE_INCREMENT':
			return {
				...state,
				q6BlueprintSafeCount: state.q6BlueprintSafeCount + 1
			}
		case 'Q6_BLUEPRINT_SAFE_DECREMENT':
			return {
				...state,
				q6BlueprintSafeCount: state.q6BlueprintSafeCount - 1
			}
		case 'Q6_BLUEPRINT_UNSAFE_INCREMENT':
			return {
				...state,
				q6BlueprintUnSafeCount: state.q6BlueprintUnSafeCount + 1
			}
		case 'Q6_BLUEPRINT_UNSAFE_DECREMENT':
			return {
				...state,
				q6BlueprintUnSafeCount: state.q6BlueprintUnSafeCount - 1
			}
		case 'Q6_BLUEPRINT_FEEDBACK':
			return {
				...state,
				q6BlueprintFeedBack: action.q6BlueprintFeedBack
			}
		default:
			return state
	}
}

export default blueprintReducer
