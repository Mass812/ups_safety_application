import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { getThisWeeksMovementReports, pushScoreboardToRedux } from '../../redux/actions/reportListActions'
import './ReportList.scss'
import Button from '../Button/Button'
import { faSpinner, faComment, faSync } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//filter by incident

//filter by Auditor

const MovementList = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [ hasData, setHasData ] = useState(true)
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	const thisWeeksMovementReports = useSelector((state) => state.reportList.thisWeeksMovementReports)
	const a1Safe = useSelector((state) => state.reportList.weeklySafeMovementA1Values)
	const a2Safe = useSelector((state) => state.reportList.weeklySafeMovementA2Values)
	const a3Safe = useSelector((state) => state.reportList.weeklySafeMovementA3Values)
	const a4Safe = useSelector((state) => state.reportList.weeklySafeMovementA4Values)
	const a5Safe = useSelector((state) => state.reportList.weeklySafeMovementA5Values)
	const a6Safe = useSelector((state) => state.reportList.weeklySafeMovementA6Values)
	const a1UnSafe = useSelector((state) => state.reportList.weeklyUnsafeMovementA1Values)
	const a2UnSafe = useSelector((state) => state.reportList.weeklyUnsafeMovementA2Values)
	const a3UnSafe = useSelector((state) => state.reportList.weeklyUnsafeMovementA3Values)
	const a4UnSafe = useSelector((state) => state.reportList.weeklyUnsafeMovementA4Values)
	const a5UnSafe = useSelector((state) => state.reportList.weeklyUnsafeMovementA5Values)
	const a6UnSafe = useSelector((state) => state.reportList.weeklyUnsafeMovementA6Values)
	const a1SE = useSelector((state) => state.reportList.scoreboardMovementUnsafeQ1)
	const a2SE = useSelector((state) => state.reportList.scoreboardMovementUnsafeQ2)
	const a3SE = useSelector((state) => state.reportList.scoreboardMovementUnsafeQ3)
	const a4SE = useSelector((state) => state.reportList.scoreboardMovementUnsafeQ4)
	const a5SE = useSelector((state) => state.reportList.scoreboardMovementUnsafeQ5)
	const a6SE = useSelector((state) => state.reportList.scoreboardMovementUnsafeQ6)
	const month = new Date()
	const [lastReports, setLastReports] = useState(thisWeeksMovementReports)

useEffect(() => {
	setLastReports(thisWeeksMovementReports)

}, [thisWeeksMovementReports])




	const refresh = () => {
		setHasData(false)
		dispatch(pushScoreboardToRedux('package_movement'))
		dispatch(getThisWeeksMovementReports())
		setTimeout(() => {
			setHasData(true)
		}, 2000)
	}

	const getReport = (id) => {
		console.log('firing getReport')
		thisWeeksMovementReports.filter((n) => {
			if (n.formId === id) {
				console.log('in getReport value of n', n)
				dispatch({ type: 'SPECIFIC_REPORT', payload: n })
				history.push(`/report_list/audit_record`)
			}
		})
	}

	let displayMovementReports = lastReports.map((n, idx) => (
		<Fragment key={n.formId}>
			<div className={darkMode ? 'report-banner-dark' : 'report-banner-light'} onClick={(e) => getReport(n.formId, n.idx, e)}>
				<div className='report-hard-data'>
					<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>
						SV: <span style={{ color: 'rgb(211,165, 13)' }}>{n.Observer_Group}</span>
					</div>

					<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> Form ID: {n.formId}</div>
					<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {n.date}</div>
					<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>
						{' '}
						Auditor: {n.Observer_Name}
						<span style={{ paddingLeft: '10px' }}>{n.comments !== 'No Comments' ? <FontAwesomeIcon icon={faComment} /> : null}</span>
					</div>
				</div>
				<div className={darkMode ? 'safe-unsafe-ratio-dark' : 'safe-unsafe-ratio-light'}>
					<div className={darkMode ? 'safe-unsafe-ratio-percent-dark' : 'safe-unsafe-ratio-percent-light'}>
						{n.efficiency}
						<span style={{ fontSize: '14px' }}>%</span>{' '}
					</div>
					<div className={darkMode ? 'safe-unsafe-ratio-text-dark' : 'safe-unsafe-ratio-text-light'}>Safety Efficiency</div>
					<div className={darkMode ? 'safe-unsafe-ratio-link-dark' : 'safe-unsafe-ratio-link-light'}>See Report</div>
				</div>
			</div>
		</Fragment>
	))

	return (
		<Fragment>
			<Navbar />

				<Fragment>
			<div className={darkMode ? 'report-link-container-dark' : 'report-link-container-light'}>
				{!hasData ? (
					<FontAwesomeIcon icon={faSpinner} spin />
				) : (
					<div onClick={refresh}>
						Refresh <FontAwesomeIcon icon={faSync} />{' '}
					</div>
				)}

					<div className={darkMode ? 'report-banner-subject-dark' : 'report-banner-subject-light'}>This Months Stats</div>

					<div style={{ display: 'flex' }} className={darkMode ? 'left-side-scoreboard-titles-dark' : 'left-side-scoreboard-titles-light'}>
						<div className={darkMode ? 'scoreboard-titles-dark' : 'scoreboard-titles-light'}>
							<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}>Behavior </div>
							<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Bends at Knee's</div>
							<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Power Zone</div>
							<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Initial Test Weight</div>
							<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Hand to Surface</div>
							<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Faces Flow</div>
							<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Uses Load Stand</div>
						</div>
						<div className={darkMode ? 'scoreboard-dark' : 'scoreboard-light'}>
							<div className={darkMode ? 'scoreboard-safe-dark' : 'scoreboard-safe-light'}>
								<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}>Safe</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>{a1Safe ? a1Safe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>{a2Safe ? a2Safe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>{a3Safe ? a3Safe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>{a4Safe ? a4Safe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>{a5Safe ? a5Safe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>{a6Safe ? a6Safe : null}</div>
							</div>

							<div className={darkMode ? 'scoreboard-unsafe-dark' : 'scoreboard-unsafe-light'}>
								<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}> Unsafe</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a1UnSafe ? a1UnSafe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a2UnSafe ? a2UnSafe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a3UnSafe ? a3UnSafe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a4UnSafe ? a4UnSafe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a5UnSafe ? a5UnSafe : null}</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a6UnSafe ? a6UnSafe : null}</div>
							</div>
							<div className={darkMode ? 'scoreboard-unsafe-dark' : 'scoreboard-unsafe-light'}>
								<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}> SE</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a1SE ? a1SE : null}%</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a2SE ? a2SE : null}%</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a3SE ? a3SE : null}%</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a4SE ? a4SE : null}%</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a5SE ? a5SE : null}%</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}> {a6SE ? a6SE : null}%</div>
							</div>
						</div>
					</div>
				<div className={darkMode ? 'report-card-parent' : 'report-card-parent'}>
					<div className={darkMode ? 'report-banner-subject-dark' : 'report-banner-subject-light'}>Package Movement Reports</div>
					<div >{displayMovementReports}</div>
					</div>
			</div>
				</Fragment>

				<Footer />
		</Fragment>
	)
}
export default MovementList
