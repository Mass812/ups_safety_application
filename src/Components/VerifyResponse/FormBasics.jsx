import React from 'react'
import './VerifyResponse.scss'

const FormBasics = ({ question, info }) => {
	return (
		<div className='form-info'>
			<div className='form-info-question'>{question}</div>
			<div className='form-info-response'>{info}</div>
		</div>
	)
}
export default FormBasics
