import React from 'react'
import '../CreateAccount.scss'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import '../../../App.scss'
const SignInDumb = (props) => {
	const history = useHistory()
	const darkMode = useSelector((state) => state.darkMode.darkMode)

	return (
		<div className={darkMode ? 'create-account-module-dark' : 'create-account-module-light'}>
			<div className={darkMode ? 'inner-account-parent-dark' : 'inner-account-parent-light'}>
				<div className={darkMode ? 'outer-text-dark' : 'outer-text-light'}>
					<div className={darkMode ? 'sign-title-dark' : 'sign-title-light'}>Sign in to Worldport Safety</div>
				</div>
				<div>
					{' '}
					<Input
						
						placeholder='Enter your Email Here'
						type='text'
						onChange={props.userEmailEntered}
						onBlur={props.userEmailEntered}
						autoFocus
					/>{' '}
					<Input
						
						placeholder='Enter a Password Here'
						type='password'
						onChange={props.userPasswordEntered}
					/>{' '}
				</div>

				<Button
					className={darkMode ? 'button-dark ' : 'button-light '}
					onClick={props.userInfoEntered}
					style={props.password && props.email ? { opacity: '1' } : { opacity: '.4' }}
					disabled={props.password && props.email ? false : true}>
					Sign In
				</Button>
				<div>
					<h5 style={{ color: 'aquaMarine' }}>
						{props.error ? (
							'Either password or email are invalid. Please re-enter your information.'
						) : null}
					</h5>
				</div>
				<Button
					onClick={() => history.push('/')}
					className={darkMode ? 'button-dark ' : 'button-light '}>
					Back
				</Button>
			</div>
		</div>
	)
}

export default SignInDumb
