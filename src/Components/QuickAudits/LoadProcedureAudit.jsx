import React, { Fragment, useEffect } from 'react'
import './QuickAudit.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import loadQuestions from './loadQuestions'
import { useHistory } from 'react-router-dom'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Toggle from '../Toggle/Toggle'
import SurveyQuestion from './SurveyQuestion'
import Input from '../Input/Input'
import Button from '../Button/Button'

const UnloadProcedureAudit = () => {
	const response1 = useSelector((state) => state.genAuditForm.response1)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const dispatch = useDispatch()

	const clickNA = (e, id) => {
		e.target.value = 'N/A'
		dispatch({ type: `GEN_ANSWER_${id}`, payload: 'N/A' })
	}

	const clickFalse = (e, id) => {
		e.target.value = 'false'
		dispatch({ type: `GEN_ANSWER_${id}`, payload: 'false' })
	}

	const clickTrue = (e, id) => {
		e.target.value = 'true'
		dispatch({ type: `GEN_ANSWER_${id}`, payload: 'true' })
	}

	let comment = (e, id) => {
		dispatch({ type: `PROCEDURE_RESPONSE_${id}`, payload: e.target.value })
		//`{responseComment${id}`}
	}

	const displayQuestions = loadQuestions.map((n) => (
		<div style={{ borderBottom: '1px inset goldenrod' }}>
			<SurveyQuestion key={n.id} question={n.question}>
				<Toggle
					key={n.id}
					clickNA={(e) => clickNA(e, n.id)}
					clickFalse={(e) => clickFalse(e, n.id)}
					clickTrue={(e) => clickTrue(e, n.id)}
				/>
			</SurveyQuestion>
			<div className=' '>Comment: </div>
			<Input type={'text'} onChange={(e) => comment(e, n.id)} />
		</div>
	))

	return (
		<Fragment>
			<Navbar />

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className={darkMode ? 'quick-form-parent-dark' : 'quick-form-parent-light'}>
					<div className={darkMode ? 'quick-title-dark' : 'quick-title-light'}>
						Unload Procedure Audit
					</div>
					{displayQuestions}

					<div style={{ padding: '25px' }}>
						<Button>Submit</Button>
					</div>
				</div>
			</div>

			<Footer />
		</Fragment>
	)
}
export default UnloadProcedureAudit
