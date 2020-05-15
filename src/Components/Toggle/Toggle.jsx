import React, { Fragment, useState } from 'react'
import './Toggle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'

import { useSelector } from 'react-redux'

const Toggle = ({ children, selected, result, clickNA, clickFalse, clickTrue }) => {
	const [
		toggleNaFrame,
		setToggleNaFrame
	] = useState(false)
	const [
		toggleTrueFrame,
		setToggleTrueFrame
	] = useState(false)
	const [
		toggleFalseFrame,
		setToggleFalseFrame
	] = useState(false)

	const toggleNa = () => {
		setToggleFalseFrame(false)
		setToggleTrueFrame(false)
		setToggleNaFrame(true)
	}
	const toggleTrue = () => {
		setToggleFalseFrame(false)
		setToggleNaFrame(false)
		setToggleTrueFrame(true)
	}
	const toggleFalse = () => {
		setToggleTrueFrame(false)
		setToggleFalseFrame(true)
		setToggleNaFrame(false)
	}

	const darkMode = useSelector((state) => state.darkMode.darkMode)
	return (
		<div className='toggle-splay'>
			<Fragment>
				<div
					onClick={clickNA}
					className={toggleNaFrame ? 'toggle-button-frame' : 'toggle-button-no-frame'}>
					<div className={darkMode ? 'icon-select-text-dark' : 'icon-select-text-light'}>
						{' '}
						N/A{' '}
					</div>
					<div>
						<FontAwesomeIcon
							className={
								darkMode ? 'icon-select-splay-dark' : 'icon-select-splay-light'
							}
                            icon={toggleNaFrame? faCheckCircle : faCircle}
							onClick={toggleNa}
						/>
					</div>
					<div className={darkMode ? 'icon-select-text-dark' : 'icon-select-text-light'}>
						{' '}
						{children}{' '}
					</div>
				</div>

				<div
					onClick={clickFalse}
					className={toggleFalseFrame ? 'toggle-button-frame' : 'toggle-button-no-frame'}>
					<div className={darkMode ? 'icon-select-text-dark' : 'icon-select-text-light'}>
						{' '}
						FALSE{' '}
					</div>
					<div>
						<FontAwesomeIcon
							className={
								darkMode ? 'icon-select-splay-dark' : 'icon-select-splay-light'
							}
                            icon={toggleFalseFrame? faCheckCircle : faCircle}
							onClick={toggleFalse}
						/>
					</div>
					<div className={darkMode ? 'icon-select-text-dark' : 'icon-select-text-light'}>
						{' '}
						{children}{' '}
					</div>
				</div>

				<div
					onClick={clickTrue}
					className={toggleTrueFrame ? 'toggle-button-frame' : 'toggle-button-no-frame'}>
					<div className={darkMode ? 'icon-select-text-dark' : 'icon-select-text-light'}>
						{' '}
						TRUE{' '}
					</div>
					<div>
						<FontAwesomeIcon
							className={
								darkMode ? 'icon-select-splay-dark' : 'icon-select-splay-light'
							}
							icon={toggleTrueFrame? faCheckCircle : faCircle}
							onClick={toggleTrue}
						/>
					</div>
					<div className={darkMode ? 'icon-select-text-dark' : 'icon-select-text-light'}>
						{' '}
						{children}{' '}
					</div>
				</div>
			</Fragment>
		</div>
	)
}
export default Toggle
