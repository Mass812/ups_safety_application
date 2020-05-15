import React, { useState, Fragment } from 'react'
import SignInDumb from './SignInDumb'
import firebase, { db, auth } from '../../Firebase/FirebaseConfig'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBasicUserDetails } from '../../../redux/actions/profileActions'
import { LOADING } from '../../../redux/types.js'
import Spinner from '../../Spinner/Spinner'

const SignIn = () => {
	const basicUserInfo = useSelector((state) => state.profile.basicUserInfo)
	const isLoading = useSelector((state) => state.loading.isLoading)

	const [
		info,
		setInfo
	] = useState({
		email: '',
		password: ''
	})
	const [
		signOnError,
		setSignOnError
	] = useState(false)
	const history = useHistory()
	const dispatch = useDispatch()

	const userEmailEntered = (e) => {
		let emailTrimLowerCase = e.target.value.trim().toLowerCase()
		setInfo({
			...info,
			email: emailTrimLowerCase
		})
	}

	const userPasswordEntered = (e) => {
		setInfo({
			...info,
			password: e.target.value
		})
	}

	const userInfoEntered = async (e) => {
		e.preventDefault()
		await auth
			.signInWithEmailAndPassword(info.email, info.password)
			.then(() => {
				dispatch(getBasicUserDetails())
			})
			.then(async () => {
				await basicUserInfo
				history.push(`/home`)
			})
			.catch((err) => {
				setSignOnError(true)
				console.log(err)
			})
	}

	return (
		<Fragment>
			<SignInDumb
				userEmailEntered={userEmailEntered}
				userPasswordEntered={userPasswordEntered}
				password={info.password}
				email={info.email}
				userInfoEntered={userInfoEntered}
				error={signOnError}
			/>
		</Fragment>
	)
}
export default SignIn
