const initialState = {
	genFormTitle: 'General Audit',
	supervisor: '',
	genFormDate: '',
	genPersonCount: '',
	genQuestion1: '',
	genQuestion2: '',
	genQuestion3: '',
	genQuestion4: '',
	genQuestion5: '',
	genQuestion6: '',
	genQuestion7: '',
	genQuestion8: '',
	genQuestion9: '',
	genQuestion10: '',
	genQuestion11: '',
	genQuestion12: '',
	genQuestion13: '',
	genQuestion14: '',
	genQuestion15: '',
	genQuestion16: '',
	genQuestion17: '',
	genQuestion18: '',
	genQuestion19: '',
	genQuestion20: '',
	genQuestion21: '',
	genQuestion22: '',
	genQuestion23: '',
	genQuestion24: '',
	genQuestion25: '',
	genQuestion26: '',
	genQuestion27: '',
	genQuestion28: '',
	genQuestion29: '',
	genQuestion30: '',
	genAnswer1: 'N/A',
	genAnswer19: 'N/A',
	genAnswer2: 'N/A',
	genAnswer3: 'N/A',
	genAnswer4: 'N/A',
	genAnswer5: 'N/A',
	genAnswer6: 'N/A',
	genAnswer7: 'N/A',
	genAnswer8: 'N/A',
	genAnswer10: 'N/A',
	genAnswer9: 'N/A',
	genAnswer12: 'N/A',
	genAnswer13: 'N/A',
	genAnswer14: 'N/A',
	genAnswer15: 'N/A',
	genAnswer16: 'N/A',
	genAnswer17: 'N/A',
	genAnswer18: 'N/A',
	genAnswer20: 'N/A',
	genAnswer11: 'N/A',
	response1: '',
	response2: '',
	response3: '',
	response4: '',
	response5: '',
	response6: '',
	response7: '',
	response8: '',
	response9: '',
	response10: '',
	response11: '',
	response12: '',
	response13: '',
	response14: '',
	response15: '',
	response16: '',
	response17: '',
	response18: '',
	response19: '',
	response20: '',
	response21: '',
	response22: '',
	response23: '',
	response24: '',
	response25: '',
	response26: '',
	response27: '',
	response28: '',
	response29: '',
	response30: ''
}

const generalAuditReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'RESET_FORM':
			return initialState
		case 'GEN_FORM_TITLE':
			return { ...state, formTitle: action.payload }
		case 'GEN_FORM_SV':
			return { ...state, supervisor: action.payload }
		case 'GEN_PERSON_COUNT':
			return { ...state, genPersonCount: action.payload }
		case 'GEN_FORM_DATE':
			return { ...state, genFormDate: action.payload }
		case 'GEN_QUESTION_1':
			return { ...state, genQuestion1: action.payload }
		case 'GEN_ANSWER_1':
			return { ...state, genAnswer1: action.payload }
		case 'GEN_QUESTION_2':
			return { ...state, genQuestion2: action.payload }
		case 'GEN_ANSWER_2':
			return { ...state, genAnswer2: action.payload }
		case 'GEN_QUESTION_3':
			return { ...state, genQuestion3: action.payload }
		case 'GEN_ANSWER_3':
			return { ...state, genAnswer3: action.payload }
		case 'GEN_QUESTION_4':
			return { ...state, genQuestion4: action.payload }
		case 'GEN_ANSWER_4':
			return { ...state, genAnswer4: action.payload }
		case 'GEN_QUESTION_5':
			return { ...state, genQuestion5: action.payload }
		case 'GEN_ANSWER_5':
			return { ...state, genAnswer5: action.payload }
		case 'GEN_QUESTION_6':
			return { ...state, genQuestion6: action.payload }
		case 'GEN_ANSWER_6':
			return { ...state, genAnswer6: action.payload }
		case 'GEN_QUESTION_7':
			return { ...state, genQuestion7: action.payload }
		case 'GEN_ANSWER_7':
			return { ...state, genAnswer7: action.payload }
		case 'GEN_QUESTION_8':
			return { ...state, genQuestion8: action.payload }
		case 'GEN_ANSWER_8':
			return { ...state, genAnswer8: action.payload }
		case 'GEN_QUESTION_9':
			return { ...state, genQuestion9: action.payload }
		case 'GEN_ANSWER_9':
			return { ...state, genAnswer9: action.payload }
		case 'GEN_QUESTION_10':
			return { ...state, genQuestion10: action.payload }
		case 'GEN_ANSWER_10':
			return { ...state, genAnswer10: action.payload }
		case 'GEN_QUESTION_11':
			return { ...state, genQuestion11: action.payload }
		case 'GEN_ANSWER_11':
			return { ...state, genAnswer11: action.payload }
		case 'GEN_QUESTION_12':
			return { ...state, genQuestion12: action.payload }
		case 'GEN_ANSWER_12':
			return { ...state, genAnswer12: action.payload }
		case 'GEN_QUESTION_13':
			return { ...state, genQuestion13: action.payload }
		case 'GEN_ANSWER_13':
			return { ...state, genAnswer13: action.payload }
		case 'GEN_QUESTION_14':
			return { ...state, genQuestion14: action.payload }
		case 'GEN_ANSWER_14':
			return { ...state, genAnswer14: action.payload }
		case 'GEN_QUESTION_15':
			return { ...state, genQuestion15: action.payload }
		case 'GEN_ANSWER_15':
			return { ...state, genAnswer15: action.payload }
		case 'GEN_QUESTION_16':
			return { ...state, genQuestion16: action.payload }
		case 'GEN_ANSWER_16':
			return { ...state, genAnswer16: action.payload }
		case 'GEN_QUESTION_17':
			return { ...state, genQuestion17: action.payload }
		case 'GEN_ANSWER_17':
			return { ...state, genAnswer17: action.payload }
		case 'GEN_QUESTION_18':
			return { ...state, genQuestion18: action.payload }
		case 'GEN_ANSWER_18':
			return { ...state, genAnswer18: action.payload }
		case 'GEN_QUESTION_19':
			return { ...state, genQuestion19: action.payload }
		case 'GEN_ANSWER_19':
			return { ...state, genAnswer19: action.payload }
		case 'GEN_QUESTION_20':
			return { ...state, genQuestion20: action.payload }
		case 'GEN_ANSWER_20':
			return { ...state, genAnswer20: action.payload }
		case 'GEN_QUESTION_21':
			return { ...state, genQuestion21: action.payload }
		case 'GEN_ANSWER_21':
			return { ...state, genAnswer21: action.payload }
		case 'GEN_QUESTION_22':
			return { ...state, genQuestion22: action.payload }
		case 'GEN_ANSWER_22':
			return { ...state, genAnswer22: action.payload }
		case 'GEN_QUESTION_23':
			return { ...state, genQuestion23: action.payload }
		case 'GEN_ANSWER_23':
			return { ...state, genAnswer23: action.payload }
		case 'GEN_QUESTION_24':
			return { ...state, genQuestion24: action.payload }
		case 'GEN_ANSWER_24':
			return { ...state, genAnswer24: action.payload }
		case 'GEN_QUESTION_25':
			return { ...state, genQuestion25: action.payload }
		case 'GEN_ANSWER_25':
			return { ...state, genAnswer25: action.payload }
		case 'GEN_QUESTION_26':
			return { ...state, genQuestion26: action.payload }
		case 'GEN_ANSWER_26':
			return { ...state, genAnswer26: action.payload }
		case 'GEN_QUESTION_27':
			return { ...state, genQuestion27: action.payload }
		case 'GEN_ANSWER_27':
			return { ...state, genAnswer27: action.payload }
		case 'GEN_QUESTION_28':
			return { ...state, genQuestion28: action.payload }
		case 'GEN_ANSWER_28':
			return { ...state, genAnswer28: action.payload }
		case 'GEN_QUESTION_29':
			return { ...state, genQuestion29: action.payload }
		case 'GEN_ANSWER_29':
			return { ...state, genAnswer29: action.payload }
		case 'GEN_QUESTION_30':
			return { ...state, genQuestion30: action.payload }
		case 'GEN_ANSWER_30':
			return { ...state, genAnswer30: action.payload }
		case 'PROCEDURE_RESPONSE_1':
			return { ...state, response1: action.payload }
		case 'PROCEDURE_RESPONSE_2':
			return { ...state, response2: action.payload }
		case 'PROCEDURE_RESPONSE_3':
			return { ...state, response3: action.payload }
		case 'PROCEDURE_RESPONSE_4':
			return { ...state, response4: action.payload }
		case 'PROCEDURE_RESPONSE_5':
			return { ...state, response5: action.payload }
		case 'PROCEDURE_RESPONSE_6':
			return { ...state, response6: action.payload }
		case 'PROCEDURE_RESPONSE_7':
			return { ...state, response7: action.payload }
		case 'PROCEDURE_RESPONSE_8':
			return { ...state, response8: action.payload }
		case 'PROCEDURE_RESPONSE_9':
			return { ...state, response9: action.payload }
		case 'PROCEDURE_RESPONSE_10':
			return { ...state, response10: action.payload }
		case 'PROCEDURE_RESPONSE_11':
			return { ...state, response11: action.payload }
		case 'PROCEDURE_RESPONSE_12':
			return { ...state, response12: action.payload }
		case 'PROCEDURE_RESPONSE_13':
			return { ...state, response13: action.payload }
		case 'PROCEDURE_RESPONSE_14':
			return { ...state, response14: action.payload }
		case 'PROCEDURE_RESPONSE_15':
			return { ...state, response15: action.payload }
		case 'PROCEDURE_RESPONSE_16':
			return { ...state, response16: action.payload }
		case 'PROCEDURE_RESPONSE_17':
			return { ...state, response17: action.payload }
		case 'PROCEDURE_RESPONSE_18':
			return { ...state, response18: action.payload }
		case 'PROCEDURE_RESPONSE_19':
			return { ...state, response19: action.payload }
		case 'PROCEDURE_RESPONSE_20':
			return { ...state, response20: action.payload }
		case 'PROCEDURE_RESPONSE_21':
			return { ...state, response21: action.payload }
		case 'PROCEDURE_RESPONSE_22':
			return { ...state, response22: action.payload }
		case 'PROCEDURE_RESPONSE_23':
			return { ...state, response23: action.payload }
		case 'PROCEDURE_RESPONSE_24':
			return { ...state, response24: action.payload }
		case 'PROCEDURE_RESPONSE_25':
			return { ...state, response25: action.payload }
		case 'PROCEDURE_RESPONSE_26':
			return { ...state, response26: action.payload }
		case 'PROCEDURE_RESPONSE_27':
			return { ...state, response27: action.payload }
		case 'PROCEDURE_RESPONSE_28':
			return { ...state, response28: action.payload }
		case 'PROCEDURE_RESPONSE_29':
			return { ...state, response29: action.payload }
		case 'PROCEDURE_RESPONSE_30':
			return { ...state, response30: action.payload }
		default:
			return state
	}
}

export default generalAuditReducer
