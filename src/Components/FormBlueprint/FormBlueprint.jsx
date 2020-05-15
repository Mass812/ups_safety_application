import React, { Fragment, useState } from 'react'
import Counter from '../Counter/Counter'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { createBlueprintAudit } from '../../redux/actions/blueprintActions'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import Spinner from '../Spinner/Spinner'


const questionOneLong1 = ''
const questionOneLong2 = ''
const questionOneLong3 = ''
const questionOneLong4 = ''
const questionOneLong5 = ''
const questionOneLong6 = ''

const questionOneEmphasisShort1 = ''
const questionOneEmphasisShort2 = ''
const questionOneEmphasisShort3 = ''
const questionOneEmphasisShort4 = ''
const questionOneEmphasisShort5 = ''
const questionOneEmphasisShort6 = ''

const Blueprint = () => {
	const blueprintStore = useSelector((state) => state.blueprint)
	const isLoading = useSelector((state) => state.loading.isLoading)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const dispatch = useDispatch()
	const history = useHistory()

	const sv = (e) => {
		dispatch({ type: 'BLUEPRINT_AUDIT_SV', blueprintSV: e.target.value })
	}

	const personsCount = (e) => {

		console.log('headCount ', Number(e.target.value))
		dispatch({ type: 'ADD_BLUEPRINT_EMPLOYEE_COUNT', blueprintPersonsCount: e.target.value })
	}

	const [
		q1,
		setQ1
	] = useState(true)
	const [
		q2,
		setQ2
	] = useState(true)
	const [
		q3,
		setQ3
	] = useState(true)
	const [
		q4,
		setQ4
	] = useState(true)
	const [
		q5,
		setQ5
	] = useState(true)
	const [
		q6,
		setQ6
	] = useState(true)

	const handleQ1FeedBack = (e) => {
		e.preventDefault()
		setQ1((q1) => !q1)

		let type = q1 ? 'Constructive Feedback Given' : 'Appreciative Feedback Given'

		dispatch({ type: 'Q1_BLUEPRINT_FEEDBACK', q1BlueprintFeedBack: type })
	}
	const handleQ2FeedBack = (e) => {
		e.preventDefault()
		setQ2((q2) => !q2)
		let type = q2 ? 'Constructive Feedback Given' : 'Appreciative feedback given'

		dispatch({ type: 'Q2_BLUEPRINT_FEEDBACK', q2BlueprintFeedBack: type })
	}
	const handleQ3FeedBack = (e) => {
		e.preventDefault()
		setQ3((q3) => !q3)
		let type = q3 ? 'Constructive Feedback Given' : 'Appreciative feedback given'

		return dispatch({ type: 'Q3_BLUEPRINT_FEEDBACK', q3BlueprintFeedBack: type })
	}

	const handleQ4FeedBack = (e) => {
		e.preventDefault()
		setQ4((q4) => !q4)
		let type = q4 ? 'Constructive Feedback Given' : 'Appreciative feedback given'

		dispatch({ type: 'Q4_BLUEPRINT_FEEDBACK', q4BlueprintFeedBack: type })
	}

	const handleQ5FeedBack = (e) => {
		e.preventDefault()
		setQ5((q5) => !q5)
		let type = q5 ? 'Constructive Feedback Given' : 'Appreciative feedback given'
		dispatch({ type: 'Q5_BLUEPRINT_FEEDBACK', q5BlueprintFeedBack: type })
	}
	const handleQ6FeedBack = (e) => {
		e.preventDefault()
		setQ6((q6) => !q6)
		let type = q6 ? 'Constructive Feedback Given' : 'Appreciative feedback given'
		dispatch({ type: 'Q6_BLUEPRINT_FEEDBACK', q6BlueprintFeedBack: type })
	}

	const submit = (e) => {
		e.preventDefault()
		dispatch(createBlueprintAudit(blueprintStore))
		setTimeout(() => {
			localStorage.clear()
			dispatch({ type: 'RESET_FORM' })
		}, 2)
		history.push('/home')
	}

	const handleBlueprintComments = (e) => {
		dispatch({ type: 'BLUEPRINT_COMMENTS', blueprintComments: e.target.value })
	}

	return (
		<Fragment>
			{!isLoading ? (
				<Fragment>
					<Navbar />

					<div className={darkMode ? 'home-parent-dark ' : 'home-parent-light'}>
						<div className={darkMode ? 'form-title-dark ' : 'form-title-light '}>
							Blueprint Audit
						</div>

						<div
							className={darkMode ? 'sv-label-dark' : 'sv-label-light'}
							style={{ paddingTop: '30px' }}>
							Supervisor
						</div>

						<Input
							placeholder={'Enter Audited Supervisor'}
							onChange={sv}
							//value={blueprintStore.blueprintSV}
							//	typed={blueprintStore.blueprintSV}
						/>

						<div
							className={
								darkMode ? (
									'employee-count-label-dark'
								) : (
									'employee-count-label-light'
								)
							}>
							Audit Employee Count{' '}
							<span> {blueprintStore.blueprintPersonsCount}</span>
						</div>
						<Input
							placeholder={'Enter # Employees Audited'}
							onChange={personsCount}
							//value={blueprintStore.blueprintPersonsCount}
							type='number'
							//	typed={blueprintStore.blueprintPersonsCount}
						/>

						<Fragment>
							<Counter
								shortQuestion={questionOneEmphasisShort1}
								longQuestion={questionOneLong1}
								safeValue={blueprintStore.q1BlueprintSafeCount}
								unSafeValue={blueprintStore.q1BlueprintUnSafeCount}
								increaseSafeAction={() =>
									dispatch({ type: 'Q1_BLUEPRINT_SAFE_INCREMENT' })}
								decreaseSafeAction={() =>
									dispatch({ type: 'Q1_BLUEPRINT_SAFE_DECREMENT' })}
								increaseUnsafeAction={() =>
									dispatch({ type: 'Q1_BLUEPRINT_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() =>
									dispatch({ type: 'Q1_BLUEPRINT_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ1FeedBack}
								constructiveFeedBackValue={blueprintStore.q1BlueprintFeedBack}
							/>

							<Counter
								shortQuestion={questionOneEmphasisShort2}
								longQuestion={questionOneLong2}
								safeValue={blueprintStore.q2BlueprintSafeCount}
								unSafeValue={blueprintStore.q2BlueprintUnSafeCount}
								increaseSafeAction={() =>
									dispatch({ type: 'Q2_BLUEPRINT_SAFE_INCREMENT' })}
								decreaseSafeAction={() =>
									dispatch({ type: 'Q2_BLUEPRINT_SAFE_DECREMENT' })}
								increaseUnsafeAction={() =>
									dispatch({ type: 'Q2_BLUEPRINT_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() =>
									dispatch({ type: 'Q2_BLUEPRINT_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ2FeedBack}
								constructiveFeedBackValue={blueprintStore.q2BlueprintFeedBack}
							/>

							<Counter
								shortQuestion={questionOneEmphasisShort3}
								longQuestion={questionOneLong3}
								safeValue={blueprintStore.q3BlueprintSafeCount}
								unSafeValue={blueprintStore.q3BlueprintUnSafeCount}
								increaseSafeAction={() =>
									dispatch({ type: 'Q3_BLUEPRINT_SAFE_INCREMENT' })}
								decreaseSafeAction={() =>
									dispatch({ type: 'Q3_BLUEPRINT_SAFE_DECREMENT' })}
								increaseUnsafeAction={() =>
									dispatch({ type: 'Q3_BLUEPRINT_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() =>
									dispatch({ type: 'Q3_BLUEPRINT_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ3FeedBack}
								constructiveFeedBackValue={blueprintStore.q3BlueprintFeedBack}
							/>

							<Counter
								shortQuestion={questionOneEmphasisShort4}
								longQuestion={questionOneLong4}
								safeValue={blueprintStore.q4BlueprintSafeCount}
								unSafeValue={blueprintStore.q4BlueprintUnSafeCount}
								increaseSafeAction={() =>
									dispatch({ type: 'Q4_BLUEPRINT_SAFE_INCREMENT' })}
								decreaseSafeAction={() =>
									dispatch({ type: 'Q4_BLUEPRINT_SAFE_DECREMENT' })}
								increaseUnsafeAction={() =>
									dispatch({ type: 'Q4_BLUEPRINT_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() =>
									dispatch({ type: 'Q4_BLUEPRINT_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ4FeedBack}
								constructiveFeedBackValue={blueprintStore.q4BlueprintFeedBack}
							/>
							<Counter
								shortQuestion={questionOneEmphasisShort5}
								longQuestion={questionOneLong5}
								safeValue={blueprintStore.q5BlueprintSafeCount}
								unSafeValue={blueprintStore.q5BlueprintUnSafeCount}
								increaseSafeAction={() =>
									dispatch({ type: 'Q5_BLUEPRINT_SAFE_INCREMENT' })}
								decreaseSafeAction={() =>
									dispatch({ type: 'Q5_BLUEPRINT_SAFE_DECREMENT' })}
								increaseUnsafeAction={() =>
									dispatch({ type: 'Q5_BLUEPRINT_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() =>
									dispatch({ type: 'Q5_BLUEPRINT_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ5FeedBack}
								constructiveFeedBackValue={blueprintStore.q5BlueprintFeedBack}
							/>
							<Counter
								shortQuestion={questionOneEmphasisShort6}
								longQuestion={questionOneLong6}
								safeValue={blueprintStore.q6BlueprintSafeCount}
								unSafeValue={blueprintStore.q6BlueprintUnSafeCount}
								increaseSafeAction={() =>
									dispatch({ type: 'Q6_BLUEPRINT_SAFE_INCREMENT' })}
								decreaseSafeAction={() =>
									dispatch({ type: 'Q6_BLUEPRINT_SAFE_DECREMENT' })}
								increaseUnsafeAction={() =>
									dispatch({ type: 'Q6_BLUEPRINT_UNSAFE_INCREMENT' })}
								decreaseUnsafeAction={() =>
									dispatch({ type: 'Q6_BLUEPRINT_UNSAFE_DECREMENT' })}
								constructiveFeedback={handleQ6FeedBack}
								constructiveFeedBackValue={blueprintStore.q6BlueprintFeedBack}
							/>

							<Fragment>
								<Input
									placeholder={'additional audit comment'}
									question={'Add Comments Here'}
									onChange={handleBlueprintComments}
								/>
							</Fragment>
							<Button onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset</Button>
							<Button onClick={submit}>Submit</Button>
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
export default Blueprint
