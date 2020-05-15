import React, { Fragment, useState, useEffect } from 'react'
import Counter from '../Counter/Counter'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Spinner from '../Spinner/Spinner'
import { db } from '../Firebase/FirebaseConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const AuditForm = () => {
	const formStore = useSelector((state) => state.auditForm)
	const isLoading = useSelector((state) => state.loading.isLoading)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const SVList = useSelector((state) => state.admin.activeSVList)
	const dispatch = useDispatch()
	const history = useHistory()
	const [ sV, setSV ] = useState(false)
	const [ supsLoaded, setSupsLoaded ] = useState(false)
	const [ showMe, setShowMe ] = useState(false)

	useEffect(() => {
		setSupsLoaded(true)
	}, [])

	const sv = (e) => {
		setShowMe(false)
		let name = e.target.value.trim()
		let capName = name.toUpperCase()

		dispatch({ type: 'FORM_AUDIT_SV', formSV: capName })
	}

	const handleRamp = (e) => {
		let ramp = `Wing D: Ramp: ${e.target.value}`
		dispatch({ type: 'FORM_RAMP', payload: ramp })
	}

	const personsCount = (e) => {
		//On Submit Verify Number

		console.log('headCount ', Number(e.target.value))
		dispatch({ type: 'ADD_FORM_EMPLOYEE_COUNT', formPersonsCount: e.target.value })
	}

	const [ q1, setQ1 ] = useState(true)
	const [ q2, setQ2 ] = useState(true)
	const [ q3, setQ3 ] = useState(true)
	const [ q4, setQ4 ] = useState(true)
	const [ q5, setQ5 ] = useState(true)
	const [ q6, setQ6 ] = useState(true)

	const handleQ1FeedBack = (e) => {
		e.preventDefault()
		setQ1((q1) => !q1)

		let type = q1 ? 'Constructive' : 'Appreciative Feedback Given'

		dispatch({ type: 'Q1_FORM_FEEDBACK', q1FormFeedBack: type })
	}
	const handleQ2FeedBack = (e) => {
		e.preventDefault()
		setQ2((q2) => !q2)
		let type = q2 ? 'Constructive' : 'Appreciative'

		dispatch({ type: 'Q2_FORM_FEEDBACK', q2FormFeedBack: type })
	}
	const handleQ3FeedBack = (e) => {
		e.preventDefault()
		setQ3((q3) => !q3)
		let type = q3 ? 'Constructive' : 'Appreciative'

		return dispatch({ type: 'Q3_FORM_FEEDBACK', q3FormFeedBack: type })
	}

	const handleQ4FeedBack = (e) => {
		e.preventDefault()
		setQ4((q4) => !q4)
		let type = q4 ? 'Constructive' : 'Appreciative'

		dispatch({ type: 'Q4_FORM_FEEDBACK', q4FormFeedBack: type })
	}

	const handleQ5FeedBack = (e) => {
		e.preventDefault()
		setQ5((q5) => !q5)
		let type = q5 ? 'Constructive' : 'Appreciative'
		dispatch({ type: 'Q5_FORM_FEEDBACK', q5FormFeedBack: type })
	}
	const handleQ6FeedBack = (e) => {
		e.preventDefault()
		setQ6((q6) => !q6)
		let type = q6 ? 'Constructive' : 'Appreciative'
		dispatch({ type: 'Q6_FORM_FEEDBACK', q6FormFeedBack: type })
	}

	const handleFormComments = (e) => {
		dispatch({ type: 'FORM_COMMENTS', formComments: e.target.value })
	}

	console.log('sv list from redux', SVList.svList)

	const displaySVList = SVList.svList.map((n, idx) => (
		<option className='options' key={idx} value={n}>
			{n}
		</option>
	))

	return (
		<Fragment>
			{!isLoading ? (
				<Fragment>
					<Navbar />

					<div className={darkMode ? 'home-parent-dark ' : 'home-parent-light'}>
						<div className={darkMode ? 'form-title-dark ' : 'form-title-light '}>{formStore.formTitle}</div>
						<div className={darkMode ? 'sv-label-dark' : 'sv-label-light'} style={{ paddingTop: '30px' }}>
							Supervisor
							<span style={{ color: 'goldenrod' }}> {formStore.formSV}</span>
						</div>
						{showMe && supsLoaded ? <div> {displaySVList}</div> : null}

						<div>
							<select id='sv' name='name' onChange={sv} size='3'>
								{displaySVList}
							</select>
						</div>
						<br />
						<br />
						<div className={darkMode ? 'employee-count-label-dark' : 'employee-count-label-light'}>
							Audit Employee Count
							<span
								style={{
									color: 'goldenrod'
								}}>
								{' '}
								{formStore.formPersonsCount}
							</span>
						</div>
						<Input
							placeholder={'Enter # Employees Audited'}
							onChange={personsCount}
							onBlur={(e) => (e.target.value = '')}
							//value={Form.formPersonsCount}
							type='number'
							//	typed={Form.formPersonsCount}
						/>
						<br />
						<div className={darkMode ? 'employee-count-label-dark' : 'employee-count-label-light'}>
							Aircraft Ramp
							<span
								style={{
									color: 'goldenrod'
								}}>
								{' '}
								{formStore.ramp}
							</span>
						</div>
						<Input
							placeholder={'Enter # Employees Audited'}
							onChange={handleRamp}
							onBlur={(e) => (e.target.value = '')}
							//value={Form.formPersonsCount}
							type='number'
							//	typed={Form.formPersonsCount}
						/>

						<Fragment>
							<Counter
								shortQuestion={formStore.shortQuestionOne}
								longQuestion={formStore.longQuestionOne}
								safeValue={formStore.q1FormSafeCount}
								unSafeValue={formStore.q1FormUnSafeCount}
								increaseSafeAction={() => dispatch({ type: 'Q1_FORM_SAFE_INCREMENT' })}
								decreaseSafeAction={() => dispatch({ type: 'Q1_FORM_SAFE_DECREMENT' })}
								increaseUnsafeAction={() => dispatch({ type: 'Q1_FORM_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() => dispatch({ type: 'Q1_FORM_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ1FeedBack}
								constructiveFeedBackValue={formStore.q1FormFeedBack}
							/>

							<Counter
								shortQuestion={formStore.shortQuestionTwo}
								longQuestion={formStore.longQuestionTwo}
								safeValue={formStore.q2FormSafeCount}
								unSafeValue={formStore.q2FormUnSafeCount}
								increaseSafeAction={() => dispatch({ type: 'Q2_FORM_SAFE_INCREMENT' })}
								decreaseSafeAction={() => dispatch({ type: 'Q2_FORM_SAFE_DECREMENT' })}
								increaseUnsafeAction={() => dispatch({ type: 'Q2_FORM_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() => dispatch({ type: 'Q2_FORM_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ2FeedBack}
								constructiveFeedBackValue={formStore.q2FormFeedBack}
							/>

							<Counter
								shortQuestion={formStore.shortQuestionThree}
								longQuestion={formStore.longQuestionThree}
								safeValue={formStore.q3FormSafeCount}
								unSafeValue={formStore.q3FormUnSafeCount}
								increaseSafeAction={() => dispatch({ type: 'Q3_FORM_SAFE_INCREMENT' })}
								decreaseSafeAction={() => dispatch({ type: 'Q3_FORM_SAFE_DECREMENT' })}
								increaseUnsafeAction={() => dispatch({ type: 'Q3_FORM_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() => dispatch({ type: 'Q3_FORM_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ3FeedBack}
								constructiveFeedBackValue={formStore.q3FormFeedBack}
							/>

							<Counter
								shortQuestion={formStore.shortQuestionFour}
								longQuestion={formStore.longQuestionFour}
								safeValue={formStore.q4FormSafeCount}
								unSafeValue={formStore.q4FormUnSafeCount}
								increaseSafeAction={() => dispatch({ type: 'Q4_FORM_SAFE_INCREMENT' })}
								decreaseSafeAction={() => dispatch({ type: 'Q4_FORM_SAFE_DECREMENT' })}
								increaseUnsafeAction={() => dispatch({ type: 'Q4_FORM_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() => dispatch({ type: 'Q4_FORM_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ4FeedBack}
								constructiveFeedBackValue={formStore.q4FormFeedBack}
							/>
							<Counter
								shortQuestion={formStore.shortQuestionFive}
								longQuestion={formStore.longQuestionFive}
								safeValue={formStore.q5FormSafeCount}
								unSafeValue={formStore.q5FormUnSafeCount}
								increaseSafeAction={() => dispatch({ type: 'Q5_FORM_SAFE_INCREMENT' })}
								decreaseSafeAction={() => dispatch({ type: 'Q5_FORM_SAFE_DECREMENT' })}
								increaseUnsafeAction={() => dispatch({ type: 'Q5_FORM_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() => dispatch({ type: 'Q5_FORM_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ5FeedBack}
								constructiveFeedBackValue={formStore.q5FormFeedBack}
							/>
							<Counter
								shortQuestion={formStore.shortQuestionSix}
								longQuestion={formStore.longQuestionSix}
								safeValue={formStore.q6FormSafeCount}
								unSafeValue={formStore.q6FormUnSafeCount}
								increaseSafeAction={() => dispatch({ type: 'Q6_FORM_SAFE_INCREMENT' })}
								decreaseSafeAction={() => dispatch({ type: 'Q6_FORM_SAFE_DECREMENT' })}
								increaseUnsafeAction={() => dispatch({ type: 'Q6_FORM_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() => dispatch({ type: 'Q6_FORM_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ6FeedBack}
								constructiveFeedBackValue={formStore.q6FormFeedBack}
							/>

							<Fragment>
								<div className={darkMode ? 'comment-question-dark' : 'comment-question-light'}>Please add any additional information you deem important</div>
								<div className={darkMode ? 'input-return-dark' : 'input-return-light'}>{formStore.formComments}</div>
								<Input placeholder={'additional audit comment'} question={'Add Comments Here'} onChange={handleFormComments} />
							</Fragment>

							<Button
								onClick={() => {
									dispatch({ type: 'RESET_FORM' })
									history.push('/home')
								}}>
								Reset / Back
							</Button>
							{/* <Button onClick={submit}>Submit</Button> */}

							{formStore.formSV !== 'Anonymous' && formStore.formPersonsCount !== 0 ? (
								<Button onClick={() => history.push('/audit_form/verify_response')}>Review</Button>
							) : (
								<div style={darkMode ? { color: 'yellow' } : { color: 'red' }} className={darkMode ? 'comment-question-dark' : 'comment-question-light'}>
									Supervisor and Number of persons audited is required
								</div>
							)}
						</Fragment>
					</div>
					<Footer />
				</Fragment>
			) : (
				<Spinner />
			)}
		</Fragment>
	)
}
export default AuditForm
