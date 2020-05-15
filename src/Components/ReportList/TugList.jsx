import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { getThisWeeksTugReports, pushScoreboardToRedux } from '../../redux/actions/reportListActions'
import './ReportList.scss'
import Button from '../Button/Button'
import { useHistory, useParams, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faComment, faSync } from '@fortawesome/free-solid-svg-icons'

//filter by incident

//filter by Auditor

const TugList = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [ hasData, setHasData ] = useState(true)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const param = useParams()
	const location = useLocation()

	//TODO minimize to single use reducer
	const thisWeeksTugReports = useSelector((state) => state.reportList.thisWeeksTugReports)
	const a1Safe = useSelector((state) => state.reportList.weeklySafeTugA1Values)
	const a2Safe = useSelector((state) => state.reportList.weeklySafeTugA2Values)
	const a3Safe = useSelector((state) => state.reportList.weeklySafeTugA3Values)
	const a4Safe = useSelector((state) => state.reportList.weeklySafeTugA4Values)
	const a5Safe = useSelector((state) => state.reportList.weeklySafeTugA5Values)
	const a6Safe = useSelector((state) => state.reportList.weeklySafeTugA6Values)
	const a1UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTugA1Values)
	const a2UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTugA2Values)
	const a3UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTugA3Values)
	const a4UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTugA4Values)
	const a5UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTugA5Values)
	const a6UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTugA6Values)
	const a1SE = useSelector((state) => state.reportList.scoreboardTugUnsafeQ1)
	const a2SE = useSelector((state) => state.reportList.scoreboardTugUnsafeQ2)
	const a3SE = useSelector((state) => state.reportList.scoreboardTugUnsafeQ3)
	const a4SE = useSelector((state) => state.reportList.scoreboardTugUnsafeQ4)
	const a5SE = useSelector((state) => state.reportList.scoreboardTugUnsafeQ5)
	const a6SE = useSelector((state) => state.reportList.scoreboardTugUnsafeQ6)
	const tugListLoading = useSelector((state) => state.reportList.tugListLoading)

	const refresh = () => {
		setHasData(false)
		dispatch(pushScoreboardToRedux('tug_audit'))
		dispatch(getThisWeeksTugReports())
		setTimeout(() => {
			setHasData(true)
		}, 2000)
	}

	const getReport = (id) => {
		console.log('firing getReport')
		thisWeeksTugReports.filter((n) => {
			if (n.formId === id) {
				dispatch({ type: 'SPECIFIC_REPORT', payload: n })
			}
		})
		history.push('/report_list/audit_record')
	}

	let displayTugReports = thisWeeksTugReports.map((n, idx) => (
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
			<div className={darkMode ? 'report-link-container-dark' : 'report-link-container-light'}>
				<div style={{}} onClick={refresh}>
					{!hasData ? (
						<FontAwesomeIcon icon={faSpinner} spin />
					) : (
						<div>
							Refresh <FontAwesomeIcon icon={faSync} />{' '}
						</div>
					)}
				</div>

				<Fragment>
					<div className={darkMode ? 'report-banner-subject-dark' : 'report-banner-subject-light'}>This Months Stats</div>

					<div style={{ display: 'flex' }} className={darkMode ? 'left-side-scoreboard-titles-dark' : 'left-side-scoreboard-titles-light'}>
						<Fragment>
							<div className={darkMode ? 'scoreboard-titles-dark' : 'scoreboard-titles-light'}>
								<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}>Behavior </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Drives for Conditions </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>50 & 8 ft. stops</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Traffic Pattern Behaviors </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Guided Approaches </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Dolly Pin Verification </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>3 Points of Contact </div>
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
									<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}> US</div>
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
						</Fragment>
					</div>
					<div className={darkMode ? 'report-card-parent' : 'report-card-parent'}>

					<div className={darkMode ? 'report-banner-subject-dark' : 'report-banner-subject-light'}>Tug Reports</div>
					<div>{displayTugReports}</div>
					</div>
				</Fragment>

				<Footer />
			</div>
		</Fragment>
	)
}
export default TugList
