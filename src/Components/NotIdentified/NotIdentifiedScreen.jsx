import React, { Fragment, useEffect } from 'react'
import './NotIdentifiedScreen.scss'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../Firebase/FirebaseConfig'
import { getBasicUserDetails } from '../../redux/actions/profileActions'
import {} from '../../redux/actions/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import { LOADING } from '../../redux/types'
import Spinner from '../Spinner/Spinner'
import Button from '../Button/Button'
import '../../App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUps } from '@fortawesome/free-brands-svg-icons'

const NotIdentifiedScreen = (e) => {
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const isLoading = useSelector((state) => state.loading.isLoading)
	const dispatch = useDispatch()
	const history = useHistory()

	const signInAsGuest = async (e) => {
		//TODO set up reducer and action later
		e.preventDefault()

		await auth
			.signInWithEmailAndPassword('guest@guest.com', 'Guest123!')
			.then(() => {
				dispatch({ type: LOADING, isLoading: true })
				dispatch(getBasicUserDetails())
			})
			.then(() => {
				history.push(`/home`)

			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<Fragment>
			{!isLoading ? (
				<div className={darkMode ? 'not-identified-container-dark' : 'not-identified-container-light'}>
					<div className={darkMode ? 'not-identified-title-dark' : 'not-identified-title-light'}>
						Worldport
						<div style={{ fontSize: '22px' }}>Safety Audit Platform</div>
					</div>

					<div className={darkMode ? 'sign-options-logo-dark' : 'sign-options-logo-light'}>
						<Fragment>
							<div className='landing-loader'>
								<div className='landing-inner one' />
								<div className='landing-inner two' />
								<div className='landing-inner three' />
							</div>

							<div className='landing-spinner-container'>
								<FontAwesomeIcon icon={faUps} className={darkMode ? 'landing-ups-spinner-dark' : 'landing-ups-spinner-light'} />
							</div>
						</Fragment>
					</div>

					<div className='options-button-splay'>
						
							<Button onClick={signInAsGuest} className='button'>Anonymous Sign On</Button>
						
						
						<div />
					</div>
				</div>
			) : (
				<Spinner />
			)}
		</Fragment>
	)
}
export default NotIdentifiedScreen
