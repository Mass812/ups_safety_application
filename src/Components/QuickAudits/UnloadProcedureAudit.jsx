import React, { Fragment, useEffect } from 'react'
import './QuickAudit.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import unloadQuestions from './unloadQuestions'
import { useHistory } from 'react-router-dom'
import { createGeneralAudit } from '../../redux/actions/generalAuditActions'
import Toggle from '../Toggle/Toggle'
import SurveyQuestion from './SurveyQuestion'
import Input from '../Input/Input'
import Button from '../Button/Button'

const UnloadProcedureAudit = () => {
	const formStore = useSelector((state) => state.genAuditForm)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const dispatch = useDispatch()
	const history = useHistory()

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

	useEffect(() => {
		dispatch({ type: 'GEN_FORM_DATE', payload: new Date().toString() })
		return () => {
			dispatch({ type: 'GEN_FORM_DATE', payload: '' })
		}
	}, [])

	const sv = (e) => {
		//On Submit Verifu Value
		dispatch({ type: 'GEN_FORM_SV', payload: e.target.value })
	}

	const personsCount = (e) => {
		//On Submit Verify Number

		console.log('headCount ', Number(e.target.value))
		dispatch({ type: 'GEN_PERSON_COUNT', payload: e.target.value })
	}

	const submit = (e) => {
		e.preventDefault()
		dispatch(createGeneralAudit(formStore))
		setTimeout(() => {
			dispatch({ type: 'RESET_FORM' })
			dispatch({ type: 'LOADING', isLoading: false })
		}, 2)
		history.push('/home')
	}

	const displayQuestions = unloadQuestions.map((n) => (
		<Fragment key={n.id}>
			<SurveyQuestion key={n.id} question={n.question} questionNumber={n.id}>
				<Toggle key={n.id} clickNA={(e) => clickNA(e, n.id)} clickFalse={(e) => clickFalse(e, n.id)} clickTrue={(e) => clickTrue(e, n.id)} />
			</SurveyQuestion>
			{/* <div className=' ' style={{ color: 'darkGrey' }}>
				Comment:{' '}
			</div>
			<div>{n[`response${n.id}`]}</div>
			<Input type={'text'} onChange={(e) => comment(e, n.id)} /> */}
		</Fragment>
	))

	return (
		<Fragment>
			<Navbar />

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className={darkMode ? 'quick-form-parent-dark' : 'quick-form-parent-light'}>
					<div className={darkMode ? 'quick-title-dark' : 'quick-title-light'}>Encompassing Audit</div>

					<div className={darkMode ? 'form-title-dark ' : 'form-title-light '}>{formStore.genFormTitle}</div>

					<div className={darkMode ? 'sv-label-dark' : 'sv-label-light'} style={{ paddingTop: '30px' }}>
						Supervisor
						<span style={{ color: 'goldenrod' }}> {formStore.supervisor}</span>
					</div>

					<Input
						placeholder={'Enter Audited Supervisor'}
						onChange={sv}
						onBlur={(e) => (e.target.value = '')}
						//value={Form.formSV}
						//	typed={Form.formSV}
					/>

					<div className={darkMode ? 'employee-count-label-dark' : 'employee-count-label-light'}>
						Audit Employee Count
						<span
							style={{
								color: 'goldenrod'
							}}>
							{' '}
							{formStore.genPersonCount}
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

					{displayQuestions}

					<div style={{ padding: '25px' }}>
						<Button onClick={submit}>Submit</Button>
					</div>
				</div>
			</div>

			<Footer />
		</Fragment>
	)
}
export default UnloadProcedureAudit
