import React, { Fragment } from 'react'
import './Spinner.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUps } from '@fortawesome/free-brands-svg-icons'
const Spinner = ({color}) => {
	return (
		<Fragment>
			<div className='loader'>
				<div className='inner one' />
				<div className='inner two' />
				<div className='inner three' />
			</div>

			<div className='spinner-container'>
				<FontAwesomeIcon icon={faUps} className='ups-spinner' color={color} />
			</div>
		</Fragment>
	)
}
export default Spinner
