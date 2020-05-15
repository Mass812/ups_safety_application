import React, { Fragment, useEffect, useState } from 'react'
import { db } from '../Firebase/FirebaseConfig'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'
import NavBar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import '../../App.scss'
import './SelectMonth.scss'
import Spinner from '../Spinner/Spinner'
import HomeOption from '../Home/HomeOption'
import { faClipboard, faCalendar, faCalendarWeek, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const SelectMonth = () => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const history = useHistory()
	const [ reportOptions, setReportOptions ] = useState(null)
	const [ isLoading, setIsLoading ] = useState(false)

	//TODO push all options into action creators, as to not bottleneck expensive https requests

	useEffect(() => {
		let hold = []

		const mReports = db.collection('monthly_reports')

		mReports
			.get()
			.then((snap) => {
				snap.forEach((doc) => {
					console.log('doc', doc.data())
					hold.push(doc.data())
				})
			})
			.then(() => {
				setReportOptions(hold)
				setIsLoading(false)
				console.log('report in Effect', reportOptions)
			})
			.then(() => {})
			.catch((err) => console.log('error', err))
	}, [])

	console.log('reportOptions', reportOptions)

	const showReportOptions =
		reportOptions &&
		reportOptions.map((n, idx) => (
			<HomeOption key={idx}icon={faCalendarAlt}  formName={`${n.monthValue} / ${n.year}`} onClick={() => history.push(`/selectedMonthlyReport/${n.monthValue}`)}/>
		
		))

	return (
		<Fragment>
			<NavBar />
			<div>
				{isLoading && reportOptions ? (
					<Spinner />
				) : (
					<div className={darkMode ? 'select-month-parent-dark' : 'select-month-parent-light'} style={{ minHeight: '85vh' }}>
						<div className={darkMode ? 'select-subtitle-dark' : 'select-subtitle-light'}>Select a previous Month to view the report</div>
						{showReportOptions}
					</div>
				)}
			</div>
			<Footer />
		</Fragment>
	)
}
export default SelectMonth
