import React from 'react'
import './Input.scss'
import '../../App.scss'
import {useSelector} from 'react-redux'


const Input = ({ onChange, onKeyPress, autoFocus, value, typed, placeholder, onBlur, type }) => {
	
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	return (
		<div className={darkMode ? 'post-block-dark ' : 'post-block-light '}>
			{typed ? (
				<div className={darkMode ? 'form-block-dark ' : 'form-block-light '}>
					<div className={darkMode ? 'show-typed-dark ' : 'show-typed-light '}> {typed} </div>
				</div>
			) : null}
			
			<input
				className={darkMode ? 'input-dark ' : 'input-light '}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				onKeyPress={onKeyPress}
				value={value}
				onBlur={onBlur}
			/>
		</div>
	)
}
export default Input
