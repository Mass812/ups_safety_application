import React, { Fragment } from 'react'
import '../CreateAccount.scss'
import '../../../App.scss'
import { useHistory } from 'react-router-dom'
import Input from '../../Input/Input'
import Spinner from '../../Spinner/Spinner'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUps } from '@fortawesome/free-brands-svg-icons'

const Signup = ({ waiting, helpNotification, userEmailEntered, fireOffTheseRockets, userPasswordConfirmed, handleDisplayName, userInfoEntered, errorMessage }) => {
	const history = useHistory()
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.loading.isLoading)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const signUpInfo = useSelector((state) => state.profile)

	const backButton = () => {
		history.push('/')
		dispatch({ type: 'RESET_FORM' })
	}

	return (
		<Fragment>
			<div className={darkMode ? 'create-account-module-dark' : 'create-account-module-light'}>
				<div className={darkMode ? 'inner-account-parent-dark' : 'inner-account-parent-light'}>
					<div className={darkMode ? 'outer-text-dark' : 'outer-text-light'}>
						<div className={darkMode ? 'sign-title-dark' : 'sign-title-light'}>Sign Up </div>
						<div className={darkMode ? 'password-rq-dark' : 'password-rq-light'}>
							** Passwords must contain: at least one capital Letter, one special character and at least one number. <span className={darkMode ? 'pw-help-message-dark' : 'pw-help-message-light'}>{helpNotification}</span>
						</div>
					</div>
					<form>
						{' '}
						<Input name='email' placeholder='Enter your Email Here' type='text' onChange={userEmailEntered} autoComplete={false} autoFocus={true} /> <Input typed={false} name='password' placeholder='Enter a Password Here' type='password' onChange={fireOffTheseRockets} />{' '}
						<Input typed={false} name='password' placeholder='Confirm Password Here' type='password' onChange={userPasswordConfirmed} /> <Input typed={false} name='displayName' placeholder='Your First Name Here' type='text' onChange={handleDisplayName} />{' '}
					</form>

					<Button
						className='button'
						onClick={userInfoEntered}
						style={signUpInfo.passwordEntered && signUpInfo.emailEntered && signUpInfo.verPasswordEntered && signUpInfo.displayNameEntered ? { opacity: '1' } : { opacity: '.4' }}
						disabled={signUpInfo.passwordEntered && signUpInfo.emailEntered && signUpInfo.verPasswordEntered && signUpInfo.displayNameEntered ? false : true}>
						Create My Account
					</Button>
					<div className='error-message'>{errorMessage}</div>
				</div>
				{waiting ? <FontAwesomeIcon icon={faUps} size={'3x'} pulse /> : <Button onClick={backButton}>Back</Button>}
			</div>
		</Fragment>
	)
}

export default Signup
