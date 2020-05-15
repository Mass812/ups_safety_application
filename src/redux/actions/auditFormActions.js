import firebase, { auth, db } from '../../Components/Firebase/FirebaseConfig'
import { LOADING } from '../types'
const moment = require('moment')

export const createFormAudit = (formStore) => {
	return async (dispatch) => {
		const userRef = auth.currentUser.uid
		let addThisData

		let addToArray = firebase.firestore.FieldValue.arrayUnion

		await db
			.collection('supervisors')
			.doc(`${formStore.formSV}`)
			.update({
				efficiency: addToArray(formStore.efficiency)
			})
			.then(() => {
				dispatch({ type: 'RESET_FORM' })
			})
			.catch((err) => err, 'error processing audit form')

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
				const timestamp = firebase.firestore.FieldValue.serverTimestamp()

				const fragmentTime = new Date()
				const dayNumber = fragmentTime.getDay()
				const month = fragmentTime.getMonth() + 1
				const dayOfMonth = fragmentTime.getDate()
				const year = fragmentTime.getFullYear()
				//	const weekOfYear = fragmentTime.weekOfYear()
				const weekNumberInYear = moment().format('w')
				const mondayFromWeekNumber = moment().day('Monday').year(year).week(weekNumberInYear).toDate()

				console.log('createAudit+> ', fragmentTime.getDate())

				return firebase
					.firestore()
					.collection(`${formStore.formCollection}`)
					.add({
						displayName,
						efficiency: formStore.efficiency,
						formCollection: formStore.formCollection,
						Observer_Name: displayName,
						userId: userRef,
						formTitle: formStore.formTitle,
						shortQuestionOne: formStore.shortQuestionOne,
						shortQuestionTwo: formStore.shortQuestionTwo,
						shortQuestionThree: formStore.shortQuestionThree,
						shortQuestionFour: formStore.shortQuestionFour,
						shortQuestionFive: formStore.shortQuestionFive,
						shortQuestionSix: formStore.shortQuestionSix,
						longQuestionOne: formStore.longQuestionOne,
						longQuestionTwo: formStore.longQuestionTwo,
						longQuestionThree: formStore.longQuestionThree,
						longQuestionFour: formStore.longQuestionFour,
						longQuestionFive: formStore.longQuestionFive,
						longQuestionSix: formStore.longQuestionSix,
						answer1Safe: formStore.q1FormSafeCount,
						answer1UnSafe: formStore.q1FormUnSafeCount,
						answer1FeedBack: formStore.q1FormFeedBack,
						answer2Safe: formStore.q2FormSafeCount,
						answer2UnSafe: formStore.q2FormUnSafeCount,
						answer2FeedBack: formStore.q2FormFeedBack,
						answer3Safe: formStore.q3FormSafeCount,
						answer3UnSafe: formStore.q3FormUnSafeCount,
						answer3FeedBack: formStore.q3FormFeedBack,
						answer4Safe: formStore.q4FormSafeCount,
						answer4UnSafe: formStore.q4FormUnSafeCount,
						answer4FeedBack: formStore.q4FormFeedBack,
						answer5Safe: formStore.q5FormSafeCount,
						answer5UnSafe: formStore.q5FormUnSafeCount,
						answer5FeedBack: formStore.q5FormFeedBack,
						answer6Safe: formStore.q6FormSafeCount,
						answer6UnSafe: formStore.q6FormUnSafeCount,
						answer6FeedBack: formStore.q6FormFeedBack,
						Observer_Group: formStore.formSV,
						Employees_Observed: formStore.formPersonsCount,
						createdAt: timestamp,
						weekNumberInYear,
						mondayFromWeekNumber,
						day: dayNumber,
						dayOfMonth: dayOfMonth,
						month: month,
						year: year,
						comments: formStore.formComments,
						date: formStore.date,
						ramp: formStore.ramp,
						Division: '2265-15-WINGS',
						SLIC: formStore.slic,
						technicalFormName: formStore.technicalFormName
					})
					.then((docRef) => {
						//can create any associated docs with post creation here
						firebase.firestore().collection(`${formStore.formCollection}`).doc(docRef.id).update({ formId: docRef.id })
					})
					.then(() => {
						dispatch({ type: 'CREATE_FORM_AUDIT', formAudit: formStore })
						dispatch({ type: LOADING, isLoading: false })
						dispatch({ type: 'RESET_FORM' })
					})
					.catch((err) => err, 'error processing audit form')
			})
	}
}
