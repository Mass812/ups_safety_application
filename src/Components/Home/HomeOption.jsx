import React, { Fragment, useEffect, useRef } from 'react'
import '../../App.scss'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.scss'
import { gsap } from 'gsap'

const HomeOption = ({ formName, icon, pulse, spin, onClick }) => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)
let home = useRef()
useEffect(() => {

}, [])





	return (
		<section className={darkMode ? 'font-awesome-choice-block-dark' : 'font-awesome-choice-block-light'}>
			<div ref={(el)=>el= home} onClick={onClick} className='individual-form-option'>
			{' '}	<FontAwesomeIcon
					icon={icon}
					color={'goldenrod'}
					size={'lg'}
					className='home-icons'
					pulse={pulse}
					spin={spin}
					//		style={{ border: '1px solid black', padding: '3px', borderRadius: '5px' }}
				/>
				{' '}
				<span >{formName}</span>
			</div>
		</section>
	)
}
export default HomeOption
