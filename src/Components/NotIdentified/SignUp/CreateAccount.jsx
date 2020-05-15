import React, { useState, Fragment } from 'react'
import SignUp from './CreateAccountDumb'
import { useHistory } from 'react-router-dom'
import {  createAccountAndUserDoc } from '../../../redux/actions/profileActions'
import { useDispatch, useSelector } from 'react-redux'
import { LOADING } from '../../../redux/types'
import Spinner from '../../Spinner/Spinner'

const CreateAccount = () => {
	const history = useHistory()
	const dispatch = useDispatch()
	const enteredData = useSelector((state) => state.profile)
	const [ typed, setTyped ] = useState('')
	const [ waiting, setWaiting ] = useState(false)

	const regexEmail = /[a-zA-Z0-9].*?com$/
	const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
	const regexSpecial = /(.*[!@#$%^&*])/
	const regexCapital = /(.*[A-Z])/
	const regexNumber = /(.*[0-9])/

	const userEmailEntered = (e) => {
		if (regexEmail.test(e.target.value)) {
			let emailTrimLowerCase = e.target.value.trim().toLowerCase()
			dispatch({ type: 'STORE_USER_EMAIL', emailEntered: emailTrimLowerCase })
		}
	}

	const fireOffTheseRockets = (e) => {
		userPasswordEntered(e)
		generateMessage(e)
		setTyped(e.target.value)
	}

	const userPasswordEntered = (e) => {
		if (regexPassword.test(e.target.value)) {
			dispatch({ type: 'CREATE_ACCOUNT_PASSWORD', passwordEntered: e.target.value })
		}
	}

	const userPasswordConfirmed = (e) => {
		dispatch({ type: 'VERIFY_ACCOUNT_PASSWORD', verPasswordEntered: e.target.value })
	}

	const handleDisplayName = (e) => {
		if (e.target.value.trim() !== '') {
			dispatch({ type: 'CREATE_USER_DISPLAY_NAME', displayNameEntered: e.target.value })
		}
	}

	//on Final Submit
	const userInfoEntered = async () => {
		setWaiting(true)
		dispatch(createAccountAndUserDoc(enteredData))
		console.log(waiting, 'before timeout')
		setTimeout(async () => {
			setWaiting(false)
			console.log(waiting, 'after timeout')
			dispatch({ type: LOADING, isLoading: false })
			history.push(`/sign_in`)
		}, 4000)
	}

	const getErrors = () => {
		if (enteredData.emailEntered === undefined) {
			return <p>please add an email we can bind to your account</p>
		} else if (enteredData.passwordEntered === undefined) {
			return <p>please add a password for your account</p>
		} else if (enteredData.verPasswordEntered !== enteredData.passwordEntered) {
			return <p>passwords do not match </p>
		} else if (enteredData.passwordEntered === undefined || enteredData.verPasswordEntered === undefined || enteredData.emailEntered === undefined || enteredData.displayNameEntered === undefined) {
			return <p>please complete all fields</p>
		} else if (enteredData.passwordEntered) {
			return <p>Your All Set, Just give us your username.</p>
		}
	}

	const generateMessage = () => {
		if (typed.length > 2) {
			if (!regexCapital.test(typed)) {
				return <p>Make sure to use a Capital Letter</p>
			}
			if (!regexNumber.test(typed)) {
				return <p>Make sure to include a Number</p>
			}
			if (!regexSpecial.test(typed)) {
				return <p>Make sure to include a Special Character (!@#$%^&*)</p>
			}
		}
	}
	getErrors()
	console.log(enteredData)
	const errorMessage = getErrors()
	const helpNotification = generateMessage()

	return (
		<Fragment>
			{waiting ? (
				<Spinner />
			) : (
				<SignUp
					userEmailEntered={userEmailEntered}
					fireOffTheseRockets={fireOffTheseRockets}
					userPasswordConfirmed={userPasswordConfirmed}
					handleDisplayName={handleDisplayName}
					userInfoEntered={userInfoEntered}
					helpNotification={helpNotification}
					errorMessage={errorMessage}
					password={enteredData.passwordEntered}
					email={enteredData.emailEntered}
					verPassword={enteredData.verPasswordEntered}
				/>
			)}

			<button onClick={() => dispatch({ type: 'RESET_SIGNUP_FORM' })}>RESET</button>
		</Fragment>
	)
}
export default CreateAccount
