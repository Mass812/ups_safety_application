import React, { Fragment } from 'react'
import './Counter.scss'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'

const Counter = ({
	shortQuestion,
	longQuestion,
	safeValue,
	unSafeValue,
	increaseSafeAction,
	decreaseSafeAction,
	increaseUnsafeAction,
	decreaseUnsafeAction,
	constructiveFeedback,
	constructiveFeedBackValue = 'Appreciative Feedback Given'
}) => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)



	// const Feedback_Value =
	// 	constructiveFeedBackValue === true
	// 		? 'Corrective FeedBack Given'
	// 		: 'Appreciative Feedback Given'
	// console.log('Feedback Value', Feedback_Value)

	//{darkMode ? 'button-dark ': 'button-light '}

	return (
		<div className={darkMode ? 'counter-parent-dark ' : 'counter-parent-light '}>
			<div
				className={
					darkMode ? 'counter-emphasis-title-dark ' : 'counter-emphasis-title-light '
				}>
				{shortQuestion}
			</div>
			<div className={darkMode ? 'counter-long-title-dark ' : 'counter-long-title-light '}>
				{longQuestion}
			</div>
			<div className={darkMode ? 'counter-block-dark ' : 'counter-block-light '}>
				<div className={darkMode ? 'safe-title-dark ' : 'safe-title-light '}>UnSafe</div>
				<div className={darkMode ? 'num-value-unsafe-dark ' : 'num-value-unsafe-light '}>
					{unSafeValue}
				</div>
				<div className={darkMode ? 'increment-block-dark ' : 'increment-block-light '}>
					<div
						className={darkMode ? 'decrease-dark ' : 'decrease-light '}
						onClick={decreaseUnsafeAction}>
						-
					</div>
					<div
						className={darkMode ? 'increase-dark ' : 'increase-light '}
						onClick={increaseUnsafeAction}>
						+
					</div>
				</div>
			</div>
			<div className={darkMode ? 'counter-block-dark ' : 'counter-block-light '}>
				<div className={darkMode ? 'safe-title-dark ' : 'safe-title-light '}>Safe</div>
				<div className={darkMode ? 'num-value-safe-dark ' : 'num-value-safe-light '}>
					{safeValue}
				</div>
				<div className={darkMode ? 'increment-block-dark ' : 'increment-block-light '}>
					<div
						className={darkMode ? 'decrease-dark ' : 'decrease-light '}
						onClick={decreaseSafeAction}>
						-
					</div>
					<div
						className={darkMode ? 'increase-dark ' : 'increase-light '}
						onClick={increaseSafeAction}>
						+
					</div>
				</div>
			</div>
			<div className={darkMode ? 'feedback-dark ' : 'feedback-light '}>
				<Fragment>
					<div>
						<div
							className={
								darkMode ? (
									'type-feedback-given-dark '
								) : (
									'type-feedback-given-light '
								)
							}>
							Feedback: {constructiveFeedBackValue}
						</div>
						<Button onClick={constructiveFeedback}>Change Feedback</Button>
					</div>
				</Fragment>
				<div className={darkMode ? 'feedback-info-dark ' : 'feedback-info-light '}>
					** Appreciative is set as default.
				</div>
			</div>
		</div>
	)
}
export default Counter
