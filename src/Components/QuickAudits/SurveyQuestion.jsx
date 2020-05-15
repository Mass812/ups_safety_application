import React, { Fragment } from 'react'
import './QuickAudit.scss'
import { useSelector } from 'react-redux'

const SurveyQuestion = ({ children, question, questionNumber }) => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	return (
		<Fragment>
				
				<div
					className={
						darkMode ? (
							'question-and-toggle-block-dark'
						) : (
							'question-and-toggle-block-light'
						)
					}> <div className='q-number'>
{questionNumber} 
					</div>
					

					<div style={{borderLeft: '3px solid orange'}}
						className={
							darkMode ? 'true-false-question-dark' : 'true-false-question-light'
						}>
						{question}
					</div>
					<div
						className={darkMode ? 'true-false-toggle-dark' : 'true-false-toggle-light'}>
						{children}
					</div>
				</div>
		
		</Fragment>
	)
}
export default SurveyQuestion
