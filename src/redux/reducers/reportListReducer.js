const initialState = {
	specificReport: '',
	tugListLoading: false,
	movementListLoading: false,
	topsideListLoading: false,
	weeklyUnsafeTopsideA1Values: '',
	weeklyUnsafeTopsideA2Values: ' ',
	weeklyUnsafeTopsideA3Values: ' ',
	weeklyUnsafeTopsideA4Values: ' ',
	weeklyUnsafeTopsideA5Values: ' ',
	weeklyUnsafeTopsideA6Values: ' ',
	weeklySafeTopsideA1Values: ' ',
	weeklySafeTopsideA2Values: ' ',
	weeklySafeTopsideA3Values: ' ',
	weeklySafeTopsideA4Values: ' ',
	weeklySafeTopsideA5Values: ' ',
	weeklySafeTopsideA6Values: ' ',
	//thisWeeksTopsideReports: ' ',
	scoreboardTopsideUnsafeQ1: ' ',
	scoreboardTopsideUnsafeQ2: ' ',
	scoreboardTopsideUnsafeQ3: ' ',
	scoreboardTopsideUnsafeQ4: ' ',
	scoreboardTopsideUnsafeQ5: ' ',
	scoreboardTopsideUnsafeQ6: ' ',
	weeklyUnsafeTugA2Values: ' ',
	weeklyUnsafeTugA3Values: ' ',
	weeklyUnsafeTugA4Values: ' ',
	weeklyUnsafeTugA5Values: ' ',
	weeklyUnsafeTugA6Values: ' ',
	weeklySafeTugA1Values: ' ',
	weeklySafeTugA2Values: ' ',
	weeklySafeTugA3Values: ' ',
	weeklySafeTugA4Values: ' ',
	weeklySafeTugA5Values: ' ',
	weeklySafeTugA6Values: ' ',
	//	thisWeeksTugReports: ' ',
	scoreboardTugUnsafeQ1: ' ',
	scoreboardTugUnsafeQ2: ' ',
	scoreboardTugUnsafeQ3: ' ',
	scoreboardTugUnsafeQ4: ' ',
	scoreboardTugUnsafeQ5: ' ',
	scoreboardTugUnsafeQ6: ' ',
	weeklyUnsafeMovementA2Values: ' ',
	weeklyUnsafeMovementA3Values: ' ',
	weeklyUnsafeMovementA4Values: ' ',
	weeklyUnsafeMovementA5Values: ' ',
	weeklyUnsafeMovementA6Values: ' ',
	weeklySafeMovementA1Values: ' ',
	weeklySafeMovementA2Values: ' ',
	weeklySafeMovementA3Values: ' ',
	weeklySafeMovementA4Values: ' ',
	weeklySafeMovementA5Values: ' ',
	weeklySafeMovementA6Values: ' ',
	//	thisWeeksMovementReports: ' ',
	scoreboardMovementUnsafeQ1: ' ',
	scoreboardMovementUnsafeQ2: ' ',
	scoreboardMovementUnsafeQ3: ' ',
	scoreboardMovementUnsafeQ4: ' ',
	scoreboardMovementUnsafeQ5: ' ',
	scoreboardMovementUnsafeQ6: ' '
}

const reportListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CLEAR_DB_RECORDS':
			return initialState
		case 'GENERATING_REPORT':
			return { ...state, reportStatus: action.payload }
		case 'SPECIFIC_REPORT':
			return { ...state, specificReport: action.payload }
		case 'CLEAR_SPECIFIC_REPORT':
			return { ...state, specificReport: '' }
		case 'TUG_LIST_LOADING':
			return { ...state, tugListLoading: action.payload }
		case 'TOPSIDE_LIST_LOADING':
			return { ...state, topsideListLoading: action.payload }
		case 'MOVEMENT_LIST_LOADING':
			return { ...state, movementListLoading: action.payload }
		case 'SEND_SELECTED_DATE':
			return { ...state, sentDate: action.payload }

		case 'GET_THIS_WEEKS_TUG_REPORTS':
			return { ...state, thisWeeksTugReports: action.payload }
		case 'WEEKLY_SAFE_TUG_AUDIT_A1_VALUES':
			return { ...state, weeklySafeTugA1Values: action.payload }
		case 'WEEKLY_SAFE_TUG_AUDIT_A2_VALUES':
			return { ...state, weeklySafeTugA2Values: action.payload }
		case 'WEEKLY_SAFE_TUG_AUDIT_A3_VALUES':
			return { ...state, weeklySafeTugA3Values: action.payload }
		case 'WEEKLY_SAFE_TUG_AUDIT_A4_VALUES':
			return { ...state, weeklySafeTugA4Values: action.payload }
		case 'WEEKLY_SAFE_TUG_AUDIT_A5_VALUES':
			return { ...state, weeklySafeTugA5Values: action.payload }
		case 'WEEKLY_SAFE_TUG_AUDIT_A6_VALUES':
			return { ...state, weeklySafeTugA6Values: action.payload }

		case 'WEEKLY_UNSAFE_TUG_AUDIT_A1_VALUES':
			return { ...state, weeklyUnsafeTugA1Values: action.payload }
		case 'WEEKLY_UNSAFE_TUG_AUDIT_A2_VALUES':
			return { ...state, weeklyUnsafeTugA2Values: action.payload }
		case 'WEEKLY_UNSAFE_TUG_AUDIT_A3_VALUES':
			return { ...state, weeklyUnsafeTugA3Values: action.payload }
		case 'WEEKLY_UNSAFE_TUG_AUDIT_A4_VALUES':
			return { ...state, weeklyUnsafeTugA4Values: action.payload }
		case 'WEEKLY_UNSAFE_TUG_AUDIT_A5_VALUES':
			return { ...state, weeklyUnsafeTugA5Values: action.payload }
		case 'WEEKLY_UNSAFE_TUG_AUDIT_A6_VALUES':
			return { ...state, weeklyUnsafeTugA6Values: action.payload }

		//Scoreboard SE TUG
		case 'SCOREBOARD_Q1_TUG_AUDIT_SE':
			return { ...state, scoreboardTugUnsafeQ1: action.payload }
		case 'SCOREBOARD_Q2_TUG_AUDIT_SE':
			return { ...state, scoreboardTugUnsafeQ2: action.payload }
		case 'SCOREBOARD_Q3_TUG_AUDIT_SE':
			return { ...state, scoreboardTugUnsafeQ3: action.payload }
		case 'SCOREBOARD_Q4_TUG_AUDIT_SE':
			return { ...state, scoreboardTugUnsafeQ4: action.payload }
		case 'SCOREBOARD_Q5_TUG_AUDIT_SE':
			return { ...state, scoreboardTugUnsafeQ5: action.payload }
		case 'SCOREBOARD_Q6_TUG_AUDIT_SE':
			return { ...state, scoreboardTugUnsafeQ6: action.payload }

		case 'SCOREBOARD_Q1_PACKAGE_MOVEMENT_SE':
			return { ...state, scoreboardMovementUnsafeQ1: action.payload }
		case 'SCOREBOARD_Q2_PACKAGE_MOVEMENT_SE':
			return { ...state, scoreboardMovementUnsafeQ2: action.payload }
		case 'SCOREBOARD_Q3_PACKAGE_MOVEMENT_SE':
			return { ...state, scoreboardMovementUnsafeQ3: action.payload }
		case 'SCOREBOARD_Q4_PACKAGE_MOVEMENT_SE':
			return { ...state, scoreboardMovementUnsafeQ4: action.payload }
		case 'SCOREBOARD_Q5_PACKAGE_MOVEMENT_SE':
			return { ...state, scoreboardMovementUnsafeQ5: action.payload }
		case 'SCOREBOARD_Q6_PACKAGE_MOVEMENT_SE':
			return { ...state, scoreboardMovementUnsafeQ6: action.payload }

		case 'SCOREBOARD_Q1_TOPSIDE_ULD_MOVEMENT_SE':
			return { ...state, scoreboardTopsideUnsafeQ1: action.payload }
		case 'SCOREBOARD_Q2_TOPSIDE_ULD_MOVEMENT_SE':
			return { ...state, scoreboardTopsideUnsafeQ2: action.payload }
		case 'SCOREBOARD_Q3_TOPSIDE_ULD_MOVEMENT_SE':
			return { ...state, scoreboardTopsideUnsafeQ3: action.payload }
		case 'SCOREBOARD_Q4_TOPSIDE_ULD_MOVEMENT_SE':
			return { ...state, scoreboardTopsideUnsafeQ4: action.payload }
		case 'SCOREBOARD_Q5_TOPSIDE_ULD_MOVEMENT_SE':
			return { ...state, scoreboardTopsideUnsafeQ5: action.payload }
		case 'SCOREBOARD_Q6_TOPSIDE_ULD_MOVEMENT_SE':
			return { ...state, scoreboardTopsideUnsafeQ6: action.payload }

		case 'GET_THIS_WEEKS_MOVEMENT_REPORTS':
			return { ...state, thisWeeksMovementReports: action.payload }

		case 'WEEKLY_SAFE_PACKAGE_MOVEMENT_A1_VALUES':
			return { ...state, weeklySafeMovementA1Values: action.payload }
		case 'WEEKLY_SAFE_PACKAGE_MOVEMENT_A2_VALUES':
			return { ...state, weeklySafeMovementA2Values: action.payload }
		case 'WEEKLY_SAFE_PACKAGE_MOVEMENT_A3_VALUES':
			return { ...state, weeklySafeMovementA3Values: action.payload }
		case 'WEEKLY_SAFE_PACKAGE_MOVEMENT_A4_VALUES':
			return { ...state, weeklySafeMovementA4Values: action.payload }
		case 'WEEKLY_SAFE_PACKAGE_MOVEMENT_A5_VALUES':
			return { ...state, weeklySafeMovementA5Values: action.payload }
		case 'WEEKLY_SAFE_PACKAGE_MOVEMENT_A6_VALUES':
			return { ...state, weeklySafeMovementA6Values: action.payload }
		case 'WEEKLY_UNSAFE_PACKAGE_MOVEMENT_A1_VALUES':
			return { ...state, weeklyUnsafeMovementA1Values: action.payload }
		case 'WEEKLY_UNSAFE_PACKAGE_MOVEMENT_A2_VALUES':
			return { ...state, weeklyUnsafeMovementA2Values: action.payload }
		case 'WEEKLY_UNSAFE_PACKAGE_MOVEMENT_A3_VALUES':
			return { ...state, weeklyUnsafeMovementA3Values: action.payload }
		case 'WEEKLY_UNSAFE_PACKAGE_MOVEMENT_A4_VALUES':
			return { ...state, weeklyUnsafeMovementA4Values: action.payload }
		case 'WEEKLY_UNSAFE_PACKAGE_MOVEMENT_A5_VALUES':
			return { ...state, weeklyUnsafeMovementA5Values: action.payload }
		case 'WEEKLY_UNSAFE_PACKAGE_MOVEMENT_A6_VALUES':
			return { ...state, weeklyUnsafeMovementA6Values: action.payload }

		case 'ACCUMULATIVE_UNSAFE_MOVEMENT_QUESTION_1_BEHAVIORS':
			return { ...state, weeklyUnsafeMovementA6Values: action.payload }

		case 'GET_THIS_WEEKS_TOPSIDE_REPORTS':
			return { ...state, thisWeeksTopsideReports: action.payload }
		case 'WEEKLY_SAFE_TOPSIDE_ULD_MOVEMENT_A1_VALUES':
			return { ...state, weeklySafeTopsideA1Values: action.payload }
		case 'WEEKLY_SAFE_TOPSIDE_ULD_MOVEMENT_A2_VALUES':
			return { ...state, weeklySafeTopsideA2Values: action.payload }
		case 'WEEKLY_SAFE_TOPSIDE_ULD_MOVEMENT_A3_VALUES':
			return { ...state, weeklySafeTopsideA3Values: action.payload }
		case 'WEEKLY_SAFE_TOPSIDE_ULD_MOVEMENT_A4_VALUES':
			return { ...state, weeklySafeTopsideA4Values: action.payload }
		case 'WEEKLY_SAFE_TOPSIDE_ULD_MOVEMENT_A5_VALUES':
			return { ...state, weeklySafeTopsideA5Values: action.payload }
		case 'WEEKLY_SAFE_TOPSIDE_ULD_MOVEMENT_A6_VALUES':
			return { ...state, weeklySafeTopsideA6Values: action.payload }
		case 'WEEKLY_UNSAFE_TOPSIDE_ULD_MOVEMENT_A1_VALUES':
			return { ...state, weeklyUnsafeTopsideA1Values: action.payload }
		case 'WEEKLY_UNSAFE_TOPSIDE_ULD_MOVEMENT_A2_VALUES':
			return { ...state, weeklyUnsafeTopsideA2Values: action.payload }
		case 'WEEKLY_UNSAFE_TOPSIDE_ULD_MOVEMENT_A3_VALUES':
			return { ...state, weeklyUnsafeTopsideA3Values: action.payload }
		case 'WEEKLY_UNSAFE_TOPSIDE_ULD_MOVEMENT_A4_VALUES':
			return { ...state, weeklyUnsafeTopsideA4Values: action.payload }
		case 'WEEKLY_UNSAFE_TOPSIDE_ULD_MOVEMENT_A5_VALUES':
			return { ...state, weeklyUnsafeTopsideA5Values: action.payload }
		case 'WEEKLY_UNSAFE_TOPSIDE_ULD_MOVEMENT_A6_VALUES':
			return { ...state, weeklyUnsafeTopsideA6Values: action.payload }
		case 'ACCUMULATIVE_UNSAFE_TOPSIDE_QUESTION_1_BEHAVIORS':
			return { ...state, overallTopsideMonthlySE: action.payload }
		default:
			return state
	}
}

export default reportListReducer
