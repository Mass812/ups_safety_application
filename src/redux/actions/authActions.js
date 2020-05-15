import firebase, { db, auth } from '../../Components/Firebase/FirebaseConfig'

export const verifyUserRoute = () => {
	return (dispatch) => {
		let verifyUserRoute;
		dispatch({ type: 'LOADING', isLoading: true })
		 verifyUserRoute = auth.currentUser !==null ? true : false;

if(verifyUserRoute){
	dispatch({ type: 'VERIFY_USER_ROUTE', verifyUserRoute })
	dispatch({ type: 'LOADING', isLoading: false })
}
else {
	dispatch({ type: 'VERIFY_USER_ROUTE', verifyUserRoute })
	dispatch({ type: 'LOADING', isLoading: false })
}

	}
}
