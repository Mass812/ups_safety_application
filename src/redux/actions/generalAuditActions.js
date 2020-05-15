import firebase, { auth } from '../../Components/Firebase/FirebaseConfig'
import { LOADING } from '../types'

export const createGeneralAudit = (formStore) => {
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
				const timestamp = firebase.firestore.FieldValue.serverTimestamp()
				firebase
					.firestore()
					.collection('general_audit')
					.add({
						displayName,
						auditor: displayName,
						userId: userRef,
						formTitle: formStore.genFormTitle,
						supervisor: formStore.supervisor,
						createdAt: timestamp,
						ramp: 'D',
						date: formStore.genFormDate,
						personCount: formStore.genPersonCount,
						genQuestion1: formStore.genQuestion1,
						genQuestion2: formStore.genQuestion2,
						genQuestion3: formStore.genQuestion3,
						genQuestion4: formStore.genQuestion4,
						genQuestion5: formStore.genQuestion5,
						genQuestion6: formStore.genQuestion6,
						genQuestion7: formStore.genQuestion7,
						genQuestion8: formStore.genQuestion8,
						genQuestion9: formStore.genQuestion9,
						genQuestion10: formStore.genQuestion10,
						genQuestion11: formStore.genQuestion11,
						genQuestion12: formStore.genQuestion12,
						genQuestion13: formStore.genQuestion13,
						genQuestion14: formStore.genQuestion14,
						genQuestion15: formStore.genQuestion15,
						genQuestion16: formStore.genQuestion16,
						genQuestion17: formStore.genQuestion17,
						genQuestion18: formStore.genQuestion18,
						genQuestion19: formStore.genQuestion19,
						genQuestion20: formStore.genQuestion20,
						genQuestion21: formStore.genQuestion21,
						genQuestion22: formStore.genQuestion22,
						genQuestion23: formStore.genQuestion23,
						genQuestion24: formStore.genQuestion24,
						genQuestion25: formStore.genQuestion25,
						genQuestion26: formStore.genQuestion26,
						genQuestion27: formStore.genQuestion27,
						genQuestion28: formStore.genQuestion28,
						genQuestion29: formStore.genQuestion29,
						genQuestion30: formStore.genQuestion30,
						genAnswer1: formStore.genAnswer1,
						genAnswer2: formStore.genAnswer2,
						genAnswer3: formStore.genAnswer3,
						genAnswer4: formStore.genAnswer4,
						genAnswer5: formStore.genAnswer5,
						genAnswer6: formStore.genAnswer6,
						genAnswer7: formStore.genAnswer7,
						genAnswer8: formStore.genAnswer8,
						genAnswer9: formStore.genAnswer9,
						genAnswer10: formStore.genAnswer10,
						genAnswer11: formStore.genAnswer11,
						genAnswer12: formStore.genAnswer12,
						genAnswer13: formStore.genAnswer13,
						genAnswer14: formStore.genAnswer14,
						genAnswer15: formStore.genAnswer15,
						genAnswer16: formStore.genAnswer16,
						genAnswer17: formStore.genAnswer17,
						genAnswer18: formStore.genAnswer18,
						genAnswer19: formStore.genAnswer19,
						genAnswer20: formStore.genAnswer20,
						genAnswer21: formStore.genAnswer21,
						Ramp: 'D',
						Division: '2265-15-WINGS'
					})
					.then((docRef) => {
						//can create any associated docs with post creation here
						firebase
							.firestore()
							.collection(`${formStore.genFormTitle}`)
							.doc(docRef.id)
							.update({ formId: docRef.id })
					})
					.then(() => {
						dispatch({ type: LOADING, isLoading: false })
					})
					.catch((err) => {
						console.log('error from Form action creator', err)
					})
			})
	}
}
