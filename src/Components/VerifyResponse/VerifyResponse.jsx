import React, { Fragment, useEffect, useState } from 'react'
import './VerifyResponse.scss'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button.jsx'
import { createFormAudit } from '../../redux/actions/auditFormActions'
import { useHistory } from 'react-router-dom'
import Footer from '../Footer/Footer'
import TableComponent from './TableComponent'
import CommentSection from './CommentSection'
import FormBasics from './FormBasics'
import ActiveIcon from './ActiveIcon'

const VerifyResponse = () => {
	const dispatch = useDispatch()
	const auditForm = useSelector((state) => state.auditForm)
	const basicUserInfo = useSelector((state) => state.profile.basicUserInfo)
	const history = useHistory()
	const [ number, setNumber ] = useState(0)

	useEffect(() => {
		dispatch({ type: 'DATE', date: new Date().toString() })
		auditEfficiency()

		return () => {
			dispatch({ type: 'DATE', date: '' })
		}
	}, [])
	useEffect(
		() => {
			if (auditForm.efficiency > 0) {
				let num = 0
				var interval = setInterval(function() {
					console.log(auditForm.efficiency)
					let target = auditForm.efficiency
					console.log('target', target)
					console.log(num)
					setNumber(num)
					if (num >= target) clearInterval(interval)
					num++
				}, 10 ^ (6 / num * num))
			}
		},
		[ auditForm.efficiency ]
	)

	useEffect(() => {
		return () => {
			setNumber(0)
		}
	}, [])

	const auditEfficiency = () => {
		let safeArray = [ auditForm.q1FormSafeCount, auditForm.q2FormSafeCount, auditForm.q3FormSafeCount, auditForm.q4FormSafeCount, auditForm.q5FormSafeCount, auditForm.q6FormSafeCount ]
		let unsafeArray = [ auditForm.q1FormUnSafeCount, auditForm.q2FormUnSafeCount, auditForm.q3FormUnSafeCount, auditForm.q4FormUnSafeCount, auditForm.q5FormUnSafeCount, auditForm.q6FormUnSafeCount ]

		const initialValue = 0

		const reducer = (accumulator, item) => {
			return accumulator + item
		}

		const safe = safeArray.reduce(reducer, initialValue)
		const unsafe = unsafeArray.reduce(reducer, initialValue)

		let s = safe
		let su = safe + unsafe
		let value = (s /= su)
		let calc = value * 100
		let percent = Math.floor(calc)
		dispatch({ type: `AUDIT_SAFE_EFFICIENCY`, payload: percent })
		console.log('safe', percent)
	}

	const submit = (e) => {
		e.preventDefault()
		dispatch(createFormAudit(auditForm))
		setTimeout(() => {
			history.push('/home')
		}, 2)
	}
	const date = auditForm.date.substring(0, 24)

	return (
		<Fragment>
			<div className='wrapper'>
				<div className='verify-parent'>
					<div className='review-message'>**Please review all information before submission.</div>
					<div className='image-title-block'>
						<ActiveIcon />
						<div className='form-title-report'>{auditForm.formTitle}</div>
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
						<FormBasics question={'Division'} info={auditForm.division} />
						<FormBasics question={'SLIC'} info={auditForm.slic} />
						<FormBasics question={'Form'} info={auditForm.technicalFormName} />
						<FormBasics question={"Employee's Audited"} info={auditForm.formPersonsCount} />
						<FormBasics question={'Supervisor'} info={auditForm.formSV} />
						<FormBasics question={'Ramp'} info={auditForm.ramp} />

						<br />
						<br />
					</section>

					<TableComponent col1={'Behavior'} col2={'Safe'} col3={'Unsafe'} col4={'Feedback'} />
					<TableComponent col1={auditForm.longQuestionOne} col2={auditForm.q1FormSafeCount} col3={auditForm.q1FormUnSafeCount} col4={auditForm.q1FormFeedBack} />
					<TableComponent col1={auditForm.longQuestionTwo} col2={auditForm.q2FormSafeCount} col3={auditForm.q2FormUnSafeCount} col4={auditForm.q2FormFeedBack} />
					<TableComponent col1={auditForm.longQuestionThree} col2={auditForm.q3FormSafeCount} col3={auditForm.q3FormUnSafeCount} col4={auditForm.q3FormFeedBack} />
					<TableComponent col1={auditForm.longQuestionFour} col2={auditForm.q4FormSafeCount} col3={auditForm.q4FormUnSafeCount} col4={auditForm.q4FormFeedBack} />
					<TableComponent col1={auditForm.longQuestionFive} col2={auditForm.q5FormSafeCount} col3={auditForm.q5FormUnSafeCount} col4={auditForm.q5FormFeedBack} />
					<TableComponent col1={auditForm.longQuestionSix} col2={auditForm.q6FormSafeCount} col3={auditForm.q6FormUnSafeCount} col4={auditForm.q6FormFeedBack} />

					<CommentSection comment={auditForm.formComments} />
					<div className='button-splay'>
						<Button onClick={() => history.push('/audit_form')}>Edit</Button>

						<Button onClick={submit}>Submit</Button>
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	)
}
export default VerifyResponse
