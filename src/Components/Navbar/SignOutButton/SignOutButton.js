import React, { Fragment } from 'react'
import { auth } from '../../Firebase/FirebaseConfig'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import '../../../App.scss'
import Button from '../../Button/Button'

const SignOutButton = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	const signOut = async () => {
		console.log('currentUser', auth.currentUser)
		history.push('/home')
			
		try {
			console.log('signed in user', auth.currentUser)
			await auth.signOut().then(() => {
				dispatch({ type: 'RESET_FORM' })
				// dispatch({ type: 'RESET_BASIC_USER_INFO' })
				dispatch({ type: 'RESET_ADMIN' })
				dispatch({ type: 'CLEAR_DB_RECORDS' })
				localStorage.clear()
				history.push('/')
			})
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Fragment>
			<Button onClick={signOut} className='button'>
				Sign Out
			</Button>
		</Fragment>
	)
}
export default SignOutButton
