import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Home/Home'
import SignIn from './Components/NotIdentified/SignIn/SignIn'
import SignUp from './Components/NotIdentified/SignUp/CreateAccount'
import NotIdentifiedScreen from './Components/NotIdentified/NotIdentifiedScreen'
import CreateInfo from './Components/NotIdentified/SignUp/CreateInfo'
import { useSelector } from 'react-redux'
import AuditForm from './Components/Forms/AuditForm'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import './App.scss'
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute'
import VerifyResponse from './Components/VerifyResponse/VerifyResponse'
import UnloadProcedureAudit from './Components/QuickAudits/UnloadProcedureAudit'
import LoadProcedureAudit from './Components/QuickAudits/LoadProcedureAudit'
import TugList from './Components/ReportList/TugList'
import AuditRecord from './Components/VerifyResponse/AuditRecord'
import AdminConsole from './Components/AdminConsole/AdminConsole'
import PdfFormatAndPrintAudit from './Components/VerifyResponse/PdfFormatAndPrintAudit'
import MovementList from './Components/ReportList/MovementList'
import MonthlyReport from './Components/MonthlyReport/MonthlyReport'
import TopsideList from './Components/ReportList/TopsideList'
import Ranks from './Components/Ranks/Ranks'
import SelectMonth from './Components/MonthlyReport/SelectMonth'

function App() {
	const reduxUser = useSelector((state) => state.profile.basicUserInfo)

	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route path='/' exact={true} component={NotIdentifiedScreen} />
				<Route path='/sign_in' component={SignIn} />
				<Route path='/sign_up' component={SignUp} />
				<Route path='/sign_up_more_info/:id' component={CreateInfo} />
				<Route path='/home' exact={true} component={Home} />
				<Route path='/selectedMonthlyReport/:id' component={MonthlyReport} />
				<Route path='/select_month' exact={true} component={SelectMonth} />

				<ProtectedRoute user={!!reduxUser} exact={true} path='/audit_form' component={AuditForm} />
				<ProtectedRoute user={!!reduxUser} path='/audit_form/verify_response' component={VerifyResponse} />
				<ProtectedRoute user={!!reduxUser} path='/unload_procedure_audit' component={UnloadProcedureAudit} />
				<ProtectedRoute user={!!reduxUser} path='/load_procedure_audit' component={LoadProcedureAudit} />
				<ProtectedRoute user={!!reduxUser} exact={true} path='/tug_audit' component={TugList} />
				<ProtectedRoute user={!!reduxUser} exact={true} path='/package_movement' component={MovementList} />
				<ProtectedRoute user={!!reduxUser} exact={true} path='/topside_uld_movement' component={TopsideList} />
				<ProtectedRoute user={!!reduxUser} exact={true} path='/admin_console' component={AdminConsole} />
				<ProtectedRoute user={!!reduxUser} exact={true} path='/home/rankings' component={Ranks} />

				<ProtectedRoute user={!!reduxUser} path='/report_list/audit_record' component={AuditRecord} />
				<Route path='/download_pdf/:id' component={PdfFormatAndPrintAudit} />
			</Switch>
		</Router>
	)
}

export default App
