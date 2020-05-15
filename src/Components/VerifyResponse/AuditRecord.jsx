import React, { Fragment, useEffect, useRef, useState } from 'react'
import './VerifyResponse.scss'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button.jsx'
import { useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TableComponent from './TableComponent'
import CommentSection from './CommentSection'
import FormBasics from './FormBasics'
import ActiveIcon from './ActiveIcon'
import axios from 'axios'

import Pdf from 'react-to-pdf'

const AuditReport = () => {
	const dispatch = useDispatch()
	const specificReport = useSelector((state) => state.reportList.specificReport)
	const [ number, setNumber ] = useState(0)

	const basicUserInfo = useSelector((state) => state.profile.basicUserInfo)
	const history = useHistory()
	const param = useParams()

	//percent num increment to value
	useEffect(
		() => {
			let num = 0
			var interval = setInterval(function() {
				let target = specificReport.efficiency

				setNumber(num)
				if (num >= target) clearInterval(interval)
				num++
			}, 10 ^ (68 / num * num))
		},
		[ specificReport.efficiency ]
	)

	useEffect(() => {
		return () => {
			setNumber(0)
		}
	}, [])

	const submit = (e) => {
		history.replace(`/${specificReport.formCollection}`)
	}

	const date = specificReport.date.substring(0, 24)
	return (
		<Fragment>
			<div className='wrapper'>
				<div className='verify-parent'>
					<div className='review-message'>**This data is included in the data stream.</div>
					<div className='image-title-block'>
						<ActiveIcon />
						<div className='form-title-report'>{specificReport.formTitle}</div>
					</div>
					<div className='efficiency-block'>
						<div style={{ color: 'teal' }}>
							<span style={{ fontSize: '26px' }}>{number}</span>
							%
							<div>Team Safety Efficiency</div>
						</div>
					</div>

					<section>
						<FormBasics question={'Auditor'} info={basicUserInfo.displayName} />
						<FormBasics question={'Date'} info={date} />
						<FormBasics question={'Division'} info={specificReport.Division} />
						<FormBasics question={'SLIC'} info={specificReport.SLIC} />
						<FormBasics question={'Form'} info={specificReport.technicalFormName} />
						<FormBasics question={"Employee's Audited"} info={specificReport.Employees_Observed} />
						<FormBasics question={'Supervisor'} info={specificReport.Observer_Group} />
						<FormBasics question={'Ramp'} info={specificReport.ramp} />
						<FormBasics question={'Form ID'} info={specificReport.formId} />

						<br />
						<br />
					</section>

					<TableComponent col1={'Behavior'} col2={'Safe'} col3={'Unsafe'} col4={'Feedback'} />
					<TableComponent col1={specificReport.longQuestionOne} col2={specificReport.answer1Safe} col3={specificReport.answer1UnSafe} col4={specificReport.answer1FeedBack} />
					<TableComponent col1={specificReport.longQuestionTwo} col2={specificReport.answer2Safe} col3={specificReport.answer2UnSafe} col4={specificReport.answer2FeedBack} />
					<TableComponent col1={specificReport.longQuestionThree} col2={specificReport.answer3Safe} col3={specificReport.answer3UnSafe} col4={specificReport.answer3FeedBack} />
					<TableComponent col1={specificReport.longQuestionFour} col2={specificReport.answer4Safe} col3={specificReport.answer4UnSafe} col4={specificReport.answer4FeedBack} />
					<TableComponent col1={specificReport.longQuestionFive} col2={specificReport.answer5Safe} col3={specificReport.answer5UnSafe} col4={specificReport.answer5FeedBack} />
					<TableComponent col1={specificReport.longQuestionSix} col2={specificReport.answer6Safe} col3={specificReport.answer6UnSafe} col4={specificReport.answer6FeedBack} />
					<CommentSection comment={specificReport.comments} />

					<div className='button-splay'>
						{/* <Button onClick={() => history.push('/download_pdf')}>PDF</Button> */}
						{/* <Button onClick={() => history.push(`/download_pdf/${specificReport.formId}-${specificReport.formCollection}`)}>Send Doc</Button> */}
						<Button onClick={submit}>Back</Button>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}
export default AuditReport
