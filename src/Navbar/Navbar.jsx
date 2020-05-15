import React, { Fragment } from 'react'
import '../../App.scss'
import './Navbar.scss'
import { useLocation, useHistory } from 'react-router-dom'
import SignOutButton from './SignOutButton/SignOutButton'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button'
import Emblem from '../Components/Emblem/Emblem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

//dispatch = useDispatch();
//

const Navbar = () => {
	const history = useHistory()
	const location = useLocation()
	const dispatch = useDispatch()
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	const handleDarkMode = async (e) => {
		e.preventDefault()
		console.log()
		let dark = !darkMode

		dispatch({ type: 'DARK_MODE', darkMode: dark })
	}

	const balanceEscape = (e) => {
		e.preventDefault()
		dispatch({ type: 'RESET_FORM' })
		//	dispatch({ type: 'CLEAR_DB_RECORD' })

		history.push('/home')
	}

	const sendToAdmin = () => {
		if (location.pathname === '/home') {
			history.push('admin_console')
		}
	}
	console.log('location ', location.pathname)

	return (
		<div className={darkMode ? 'navbar-dark ' : 'navbar-light '}>
			<div className={darkMode ? 'nav-image-container-dark' : 'nav-image-container-light'}>
				<Fragment>
					<div className={darkMode ? 'nav-image-block-dark' : 'nav-image-block-light'} onClick={sendToAdmin}>
						<Emblem size={'3x'} color={'black'}>
							<div className={darkMode ? 'emblem-font-dark' : 'emblem-font-light'}>Safety </div>
						</Emblem>
					</div>
				</Fragment>
			</div>
			<div className={darkMode ? 'nav-icon-bar-dark' : 'nav-icon-bar-light'}>
				<SignOutButton />
				<Button onClick={handleDarkMode}>
					<FontAwesomeIcon icon={faSun} size={'sm'} /> / <FontAwesomeIcon icon={faMoon} size={'sm'} />
				</Button>
				<Button onClick={balanceEscape}>
					<FontAwesomeIcon icon={faHome} size={'sm'} /> Home
				</Button>
			</div>
		</div>
	)
}
export default Navbar
