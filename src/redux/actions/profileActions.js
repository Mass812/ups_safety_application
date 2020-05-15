import firebase, { db, auth } from '../../Components/Firebase/FirebaseConfig'
import { LOADING } from '../types'
import { GET_BASIC_USER_INFO } from '../types'

export const createAccountAndUserDoc = (x) => {
	return async (dispatch) => {
		await auth
			.createUserWithEmailAndPassword(x.emailEntered, x.passwordEntered)
			.then(async () => {
				dispatch({ type: 'LOADING', isLoading: true })
				const newUser = {
					email: auth.currentUser.email,
					userId: auth.currentUser.uid,
					displayName: x.displayNameEntered
				}
				const userDocRef = db.collection('users').doc(auth.currentUser.uid)
				userDocRef.set(newUser)
			})
			.then(() => dispatch({ type: 'LOADING', isLoading: false }))
			.catch((err) => console.log(err))
	}
}

export const getBasicUserDetails = () => {
	return async (dispatch) => {
		const userRef = auth.currentUser.uid

		dispatch({ type: 'LOADING', isLoading: true })
		let basicUserInfo
		await firebase
			.firestore()
			.collection('users')
			.doc(userRef)
			.get()
			.then(async (snap) => {
				basicUserInfo = snap.data()
				console.log('basicUserInfo', snap.data())
				dispatch({ type: GET_BASIC_USER_INFO, basicUserInfo })
			})
			.then(async () => {
				dispatch({ type: 'LOADING', isLoading: false })
				return basicUserInfo
			})
			.catch((err) => {
				dispatch({ type: 'LOADING', isLoading: false })
				console.log(err)
			})

		//get the users profile
	}
}

export const addNameToUserDoc = (data) => {
	return async (dispatch) => {
		const userDoc = auth.currentUser.uid
		dispatch({ type: 'LOADING', isLoading: true })

		db
			.collection('users')
			.doc(userDoc)
			.update({ displayName: data.displayNameEntered })
			.then(() => dispatch({ type: 'LOADING', isLoading: false }))
			.catch((err) => console.log(err))
	}
}
