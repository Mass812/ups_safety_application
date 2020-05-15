import loadingReducer from './loadingReducer'
import profileReducer from './profileReducer'
import authReducer from './authReducer'
import generalAuditReducer from './generalAuditReducer'
import auditFormReducer from './auditFormReducer'
import reportListReducer from './reportListReducer'
import adminReducer from './adminReducer'
import monthlyReducer from './monthlyReducer'
import { combineReducers } from 'redux'
import darkModeReducer from './darkModeReducer'

const rootReducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer,
	profile: profileReducer,
	auditForm: auditFormReducer,
	genAuditForm: generalAuditReducer,
	reportList: reportListReducer,
	darkMode: darkModeReducer,
	admin: adminReducer,
	monthlyReport: monthlyReducer
})

export default rootReducer
