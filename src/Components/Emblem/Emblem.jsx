import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUps } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'
import '../../App.scss'

const Emblem = ({ size, children }) => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	return (
		<div className='form-emblem-block'>
			<FontAwesomeIcon icon={faUps} size={size} color={darkMode ? '#9e7f21' : '#3d3b37'} /> {''}
			{children}
		</div>
	)
}
export default Emblem
