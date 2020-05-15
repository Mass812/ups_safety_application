import React from 'react'
import '../../App.scss'
import { useSelector } from 'react-redux'

const Footer = () => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	return (
		<div className={darkMode ? 'home-parent-dark' : 'home-parent-light'}>
			<div className='footer-block'>
				<div className='footer-message'>
					{' '}
					<span style={{ color: 'black', fontSize: '10px' }}>Built by </span>  Matt
					Wellman{' '}
				</div>
			</div>
		</div>
	)
}
export default Footer
