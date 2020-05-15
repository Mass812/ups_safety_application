import firebase, { auth } from '../../Components/Firebase/FirebaseConfig'
import { LOADING } from '../types'

export const createBlueprintAudit = ({ blueprintStore }) => {
	return async (dispatch) => {
		const userRef = auth.currentUser.uid
		let addThisData
		await firebase
			.firestore()
			.collection('users')
			.doc(userRef)
			.get()
			.then((doc) => {
				console.log('from createPost Action', doc.data())
				addThisData = doc.data()
			})
			.then(() => {
				dispatch({ type: 'LOADING', isLoading: true })

				const { displayName } = addThisData
				firebase
					.firestore()
					.collection('blueprint_audit')
					.add({
						displayName,
						Observer_Name: displayName,
						userId: userRef,
						answer1Safe: blueprintStore.q1BlueprintSafeCount,
						answer1UnSafe: blueprintStore.q1BlueprintUnSafeCount,
						answer1FeedBack: blueprintStore.q1BlueprintFeedBack,
						answer2Safe: blueprintStore.q2BlueprintSafeCount,
						answer2UnSafe: blueprintStore.q2BlueprintUnSafeCount,
						answer2FeedBack: blueprintStore.q2BlueprintFeedBack,
						answer3Safe: blueprintStore.q3BlueprintSafeCount,
						answer3UnSafe: blueprintStore.q3BlueprintUnSafeCount,
						answer3FeedBack: blueprintStore.q3BlueprintFeedBack,
						answer4Safe: blueprintStore.q4BlueprintSafeCount,
						answer4UnSafe: blueprintStore.q4BlueprintUnSafeCount,
						answer4FeedBack: blueprintStore.q4BlueprintFeedBack,
						answer5Safe: blueprintStore.q5BlueprintSafeCount,
						answer5UnSafe: blueprintStore.q5BlueprintUnSafeCount,
						answer5FeedBack: blueprintStore.q5BlueprintFeedBack,
						answer6Safe: blueprintStore.q6BlueprintSafeCount,
						answer6UnSafe: blueprintStore.q6BlueprintUnSafeCount,
						answer6FeedBack: blueprintStore.q6BlueprintFeedBack,
						Observer_Group: blueprintStore.blueprintSV,
						Employees_Observed: blueprintStore.blueprintPersonsCount,
						createdAt: new Date().toISOString(),
						comments: blueprintStore.blueprintComments,
						Date: new Date().toISOString(),
						Ramp: 'D',
						Division: 'DIVISION',
						SLIC: 'SLIC',
						Form_Name: 'from UPS DOCS',
						question1: 'some_question',
						question2: 'some_question',
						question3: 'some_question',
						question4: 'some_question',
						question5: 'some_question',
						question6: 'some_question'
					})
					.then((docRef) => {
						//can create any associated docs with post creation here

						firebase
							.firestore()
							.collection('blueprintStore')
							.doc(docRef.id)
							.update({ formId: docRef.id })
					})
					.then(() => {
						dispatch({ type: 'CREATE_BLUEPRINT_AUDIT', blueprintAudit: blueprintStore })
						dispatch({ type: LOADING, isLoading: false })
					})
					.catch((err) => {
						console.log('error from Blueprint action creator', err)
					})
			})
	}
}
