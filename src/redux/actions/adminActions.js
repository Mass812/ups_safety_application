import firebase, { auth, db } from '../../Components/Firebase/FirebaseConfig'
const moment = require('moment')

//these just set active svs
export const getActiveSVs = () => {
	return (dispatch) => {
		let hold
		dispatch({ type: 'SV_LIST_LOADING', svListLoading: true })
		return db
			.collection('active_supervisors')
			.doc('y5usM8fu4fX77AeA1sdg')
			.get()
			.then((snap) => {
				console.log(snap.data())
				hold = snap.data()
				
				dispatch({ type: 'ACTIVE_SV_LIST', payload: hold })
				dispatch({ type: 'SV_LIST_LOADING', svListLoading: false })
			})
			.catch((err) => {
				console.log(err)
				dispatch({ type: 'SV_LIST_LOADING', svListLoading: false })
			})
	}
}

export const getSVEmployees = (name) => {
	return async (dispatch) => {
		let keep
		const docRef = db.collection('supervisors').doc(`${name}`)

		docRef
			.get()
			.then((doc) => {
				console.log('employee list of snap ', doc)

				keep = doc.data()
				console.log('employee n.data =>', keep)
				dispatch({ type: 'GET_SV_EMPLOYEES', payload: keep })
			})
			.catch((err) => console.log(err))
	}
}

export const getSVDocs = () => {
	return async (dispatch) => {
		let svsDocs = []

		await db
			.collection('supervisors')
			.orderBy('name', 'asc')
			.get()
			.then((snap) => {
				snap.forEach((n) => {
					dispatch({ type: 'RANK_MESSAGE', payload: 'Pulling Requested SVs' })

					svsDocs.push(n.data())

					dispatch({ type: 'GET_SVS_DOCS', payload: svsDocs })
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}
}

//Add PERMENTANTLY REMOVE SV TO DELETE ALL TRACES
export const changeActiveSvs = (entered) => {
	return async (dispatch) => {
		let names = []
		let addToArray = firebase.firestore.FieldValue.arrayUnion
		let removeFromArray = firebase.firestore.FieldValue.arrayRemove
		let svRef = db.collection('active_supervisors').doc('y5usM8fu4fX77AeA1sdg')

		await svRef.get().then((doc) => (names = doc.data().svList))
		//remove user if user already exists in like array
		if (names.includes(`${entered.name}`)) {
			await svRef.get().then((names) => names.data()).then(() => {
				svRef
					.update({ svList: removeFromArray(`${entered.name}`) })
					.then(() => {
						db.collection('supervisors').doc(`${entered.name}`).delete()

						let message = `${entered.name} successfully Removed`
						dispatch({ type: 'SUCCESSFUL_CHANGE_ACTIVE_SV', payload: message })
						dispatch(getActiveSVs())
					})
					.catch((err) => console.log(err))
				//get updated doc
			})
		} else {
			await svRef.get().then((doc) => doc.data())
			svRef
				.update({ svList: addToArray(`${entered.name}`) })
				.then(() => {
					let svDoc = db.collection('supervisors').doc(`${entered.name}`)
					let date = new Date()
					let year = moment().format('YY')
					if (!svDoc.exist) {
						return svDoc
							.set({
								date,
								name: `${entered.name}`,
								team: addToArray(`${entered.name}`),
								efficiency: [],
								key: `${entered.name}_${year}`,
								shift: `${entered.shift}`,
								parenthesis: `${entered.parenthesis}`
							})
							.catch((err) => console.log(err))
					}
				})
				.then(() => {
					let message = `${entered.name} successfully Added`
					dispatch({ type: 'SUCCESSFUL_CHANGE_ACTIVE_SV', payload: message })
					dispatch(getActiveSVs())
				})
				.catch((err) => console.log(err))
		}
	}
}

//this creates an team sub doc under Supervisors collection
export const addRemoveEmployees = (info) => {
	return async (dispatch) => {
		let employee = info.employeeName
		let addToArray = firebase.firestore.FieldValue.arrayUnion
		let removeFromArray = firebase.firestore.FieldValue.arrayRemove

		const svRef = db.collection('supervisors').doc(`${info.sv}`)
		svRef.get().then((doc) => {
			if (doc.data().team.includes(employee)) {
				svRef
					.update({ team: removeFromArray(employee) })
					.then(() => {
						let message = `${employee} successfully Removed from ${info.sv}'s team`
						dispatch({ type: 'SUCCESSFUL_CHANGE_SV_TEAM', payload: message })
					})
					.catch((err) => console.log(err))

				//get updated doc
				//add user to like array if they do not previously exist in like array
			} else {
				svRef
					.update({ team: addToArray(employee) })
					.then(() => {
						let message = `${employee} successfully Added to ${info.sv}'s team`
						// dispatch(getSVTeam(`${info.sv}`))
						dispatch({ type: 'SUCCESSFUL_CHANGE_SV_TEAM', payload: message })
					})
					.catch((err) => console.log(err))
			}
		})
	}
}
