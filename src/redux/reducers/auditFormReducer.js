const initialState = {
	formTitle: '',
	formCollection: '',
	efficiency: '',
	slic: '',
	technicalFormName: '',
	shortQuestionOne: '',
	shortQuestionTwo: '',
	shortQuestionThree: '',
	shortQuestionFour: '',
	shortQuestionFive: '',
	shortQuestionSix: '',
	longQuestionOne: '',
	longQuestionTwo: '',
	longQuestionThree: '',
	longQuestionFour: '',
	longQuestionFive: '',
	longQuestionSix: '',
	q1FormSafeCount: 0,
	q1FormUnSafeCount: 0,
	q2FormSafeCount: 0,
	q2FormUnSafeCount: 0,
	q3FormSafeCount: 0,
	q3FormUnSafeCount: 0,
	q4FormSafeCount: 0,
	q4FormUnSafeCount: 0,
	q5FormSafeCount: 0,
	q5FormUnSafeCount: 0,
	q6FormSafeCount: 0,
	q6FormUnSafeCount: 0,
	formSV: 'Anonymous',
	formPersonsCount: 0,
	q1FormFeedBack: 'Appreciative',
	q2FormFeedBack: 'Appreciative',
	q3FormFeedBack: 'Appreciative',
	q4FormFeedBack: 'Appreciative',
	q5FormFeedBack: 'Appreciative',
	q6FormFeedBack: 'Appreciative',
	formComments: 'No Comments',
	date: '',
	division: '2265-15-WINGS',
	ramp: ''
}

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CREATE_FORM_AUDIT':
			return { ...state, formData: action.formDataObject }
		case 'RESET_FORM':
			return initialState

		case 'DIVISION':
			return {
				...state
			}
		case 'DATE':
			return {
				...state,
				date: action.date
			}
		case 'AUDIT_SAFE_EFFICIENCY':
			return {
				...state,
				efficiency: action.payload
			}
		case 'FORM_TITLE':
			return {
				...state,
				formTitle: action.formTitle
			}
		case 'FORM_RAMP':
			return {
				...state,
				ramp: action.payload
			}
		case 'FORM_COLLECTION':
			return {
				...state,
				formCollection: action.formCollection
			}
		case 'SLIC':
			return {
				...state,
				slic: action.slic
			}
		case 'TECHNICAL_FORM_NAME':
			return {
				...state,
				technicalFormName: action.technicalFormName
			}
		case 'SHORT_QUESTION_ONE':
			return {
				...state,
				shortQuestionOne: action.payload
			}
		case 'SHORT_QUESTION_TWO':
			return {
				...state,
				shortQuestionTwo: action.payload
			}
		case 'SHORT_QUESTION_THREE':
			return {
				...state,
				shortQuestionThree: action.payload
			}
		case 'SHORT_QUESTION_FOUR':
			return {
				...state,
				shortQuestionFour: action.payload
			}
		case 'SHORT_QUESTION_FIVE':
			return {
				...state,
				shortQuestionFive: action.payload
			}
		case 'SHORT_QUESTION_SIX':
			return {
				...state,
				shortQuestionSix: action.payload
			}
		case 'LONG_QUESTION_ONE':
			return {
				...state,
				longQuestionOne: action.payload
			}
		case 'LONG_QUESTION_TWO':
			return {
				...state,
				longQuestionTwo: action.payload
			}
		case 'LONG_QUESTION_THREE':
			return {
				...state,
				longQuestionThree: action.payload
			}
		case 'LONG_QUESTION_FOUR':
			return {
				...state,
				longQuestionFour: action.payload
			}
		case 'LONG_QUESTION_FIVE':
			return {
				...state,
				longQuestionFive: action.payload
			}
		case 'LONG_QUESTION_SIX':
			return {
				...state,
				longQuestionSix: action.payload
			}
		case 'FORM_AUDIT_SV':
			return {
				...state,
				formSV: action.formSV
			}

		case 'ADD_FORM_EMPLOYEE_COUNT':
			return {
				...state,
				formPersonsCount: action.formPersonsCount
			}
		case 'FORM_COMMENTS':
			return {
				...state,
				formComments: action.formComments
			}
		case 'Q1_FORM_FEEDBACK':
			return {
				...state,
				q1FormFeedBack: action.q1FormFeedBack
			}

		case 'Q1_FORM_SAFE_INCREMENT':
			return {
				...state,
				q1FormSafeCount: state.q1FormSafeCount + 1
			}
		case 'Q1_FORM_SAFE_DECREMENT':
			return {
				...state,
				q1FormSafeCount: state.q1FormSafeCount - 1
			}
		case 'Q1_FORM_UNSAFE_INCREMENT':
			return {
				...state,
				q1FormUnSafeCount: state.q1FormUnSafeCount + 1
			}
		case 'Q1_FORM_UNSAFE_DECREMENT':
			return {
				...state,
				q1FormUnSafeCount: state.q1FormUnSafeCount - 1
			}

		case 'Q2_FORM_SAFE_INCREMENT':
			return {
				...state,
				q2FormSafeCount: state.q2FormSafeCount + 1
			}
		case 'Q2_FORM_SAFE_DECREMENT':
			return {
				...state,
				q2FormSafeCount: state.q2FormSafeCount - 1
			}
		case 'Q2_FORM_UNSAFE_INCREMENT':
			return {
				...state,
				q2FormUnSafeCount: state.q2FormUnSafeCount + 1
			}
		case 'Q2_FORM_UNSAFE_DECREMENT':
			return {
				...state,
				q2FormUnSafeCount: state.q2FormUnSafeCount - 1
			}
		case 'Q2_FORM_FEEDBACK':
			return {
				...state,
				q2FormFeedBack: action.q2FormFeedBack
			}
		case 'Q3_FORM_SAFE_INCREMENT':
			return {
				...state,
				q3FormSafeCount: state.q3FormSafeCount + 1
			}
		case 'Q3_FORM_SAFE_DECREMENT':
			return {
				...state,
				q3FormSafeCount: state.q3FormSafeCount - 1
			}
		case 'Q3_FORM_UNSAFE_INCREMENT':
			return {
				...state,
				q3FormUnSafeCount: state.q3FormUnSafeCount + 1
			}
		case 'Q3_FORM_UNSAFE_DECREMENT':
			return {
				...state,
				q3FormUnSafeCount: state.q3FormUnSafeCount - 1
			}

		case 'Q3_FORM_FEEDBACK':
			return {
				...state,
				q3FormFeedBack: action.q3FormFeedBack
			}

		case 'Q4_FORM_SAFE_INCREMENT':
			return {
				...state,
				q4FormSafeCount: state.q4FormSafeCount + 1
			}
		case 'Q4_FORM_SAFE_DECREMENT':
			return {
				...state,
				q4FormSafeCount: state.q4FormSafeCount - 1
			}
		case 'Q4_FORM_UNSAFE_INCREMENT':
			return {
				...state,
				q4FormUnSafeCount: state.q4FormUnSafeCount + 1
			}
		case 'Q4_FORM_UNSAFE_DECREMENT':
			return {
				...state,
				q4FormUnSafeCount: state.q4FormUnSafeCount - 1
			}
		case 'Q4_FORM_FEEDBACK':
			return {
				...state,
				q4FormFeedBack: action.q4FormFeedBack
			}

		case 'Q5_FORM_SAFE_INCREMENT':
			return {
				...state,
				q5FormSafeCount: state.q5FormSafeCount + 1
			}
		case 'Q5_FORM_SAFE_DECREMENT':
			return {
				...state,
				q5FormSafeCount: state.q5FormSafeCount - 1
			}
		case 'Q5_FORM_UNSAFE_INCREMENT':
			return {
				...state,
				q5FormUnSafeCount: state.q5FormUnSafeCount + 1
			}
		case 'Q5_FORM_UNSAFE_DECREMENT':
			return {
				...state,
				q5FormUnSafeCount: state.q5FormUnSafeCount - 1
			}
		case 'Q5_FORM_FEEDBACK':
			return {
				...state,
				q5FormFeedBack: action.q5FormFeedBack
			}

		case 'Q6_FORM_SAFE_INCREMENT':
			return {
				...state,
				q6FormSafeCount: state.q6FormSafeCount + 1
			}
		case 'Q6_FORM_SAFE_DECREMENT':
			return {
				...state,
				q6FormSafeCount: state.q6FormSafeCount - 1
			}
		case 'Q6_FORM_UNSAFE_INCREMENT':
			return {
				...state,
				q6FormUnSafeCount: state.q6FormUnSafeCount + 1
			}
		case 'Q6_FORM_UNSAFE_DECREMENT':
			return {
				...state,
				q6FormUnSafeCount: state.q6FormUnSafeCount - 1
			}
		case 'Q6_FORM_FEEDBACK':
			return {
				...state,
				q6FormFeedBack: action.q6FormFeedBack
			}
		default:
			return state
	}
}

export default formReducer
