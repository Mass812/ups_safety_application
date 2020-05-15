import React, { Fragment, useEffect, useState } from 'react'
import '../VerifyResponse/VerifyResponse.scss'
import Button from '../Button/Button.jsx'
import { useHistory, useParams } from 'react-router-dom'
import { db } from '../Firebase/FirebaseConfig'
import Footer from '../Footer/Footer'
import TableComponent from '../VerifyResponse/TableComponent'
import FormBasics from '../VerifyResponse/FormBasics'
import ActiveIcon from '../VerifyResponse/ActiveIcon'
import { moment } from 'moment'
import Emblem from '../Emblem/Emblem'

const MonthlyReport = () => {
	const [ reportIsLoading, setReportIsLoading ] = useState(true)
	const [ specificReport, setSpecificReport ] = useState('')
	const history = useHistory()
	const param = useParams().id

	//percent num increment to value

	const awaitData = async () => {
		let month = param
		if (!param) {
			month = moment().format('MM')
		}
		let hold = []
		console.log('month useEffect', month)

		db
			.collection('monthly_reports')
			.doc(`month_${month}`)
			.get()
			.then((doc) => {
				console.log('doc', doc.data())
				hold.push(doc.data())
				return hold
			})
			.then(() => {
				setSpecificReport(hold[0])
				setReportIsLoading(false)

				console.log('report in Effect', specificReport)
			})
			.then(() => {})
			.catch((err) => console.log('error', err))
	}

	useEffect(() => {
		awaitData()
	}, [])

	console.log(specificReport[0])
	const submit = () => {
		history.replace('/home')
	}

	return (
		<Fragment>
			{reportIsLoading ? (
				<ActiveIcon />
			) : (
				<Fragment>
					<div className='wrapper'>
						<div className='verify-parent'>
							<div className='review-message'>** All SE Values Are Percent Values.</div>
							<div className='image-title-block'>
								<Emblem size={'2x'} color={'#47403b'}>
									<div style={{ color: '#47403b', fontSize: '34px', margin: '-25px' }}>Safety</div>
								</Emblem>
							</div>
							<div className='efficiency-block'>
								<div className='form-title-report'>
									Ramp D, {specificReport.monthValue}/{specificReport.year}
								</div>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '46px', color: '#20818c' }}>{specificReport.overallMonthlyRating}</span>
									<span style={{ fontSize: '26px' }}>%</span>

									<div />
									<div>Safety Efficiency Rating</div>
								</div>
							</div>
							<br />
							<br />

							{/* movement */}
							<div className='efficiency-block'>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '26px' }}>{'Package Movement Report'}</span>

									<div>Ramp D, Month: {specificReport.monthValue}/20</div>
								</div>
							</div>
							<div className='efficiency-block'>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '26px' }}>{specificReport.movement_SERating}</span>
									%
									<div>Movement Safety Efficiency</div>
								</div>
							</div>
							<FormBasics question={' Safe Actions '} info={`n=${specificReport.movement_SEOverAllSafe}`} />
							<FormBasics question={' UnSafe Actions '} info={`n=${specificReport.movement_SEOverAllUnSafe}`} />
							<br />

							<TableComponent col1={'Question'} col2={' Safe'} col3={'Unsafe'} col4={'SE'} />
							<TableComponent col1={"Bends at Knee's"} col2={specificReport.movement_sum1Safe} col3={specificReport.movement_sum1UnSafe} col4={specificReport.movement_SEq1} />
							<TableComponent col1={'PowerZone'} col2={specificReport.movement_sum2Safe} col3={specificReport.movement_sum2UnSafe} col4={specificReport.movement_SEq2} />
							<TableComponent col1={'Initial Weight Test'} col2={specificReport.movement_sum3Safe} col3={specificReport.movement_sum3UnSafe} col4={specificReport.movement_SEq3} />
							<TableComponent col1={'Hands To Surface'} col2={specificReport.movement_sum4Safe} col3={specificReport.movement_sum4UnSafe} col4={specificReport.movement_SEq4} />
							<TableComponent col1={'Faces Flow'} col2={specificReport.movement_sum5Safe} col3={specificReport.movement_sum5UnSafe} col4={specificReport.movement_SEq5} />
							<TableComponent col1={'Uses Load Stand'} col2={specificReport.movement_sum6Safe} col3={specificReport.movement_sum6UnSafe} col4={specificReport.movement_SEq6} />

							<br />
							<br />
							<br />

							{/* tug */}
							<div className='efficiency-block'>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '26px' }}>{'Tug Report'}</span>

									<div>Ramp D, Month: {specificReport.monthValue}/20</div>
								</div>
							</div>
							<div className='efficiency-block'>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '26px' }}>{specificReport.tug_SERating}</span>
									%
									<div>Tug Safety Efficiency</div>
								</div>
							</div>
							<FormBasics question={' Safe Actions '} info={`n=${specificReport.tug_SEOverAllSafe}`} />
							<FormBasics question={' UnSafe Actions '} info={`n=${specificReport.tug_SEOverAllUnSafe}`} />
							<br />

							<TableComponent col1={'Question'} col2={' Safe'} col3={'Unsafe'} col4={'SE'} />
							<TableComponent col1={'Drives for Conditions'} col2={specificReport.tug_sum1Safe} col3={specificReport.tug_sum1UnSafe} col4={specificReport.tug_SEq1} />
							<TableComponent col1={'50 & 8ft Stops'} col2={specificReport.tug_sum2Safe} col3={specificReport.tug_sum2UnSafe} col4={specificReport.tug_SEq2} />
							<TableComponent col1={'Traffic Pattern Behavior'} col2={specificReport.tug_sum3Safe} col3={specificReport.tug_sum3UnSafe} col4={specificReport.tug_SEq3} />
							<TableComponent col1={'Ground Guided In'} col2={specificReport.tug_sum4Safe} col3={specificReport.tug_sum4UnSafe} col4={specificReport.tug_SEq4} />
							<TableComponent col1={'Verify Dolly Pins'} col2={specificReport.tug_sum5Safe} col3={specificReport.tug_sum5UnSafe} col4={specificReport.tug_SEq5} />
							<TableComponent col1={'3-Points of Contact'} col2={specificReport.tug_sum6Safe} col3={specificReport.tug_sum6UnSafe} col4={specificReport.tug_SEq6} />

							<br />
							<br />
							<br />

							{/* topside */}
							<div className='efficiency-block'>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '26px' }}>{'Topside Report'}</span>

									<div>Ramp D, Month: {specificReport.monthValue}/20</div>
								</div>
							</div>
							<div className='efficiency-block'>
								<div style={{ color: '#47403b' }}>
									<span style={{ fontSize: '26px' }}>{specificReport.topside_SERating}</span>
									%
									<div>Topside Safety Efficiency</div>
								</div>
							</div>
							<FormBasics question={' Safe Actions '} info={`n=${specificReport.topside_SEOverAllSafe}`} />
							<FormBasics question={' UnSafe Actions '} info={`n=${specificReport.topside_SEOverAllUnSafe}`} />
							<br />

							<TableComponent col1={'Question'} col2={' Safe'} col3={'Unsafe'} col4={'SE'} />
							<TableComponent col1={'Pulls ULD Steadily'} col2={specificReport.topside_sum1Safe} col3={specificReport.topside_sum1UnSafe} col4={specificReport.topside_SEq1} />
							<TableComponent col1={"Has Help w/ Full ULD's"} col2={specificReport.topside_sum2Safe} col3={specificReport.topside_sum2UnSafe} col4={specificReport.topside_SEq2} />
							<TableComponent col1={'Faces Forward, Pulling'} col2={specificReport.topside_sum3Safe} col3={specificReport.topside_sum3UnSafe} col4={specificReport.topside_SEq3} />
							<TableComponent col1={'Squares Up, Pushing'} col2={specificReport.topside_sum4Safe} col3={specificReport.topside_sum4UnSafe} col4={specificReport.topside_SEq4} />
							<TableComponent col1={'Knocks Container'} col2={specificReport.topside_sum5Safe} col3={specificReport.topside_sum5UnSafe} col4={specificReport.topside_SEq5} />
							<TableComponent col1={'Scans Path, Motion'} col2={specificReport.topside_sum6Safe} col3={specificReport.topside_sum6UnSafe} col4={specificReport.topside_SEq6} />

							<div className='button-splay'>
								{/* <Button onClick={() => history.push('/download_pdf')}>PDF</Button> */}
								{/* <Button onClick={() => history.push(`/download_pdf/${specificReport.formId}-${specificReport.formCollection}`)}>Send Doc</Button> */}
								<Button onClick={submit}>Back</Button>
							</div>
						</div>
					</div>
					<Footer />
				</Fragment>
			)}
		</Fragment>
	)
}
export default MonthlyReport
