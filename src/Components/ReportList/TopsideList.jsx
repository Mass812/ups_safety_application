import React, { Fragment, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useSelector, useDispatch } from 'react-redux'
import { getThisWeeksTopsideReports, pushScoreboardToRedux } from '../../redux/actions/reportListActions'
import './ReportList.scss'
import Button from '../Button/Button'
import { faSpinner, faClipboard, faComment, faSync } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//filter by incident

//filter by Auditor

const TopsideList = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const [ hasData, setHasData ] = useState(true)
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	const thisWeeksTopsideReports = useSelector((state) => state.reportList.thisWeeksTopsideReports)
	const a1Safe = useSelector((state) => state.reportList.weeklySafeTopsideA1Values)
	const a2Safe = useSelector((state) => state.reportList.weeklySafeTopsideA2Values)
	const a3Safe = useSelector((state) => state.reportList.weeklySafeTopsideA3Values)
	const a4Safe = useSelector((state) => state.reportList.weeklySafeTopsideA4Values)
	const a5Safe = useSelector((state) => state.reportList.weeklySafeTopsideA5Values)
	const a6Safe = useSelector((state) => state.reportList.weeklySafeTopsideA6Values)
	const a1UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTopsideA1Values)
	const a2UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTopsideA2Values)
	const a3UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTopsideA3Values)
	const a4UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTopsideA4Values)
	const a5UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTopsideA5Values)
	const a6UnSafe = useSelector((state) => state.reportList.weeklyUnsafeTopsideA6Values)
	const a1SE = useSelector((state) => state.reportList.scoreboardTopsideUnsafeQ1)
	const a2SE = useSelector((state) => state.reportList.scoreboardTopsideUnsafeQ2)
	const a3SE = useSelector((state) => state.reportList.scoreboardTopsideUnsafeQ3)
	const a4SE = useSelector((state) => state.reportList.scoreboardTopsideUnsafeQ4)
	const a5SE = useSelector((state) => state.reportList.scoreboardTopsideUnsafeQ5)
	const a6SE = useSelector((state) => state.reportList.scoreboardTopsideUnsafeQ6)

	const refresh = () => {
		setHasData(false)
		dispatch(pushScoreboardToRedux('topside_uld_movement'))
		dispatch(getThisWeeksTopsideReports())
		setTimeout(() => {
			setHasData(true)
		}, 2000)
	}

	const getReport = (id) => {
		console.log('firing getReport')
		thisWeeksTopsideReports.filter((n) => {
			if (n.formId === id) {
				console.log('in getReport value of n', n)
				dispatch({ type: 'SPECIFIC_REPORT', payload: n })
			}
		})
		history.push('/report_list/audit_record')
	}

	let displayTopsideReports = thisWeeksTopsideReports.map((n, idx) => (
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
					{!hasData ? <FontAwesomeIcon icon={faSpinner} spin /> : (<div>Refresh <FontAwesomeIcon icon={faSync}/> </div>)  }
				</div>
				<Fragment>
					<div className={darkMode ? 'report-banner-subject-dark' : 'report-banner-subject-light'}>
				
						This Month's Stats
					</div>

					<div style={{ display: 'flex' }} className={darkMode ? 'left-side-scoreboard-titles-dark' : 'left-side-scoreboard-titles-light'}>
						<Fragment>
							<div className={darkMode ? 'scoreboard-titles-dark' : 'scoreboard-titles-light'}>
								<div className={darkMode ? 'hard-data-point-dark-top' : 'hard-data-point-light-top'}>Behavior </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>ULD Steady Motion  </div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Help w/ full ULDs</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Faces Forward</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Squares Up Pushing</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Knocks Container</div>
								<div className={darkMode ? 'hard-data-point-dark' : 'hard-data-point-light'}>Scans Path</div>
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

					<div className={darkMode ? 'report-banner-subject-dark' : 'report-banner-subject-light'}>Topside Reports</div>
					<div >{displayTopsideReports}</div>
					</div>
				</Fragment>

				<Footer />
			</div>
		</Fragment>
	)
}
export default TopsideList
