import React, { Fragment, useState, useEffect } from 'react'
import NavBar from '../Navbar/Navbar'
import '../../App.scss'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Footer/Footer'
import unloadQuestions from '../QuickAudits/unloadQuestions'
import tugLongQuestions from '../Forms/tugLongQuestions'
import tugShortQuestions from '../Forms/tugShortQuestions'
import './Home.scss'
import { faUsers, faPeopleCarry, faFileInvoice, faCarBattery, faTruckPickup as tug, faPlaneArrival as unload, faPlaneDeparture as load, faPlane as plane, faSync, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import HomeOption from './HomeOption'
import packageMovementLongQuestions from '../Forms/packageMovementLongQuestions'
import packageMovementShortQuestions from '../Forms/packageMovementShortQuestions'
import topsideShortQuestions from '../Forms/topsideShortQuestions'
import topsideLongQuestions from '../Forms/topsideLongQuestions'
import { getThisWeeksTugReports, getThisWeeksMovementReports, getThisWeeksTopsideReports, pushScoreboardToRedux } from '../../redux/actions/reportListActions'
import { getActiveSVs, getSVDocs } from '../../redux/actions/adminActions'
import { gsap } from 'gsap'
import SideDrawer from '../SideDrawer/SideDrawer'
import FoggedGlass from '../FoggedGlass/FoggedGlass'

const Main = () => {
	const tugItems = useSelector((state) => state.reportList.thisWeeksTugReports)
	const tugStats = useSelector((state) => state.reportList.weeklyUnsafeTugA1Values)
	const movementStats = useSelector((state) => state.reportList.weeklyUnsafeMovementA1Values)
	const topsideStats = useSelector((state) => state.reportList.weeklyUnsafeTopsideA1Values)
	const rankingStats = useSelector((state) => state.admin.svsDocs)
	const tugListLoading = useSelector((state) => state.reportList.tugListLoading)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const movementItems = useSelector((state) => state.reportList.thisWeeksMovementReports)
	const topsideItems = useSelector((state) => state.reportList.thisWeeksTopsideReports)
	const activeSVS = useSelector((state) => state.admin.activeSVList)
	const history = useHistory()
	const dispatch = useDispatch()
	const [ tugHasData, setTugHasData ] = useState(true)
	const [ movementHasData, setMovementHasData ] = useState(true)
	const [ topsideHasData, setTopsideHasData ] = useState(true)
	const [ rankingHasData, setRankingHasData ] = useState(true)
	const [ showMenu, setShowMenu ] = useState(false)

	useEffect(() => {
		//dispatch(getSVDocs())
		dispatch(getActiveSVs())
		console.log('ranking stats length', rankingStats)
		gsap.fromTo('section', 0.4, { opacity: 0, ease: 'slow(0.7, 0.7, false)', y: -100 }, { opacity: 1, y: 0 })

		checkData()
	}, [])

	const checkData = () => {
		if (!tugStats) {
			console.log('dispatched push topside to scoreboard')

			dispatch(pushScoreboardToRedux('tug_audit'))
		}
		if (!movementStats) {
			console.log('dispatched push topside to scoreboard')

			dispatch(pushScoreboardToRedux('package_movement'))
		}
		if (!topsideStats) {
			console.log('dispatched push topside to scoreboard')

			dispatch(pushScoreboardToRedux('topside_uld_movement'))
		}
		if (!movementItems) {
			console.log('dispatched getThisWeeksMovementReports')

			dispatch(getThisWeeksMovementReports())
		}
		if (!topsideItems) {
			console.log('dispatched getThisWeeksTopsideReports')

			dispatch(getThisWeeksTopsideReports())
		}
		if (!tugItems) {
			console.log('dispatched getThisWeeksTugReports')

			dispatch(getThisWeeksTugReports())
		}
		if (rankingStats === []) {
			console.log('fired off ranking stats')
			dispatch(getSVDocs())
		}
	}

	const handleTugRoute = () => {
		tugLongQuestions.map((n, idx) => {
			dispatch({ type: `LONG_QUESTION_${n.id}`, payload: n.question })
		})
		tugShortQuestions.map((n, idx) => {
			dispatch({ type: `SHORT_QUESTION_${n.id}`, payload: n.question })
		})
		dispatch({ type: 'FORM_COLLECTION', formCollection: 'tug_audit' })
		dispatch({ type: 'FORM_TITLE', formTitle: 'Tug Driver Audit' })
		dispatch({ type: 'TECHNICAL_FORM_NAME', technicalFormName: 'Air Contr Loader-HUB-4039-M--1 DA WING D HUB-2019' })
		dispatch({ type: 'SLIC', slic: 'HUB-4039-M--1 DA WING D HUB' })
		history.push('/audit_form')
	}

	const handlePackageMovement = () => {
		packageMovementLongQuestions.map((n, idx) => {
			dispatch({ type: `LONG_QUESTION_${n.id}`, payload: n.question })
		})
		packageMovementShortQuestions.map((n, idx) => {
			dispatch({ type: `SHORT_QUESTION_${n.id}`, payload: n.question })
		})
		dispatch({ type: 'FORM_COLLECTION', formCollection: 'package_movement' })
		dispatch({ type: 'FORM_TITLE', formTitle: 'Package Movement Audit' })
		dispatch({
			type: 'TECHNICAL_FORM_NAME',
			technicalFormName: 'Air Contr Loader-HUB-4039-M--1 DA WING D HUB-2019'
		})
		dispatch({ type: 'SLIC', slic: 'HUB-4039-M--1 DA WING D HUB' })
		history.push('/audit_form')
	}

	const handleTopside = () => {
		topsideLongQuestions.map((n, idx) => {
			dispatch({ type: `LONG_QUESTION_${n.id}`, payload: n.question })
		})
		topsideShortQuestions.map((n, idx) => {
			dispatch({ type: `SHORT_QUESTION_${n.id}`, payload: n.question })
		})
		dispatch({ type: 'FORM_COLLECTION', formCollection: 'topside_uld_movement' })
		dispatch({ type: 'FORM_TITLE', formTitle: 'Topside ULD Movement' })
		dispatch({
			type: 'TECHNICAL_FORM_NAME',
			technicalFormName: 'Air Contr Shifter-HUB-4039-M--1 DA WING D HUB-2019'
		})
		dispatch({ type: 'SLIC', slic: 'HUB-4039-M--1 DA WING D HUB' })
		history.push('/audit_form')
	}

	const handleUnload = () => {
		unloadQuestions.map((n, idx) => {
			console.log('n.id => ', n.id, n.question)
			dispatch({ type: `GEN_QUESTION_${n.id}`, payload: n.question })
		})
		dispatch({ type: 'GEN_FORM_TITLE', formTitle: 'Load Procedure Audit' })
		history.push('/unload_procedure_audit')
	}

	const handleAuditLog = async () => {
		if (!tugStats) {
			dispatch(pushScoreboardToRedux('tug_audit'))
			setTimeout(() => {
				console.log('waiting')
			}, 3000)
		}

		if (!tugItems) {
			setTugHasData(false)
			dispatch(getThisWeeksTugReports())
			setTimeout(() => {
				setTugHasData(true)
				history.replace('/tug_audit')
			}, 3000)
		} else {
			history.replace('/tug_audit')
		}

		return tugItems
	}

	const handleMovementAuditLog = async () => {
		if (!movementStats) {
			dispatch(pushScoreboardToRedux('package_movement'))
		}

		if (!movementItems) {
			setMovementHasData(false)
			dispatch(getThisWeeksMovementReports())
			setTimeout(() => {
				setMovementHasData(true)
				history.replace('/package_movement')
			}, 3000)
		} else {
			history.replace('/package_movement')
		}
	}

	const handleTopsideAuditLog = async () => {
		if (!topsideStats) {
			dispatch(pushScoreboardToRedux('topside_uld_movement'))
		}

		if (!topsideItems) {
			setTopsideHasData(false)
			dispatch(getThisWeeksTopsideReports())
			setTimeout(() => {
				setTopsideHasData(true)
				history.replace('/topside_uld_movement')
			}, 3000)
		} else {
			history.replace('/topside_uld_movement')
		}

		return topsideItems
	}

	const handleRankings = () => {
		if (rankingStats.length < 1) {
			return dispatch(getSVDocs()), console.log('firing ranking stats', rankingStats), history.push('/home/rankings')
			// setRankingHasData(false),
			// 	setRankingHasData(true)
		}
		history.push('/home/rankings')
	}

	return (
		<Fragment>
			<NavBar />
			{/* <SideDrawer/>
						<FoggedGlass/> */}
			<Fragment>
				<div className={darkMode ? 'home-parent-dark' : 'home-parent-light'}>
					<section className='home-table-block'>
						<h2 className={darkMode ? 'perform-which-dark' : 'perform-which-light'}> Select an Audit to Perform</h2>
						<HomeOption formName={'Tug Audit'} icon={tug} onClick={handleTugRoute} />
						<HomeOption formName={'Correct Package Lifting Audit'} icon={faPeopleCarry} onClick={handlePackageMovement} />
						<HomeOption formName={'Topside ULD Movement Audit'} icon={plane} onClick={handleTopside} />

						<HomeOption formName={'Overall Procedure Audit'} icon={load} onClick={handleUnload} />
						{/* <HomeOption formName={'Plane Perimeter Audit'} icon={faAvianex} /> */}

						<h2 className={darkMode ? 'perform-which-dark' : 'perform-which-light'}>Schedule</h2>
						<Fragment>{rankingHasData ? <HomeOption formName={'Teams, Shifts & SE Ratings'} icon={faUsers} onClick={handleRankings} /> : <HomeOption formName={'SV Safety Stats'} icon={faUsers} spin />}</Fragment>

						<h2 className={darkMode ? 'perform-which-dark' : 'perform-which-light'}>Safety Insights</h2>

						{/* <HomeOption formName={'Equipment Maint Log'} icon={faCarBattery} /> */}
						<Fragment>{tugHasData ? <HomeOption formName={'Tug Records'} icon={faFileInvoice} onClick={handleAuditLog} /> : <HomeOption formName={'...Loading Data From DataBase'} icon={faSync} spin />}</Fragment>
						<Fragment>{movementHasData ? <HomeOption formName={'Package Movement Records'} icon={faFileInvoice} onClick={handleMovementAuditLog} /> : <HomeOption formName={'...Loading Data From DataBase'} icon={faSync} spin />}</Fragment>
						<Fragment>{topsideHasData ? <HomeOption formName={'Topside Records'} icon={faFileInvoice} onClick={handleTopsideAuditLog} /> : <HomeOption formName={'...Loading Data From DataBase'} icon={faSync} spin />}</Fragment>
						<HomeOption formName={'Monthly Reports'} icon={faClipboard} onClick={() => history.push('/select_Month')} />

						<div className={darkMode ? 'perform-which-dark' : 'perform-which-light'}>
							<div style={{ fontSize: '14px' }}>(Use Overall Audit Only When Directed)</div>
						</div>
					</section>
				</div>
			</Fragment>
			<Footer />
		</Fragment>
	)
}
export default Main
