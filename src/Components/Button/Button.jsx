import React from 'react'
import './Button.scss'
import { useSelector } from 'react-redux'

const Button = ({ onClick, children }) => {
	const isLoading = useSelector((state) => state.loading.isLoading)
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	return (
		<button
			disabled={isLoading}
			className={darkMode ? 'button-dark ' : 'button-light '}
			
			onClick={onClick}>
			{children}
		</button>
	)
}
export default Button
