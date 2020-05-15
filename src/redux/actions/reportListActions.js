import firebase, { db, auth } from '../../Components/Firebase/FirebaseConfig'

const moment = require('moment')

export const getThisWeeksTugReports = () => {
	return (dispatch) => {
		dispatch({ type: 'TUG_LIST_LOADING', isLoading: true })
		let thisWeeksTugReports = []

		let todaysMonth = new Date().getMonth() + 1

		db
			.collection('tug_audit')
			.orderBy('createdAt', 'desc')
			.limit(15)
			.where('month', '==', todaysMonth)
			.get()
			.then((snap) => {
				console.log(snap)

				snap.docs.map((item) => {
					thisWeeksTugReports.push(item.data())
				})

				dispatch({ type: 'GET_THIS_WEEKS_TUG_REPORTS', payload: thisWeeksTugReports })
				dispatch({ type: 'TUG_LIST_LOADING', isLoading: false })
			})
			.catch((err) => {
				dispatch({ type: 'TUG_LIST_LOADING', isLoading: false })
				console.log(err)
			})
	}
}

export const getThisWeeksMovementReports = () => {
	return (dispatch) => {
		dispatch({ type: 'MOVEMENT_LIST_LOADING', isLoading: true })
		let thisWeeksMovementReports = []
		db
			.collection('package_movement')
			.orderBy('createdAt', 'desc')
			.limit(15)
			.get()
			.then((snap) => {
				snap.docs.map((item) => {
					thisWeeksMovementReports.push(item.data())
					console.log(thisWeeksMovementReports)
				})

				dispatch({ type: 'GET_THIS_WEEKS_MOVEMENT_REPORTS', payload: thisWeeksMovementReports })
				dispatch({ type: 'MOVEMENT_LIST_LOADING', isLoading: false })
			})
			.catch((err) => {
				dispatch({ type: 'MOVEMENT_LIST_LOADING', isLoading: false })
				console.log(err)
			})
	}
}
export const getThisWeeksTopsideReports = () => {
	return (dispatch) => {
		dispatch({ type: 'TOPSIDE_LIST_LOADING', isLoading: true })
		let thisWeeksTopsideReports = []
		db
			.collection('topside_uld_movement')
			.orderBy('createdAt', 'desc')
			.limit(15)
			.get()
			.then((snap) => {
				snap.docs.map((item) => {
					thisWeeksTopsideReports.push(item.data())
				})
				dispatch({ type: 'GET_THIS_WEEKS_TOPSIDE_REPORTS', payload: thisWeeksTopsideReports })
				dispatch({ type: 'TOPSIDE_LIST_LOADING', isLoading: false })
			})
			.catch((err) => {
				dispatch({ type: 'TOPSIDE_LIST_LOADING', isLoading: false })
				console.log(err)
			})
	}
}

export const createWeeklyReports = (tug, movement, topside, date) => {
	return async (dispatch) => {
		const getThisWeeksValue = moment(`${date}`).format('w')
		let year = moment(date).format('YYYY')
		let topside_holdSafeAnswer = []
		let topside_holdUnSafeAnswer = []
		let topside_docDataArray = []
		let topside_formIds = []
		let topside_entire1Safe = []
		let topside_entire2Safe = []
		let topside_entire3Safe = []
		let topside_entire4Safe = []
		let topside_entire5Safe = []
		let topside_entire6Safe = []
		let topside_entire1UnSafe = []
		let topside_entire2UnSafe = []
		let topside_entire3UnSafe = []
		let topside_entire4UnSafe = []
		let topside_entire5UnSafe = []
		let topside_entire6UnSafe = []
		let tug_holdSafeAnswer = []
		let tug_holdUnSafeAnswer = []
		let tug_docDataArray = []
		let tug_formIds = []
		let tug_entire1Safe = []
		let tug_entire2Safe = []
		let tug_entire3Safe = []
		let tug_entire4Safe = []
		let tug_entire5Safe = []
		let tug_entire6Safe = []
		let tug_entire1UnSafe = []
		let tug_entire2UnSafe = []
		let tug_entire3UnSafe = []
		let tug_entire4UnSafe = []
		let tug_entire5UnSafe = []
		let tug_entire6UnSafe = []
		let movement_holdSafeAnswer = []
		let movement_holdUnSafeAnswer = []
		let movement_docDataArray = []
		let movement_formIds = []
		let movement_entire1Safe = []
		let movement_entire2Safe = []
		let movement_entire3Safe = []
		let movement_entire4Safe = []
		let movement_entire5Safe = []
		let movement_entire6Safe = []
		let movement_entire1UnSafe = []
		let movement_entire2UnSafe = []
		let movement_entire3UnSafe = []
		let movement_entire4UnSafe = []
		let movement_entire5UnSafe = []
		let movement_entire6UnSafe = []

		await db
			.collection(tug)
			.where('weekNumberInYear', '==', getThisWeeksValue)
			.get()
			.then((snap) => {
				dispatch({ type: 'GENERATING_REPORT', payload: 'Generating Report, plaese wait.' })
				snap.forEach((doc) => {
					tug_docDataArray.push(doc.data())
					console.log('call db returned data', tug_docDataArray)
					return tug_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))

		tug_docDataArray.map((n, idx) => {
			topside_formIds.push(n.formId)

			tug_entire1Safe.push(n.answer1Safe)
			tug_entire2Safe.push(n.answer2Safe)
			tug_entire3Safe.push(n.answer3Safe)
			tug_entire4Safe.push(n.answer4Safe)
			tug_entire5Safe.push(n.answer5Safe)
			tug_entire6Safe.push(n.answer6Safe)
			tug_entire1UnSafe.push(n.answer1UnSafe)
			tug_entire2UnSafe.push(n.answer2UnSafe)
			tug_entire3UnSafe.push(n.answer3UnSafe)
			tug_entire4UnSafe.push(n.answer4UnSafe)
			tug_entire5UnSafe.push(n.answer5UnSafe)
			tug_entire6UnSafe.push(n.answer6UnSafe)
		})

		await db
			.collection(topside)
			.where('weekNumberInYear', '==', getThisWeeksValue)
			.get()
			.then((snap) => {
				//if doc exists condition
				snap.forEach((doc) => {
					topside_docDataArray.push(doc.data())
					console.log('call db returned data', topside_docDataArray)
					return topside_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))

		topside_docDataArray.map((n, idx) => {
			topside_formIds.push(n.formId)

			topside_entire1Safe.push(n.answer1Safe)
			topside_entire2Safe.push(n.answer2Safe)
			topside_entire3Safe.push(n.answer3Safe)
			topside_entire4Safe.push(n.answer4Safe)
			topside_entire5Safe.push(n.answer5Safe)
			topside_entire6Safe.push(n.answer6Safe)
			topside_entire1UnSafe.push(n.answer1UnSafe)
			topside_entire2UnSafe.push(n.answer2UnSafe)
			topside_entire3UnSafe.push(n.answer3UnSafe)
			topside_entire4UnSafe.push(n.answer4UnSafe)
			topside_entire5UnSafe.push(n.answer5UnSafe)
			topside_entire6UnSafe.push(n.answer6UnSafe)
		})

		await db
			.collection(movement)
			.where('weekNumberInYear', '==', getThisWeeksValue)
			.get()
			.then((snap) => {
				//if doc exists condition
				snap.forEach((doc) => {
					movement_docDataArray.push(doc.data())
					console.log('call db returned data', movement_docDataArray)
					return movement_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))

		movement_docDataArray.map((n, idx) => {
			movement_formIds.push(n.formId)

			movement_entire1Safe.push(n.answer1Safe)
			movement_entire2Safe.push(n.answer2Safe)
			movement_entire3Safe.push(n.answer3Safe)
			movement_entire4Safe.push(n.answer4Safe)
			movement_entire5Safe.push(n.answer5Safe)
			movement_entire6Safe.push(n.answer6Safe)
			movement_entire1UnSafe.push(n.answer1UnSafe)
			movement_entire2UnSafe.push(n.answer2UnSafe)
			movement_entire3UnSafe.push(n.answer3UnSafe)
			movement_entire4UnSafe.push(n.answer4UnSafe)
			movement_entire5UnSafe.push(n.answer5UnSafe)
			movement_entire6UnSafe.push(n.answer6UnSafe)
		})

		let initialValue = 0

		let reducer = (accumulator, item) => {
			return accumulator + item
		}

		let movement_sum1Safe = movement_entire1Safe.reduce(reducer, initialValue)
		let movement_sum2Safe = movement_entire2Safe.reduce(reducer, initialValue)
		let movement_sum3Safe = movement_entire3Safe.reduce(reducer, initialValue)
		let movement_sum4Safe = movement_entire4Safe.reduce(reducer, initialValue)
		let movement_sum5Safe = movement_entire5Safe.reduce(reducer, initialValue)
		let movement_sum6Safe = movement_entire6Safe.reduce(reducer, initialValue)
		let movement_sum1UnSafe = movement_entire1UnSafe.reduce(reducer, initialValue)
		let movement_sum2UnSafe = movement_entire2UnSafe.reduce(reducer, initialValue)
		let movement_sum3UnSafe = movement_entire3UnSafe.reduce(reducer, initialValue)
		let movement_sum4UnSafe = movement_entire4UnSafe.reduce(reducer, initialValue)
		let movement_sum5UnSafe = movement_entire5UnSafe.reduce(reducer, initialValue)
		let movement_sum6UnSafe = movement_entire6UnSafe.reduce(reducer, initialValue)
		let tug_sum1Safe = tug_entire1Safe.reduce(reducer, initialValue)
		let tug_sum2Safe = tug_entire2Safe.reduce(reducer, initialValue)
		let tug_sum3Safe = tug_entire3Safe.reduce(reducer, initialValue)
		let tug_sum4Safe = tug_entire4Safe.reduce(reducer, initialValue)
		let tug_sum5Safe = tug_entire5Safe.reduce(reducer, initialValue)
		let tug_sum6Safe = tug_entire6Safe.reduce(reducer, initialValue)
		let tug_sum1UnSafe = tug_entire1UnSafe.reduce(reducer, initialValue)
		let tug_sum2UnSafe = tug_entire2UnSafe.reduce(reducer, initialValue)
		let tug_sum3UnSafe = tug_entire3UnSafe.reduce(reducer, initialValue)
		let tug_sum4UnSafe = tug_entire4UnSafe.reduce(reducer, initialValue)
		let tug_sum5UnSafe = tug_entire5UnSafe.reduce(reducer, initialValue)
		let tug_sum6UnSafe = tug_entire6UnSafe.reduce(reducer, initialValue)
		let topside_sum1Safe = topside_entire1Safe.reduce(reducer, initialValue)
		let topside_sum2Safe = topside_entire2Safe.reduce(reducer, initialValue)
		let topside_sum3Safe = topside_entire3Safe.reduce(reducer, initialValue)
		let topside_sum4Safe = topside_entire4Safe.reduce(reducer, initialValue)
		let topside_sum5Safe = topside_entire5Safe.reduce(reducer, initialValue)
		let topside_sum6Safe = topside_entire6Safe.reduce(reducer, initialValue)
		let topside_sum1UnSafe = topside_entire1UnSafe.reduce(reducer, initialValue)
		let topside_sum2UnSafe = topside_entire2UnSafe.reduce(reducer, initialValue)
		let topside_sum3UnSafe = topside_entire3UnSafe.reduce(reducer, initialValue)
		let topside_sum4UnSafe = topside_entire4UnSafe.reduce(reducer, initialValue)
		let topside_sum5UnSafe = topside_entire5UnSafe.reduce(reducer, initialValue)
		let topside_sum6UnSafe = topside_entire6UnSafe.reduce(reducer, initialValue)

		movement_holdSafeAnswer = [ movement_sum1Safe, movement_sum2Safe, movement_sum3Safe, movement_sum4Safe, movement_sum5Safe, movement_sum6Safe ]
		console.log('hold answer array', movement_holdSafeAnswer)

		movement_holdUnSafeAnswer = [ movement_sum1UnSafe, movement_sum2UnSafe, movement_sum3UnSafe, movement_sum4UnSafe, movement_sum5UnSafe, movement_sum6UnSafe ]
		console.log('hold answer array', movement_holdUnSafeAnswer)

		tug_holdSafeAnswer = [ tug_sum1Safe, tug_sum2Safe, tug_sum3Safe, tug_sum4Safe, tug_sum5Safe, tug_sum6Safe ]
		console.log('hold answer array', tug_holdSafeAnswer)

		tug_holdUnSafeAnswer = [ tug_sum1UnSafe, tug_sum2UnSafe, tug_sum3UnSafe, tug_sum4UnSafe, tug_sum5UnSafe, tug_sum6UnSafe ]
		console.log('hold answer array', tug_holdUnSafeAnswer)

		topside_holdSafeAnswer = [ topside_sum1Safe, topside_sum2Safe, topside_sum3Safe, topside_sum4Safe, topside_sum5Safe, topside_sum6Safe ]
		console.log('hold answer array', tug_holdSafeAnswer)

		topside_holdUnSafeAnswer = [ topside_sum1UnSafe, topside_sum2UnSafe, topside_sum3UnSafe, topside_sum4UnSafe, topside_sum5UnSafe, topside_sum6UnSafe ]
		console.log('hold answer array', tug_holdUnSafeAnswer)

		let movement_SEq1 = Math.round(movement_sum1Safe / (movement_sum1Safe + movement_sum1UnSafe) * 100)
		let movement_SEq2 = Math.round(movement_sum2Safe / (movement_sum2Safe + movement_sum2UnSafe) * 100)
		let movement_SEq3 = Math.round(movement_sum3Safe / (movement_sum3Safe + movement_sum3UnSafe) * 100)
		let movement_SEq4 = Math.round(movement_sum4Safe / (movement_sum4Safe + movement_sum4UnSafe) * 100)
		let movement_SEq5 = Math.round(movement_sum5Safe / (movement_sum5Safe + movement_sum5UnSafe) * 100)
		let movement_SEq6 = Math.round(movement_sum6Safe / (movement_sum6Safe + movement_sum6UnSafe) * 100)
		let tug_SEq1 = Math.round(tug_sum1Safe / (tug_sum1Safe + tug_sum1UnSafe) * 100)
		let tug_SEq2 = Math.round(tug_sum2Safe / (tug_sum2Safe + tug_sum2UnSafe) * 100)
		let tug_SEq3 = Math.round(tug_sum3Safe / (tug_sum3Safe + tug_sum3UnSafe) * 100)
		let tug_SEq4 = Math.round(tug_sum4Safe / (tug_sum4Safe + tug_sum4UnSafe) * 100)
		let tug_SEq5 = Math.round(tug_sum5Safe / (tug_sum5Safe + tug_sum5UnSafe) * 100)
		let tug_SEq6 = Math.round(tug_sum6Safe / (tug_sum6Safe + tug_sum6UnSafe) * 100)
		let topside_SEq1 = Math.round(topside_sum1Safe / (topside_sum1Safe + topside_sum1UnSafe) * 100)
		let topside_SEq2 = Math.round(topside_sum2Safe / (topside_sum2Safe + topside_sum2UnSafe) * 100)
		let topside_SEq3 = Math.round(topside_sum3Safe / (topside_sum3Safe + topside_sum3UnSafe) * 100)
		let topside_SEq4 = Math.round(topside_sum4Safe / (topside_sum4Safe + topside_sum4UnSafe) * 100)
		let topside_SEq5 = Math.round(topside_sum5Safe / (topside_sum5Safe + topside_sum5UnSafe) * 100)
		let topside_SEq6 = Math.round(topside_sum6Safe / (topside_sum6Safe + topside_sum6UnSafe) * 100)

		let movement_SEOverAllSafe = movement_holdSafeAnswer.reduce(reducer, initialValue)
		let movement_SEOverAllUnSafe = movement_holdUnSafeAnswer.reduce(reducer, initialValue)
		let movement_SERating = movement_SEOverAllSafe / (movement_SEOverAllSafe + movement_SEOverAllUnSafe) * 100
		let tug_SEOverAllSafe = tug_holdSafeAnswer.reduce(reducer, initialValue)
		let tug_SEOverAllUnSafe = tug_holdUnSafeAnswer.reduce(reducer, initialValue)
		let tug_SERating = tug_SEOverAllSafe / (tug_SEOverAllSafe + tug_SEOverAllUnSafe) * 100

		let topside_SEOverAllSafe = topside_holdSafeAnswer.reduce(reducer, initialValue)
		let topside_SEOverAllUnSafe = topside_holdUnSafeAnswer.reduce(reducer, initialValue)
		let topside_SERating = topside_SEOverAllSafe / (topside_SEOverAllSafe + topside_SEOverAllUnSafe) * 100

		await db
			.collection(`weekly_reports`)
			.doc(`week_${getThisWeeksValue}`)
			.set({
				date,
				weekNumber: getThisWeeksValue,
				topside_formIds,
				topside_sum1Safe,
				topside_sum2Safe,
				topside_sum3Safe,
				topside_sum4Safe,
				topside_sum5Safe,
				topside_sum6Safe,
				topside_sum1UnSafe,
				topside_sum2UnSafe,
				topside_sum3UnSafe,
				topside_sum4UnSafe,
				topside_sum5UnSafe,
				topside_sum6UnSafe,
				topside_SEq1,
				topside_SEq2,
				topside_SEq3,
				topside_SEq4,
				topside_SEq5,
				topside_SEq6,
				topside_SEOverAllSafe,
				topside_SEOverAllUnSafe,
				topside_SERating,
				year,
				tug_formIds,
				tug_weekNum: getThisWeeksValue,
				tug_sum1Safe,
				tug_sum2Safe,
				tug_sum3Safe,
				tug_sum4Safe,
				tug_sum5Safe,
				tug_sum6Safe,
				tug_sum1UnSafe,
				tug_sum2UnSafe,
				tug_sum3UnSafe,
				tug_sum4UnSafe,
				tug_sum5UnSafe,
				tug_sum6UnSafe,
				tug_SEq1,
				tug_SEq2,
				tug_SEq3,
				tug_SEq4,
				tug_SEq5,
				tug_SEq6,
				tug_SEOverAllSafe,
				tug_SEOverAllUnSafe,
				tug_SERating,

				movement_formIds,
				movement_weekNum: getThisWeeksValue,
				movement_sum1Safe,
				movement_sum2Safe,
				movement_sum3Safe,
				movement_sum4Safe,
				movement_sum5Safe,
				movement_sum6Safe,
				movement_sum1UnSafe,
				movement_sum2UnSafe,
				movement_sum3UnSafe,
				movement_sum4UnSafe,
				movement_sum5UnSafe,
				movement_sum6UnSafe,
				movement_SEq1,
				movement_SEq2,
				movement_SEq3,
				movement_SEq4,
				movement_SEq5,
				movement_SEq6,
				movement_SEOverAllSafe,
				movement_SEOverAllUnSafe,
				movement_SERating
			})
			.then(() => {
				dispatch({ type: 'GENERATING_REPORT', payload: 'Completed, Please check your Email' })
			})
			.catch((err) => {
				dispatch({ type: 'GENERATING_REPORT', payload: 'Error Generating Report, Please Resubmit.' })

				console.log(err, ' issue')
			})
	}
}

export const createMonthlyReportByDb = (tug, movement, topside, month, date) => {
	return async (dispatch) => {
		let thisMonthsValue = month
		let year = moment(date).format('YYYY')
		let topside_holdSafeAnswer = []
		let topside_holdUnSafeAnswer = []
		let topside_docDataArray = []
		let topside_formIds = []
		let topside_entire1Safe = []
		let topside_entire2Safe = []
		let topside_entire3Safe = []
		let topside_entire4Safe = []
		let topside_entire5Safe = []
		let topside_entire6Safe = []
		let topside_entire1UnSafe = []
		let topside_entire2UnSafe = []
		let topside_entire3UnSafe = []
		let topside_entire4UnSafe = []
		let topside_entire5UnSafe = []
		let topside_entire6UnSafe = []
		let tug_holdSafeAnswer = []
		let tug_holdUnSafeAnswer = []
		let tug_docDataArray = []
		let tug_formIds = []
		let tug_entire1Safe = []
		let tug_entire2Safe = []
		let tug_entire3Safe = []
		let tug_entire4Safe = []
		let tug_entire5Safe = []
		let tug_entire6Safe = []
		let tug_entire1UnSafe = []
		let tug_entire2UnSafe = []
		let tug_entire3UnSafe = []
		let tug_entire4UnSafe = []
		let tug_entire5UnSafe = []
		let tug_entire6UnSafe = []
		let movement_holdSafeAnswer = []
		let movement_holdUnSafeAnswer = []
		let movement_docDataArray = []
		let movement_formIds = []
		let movement_entire1Safe = []
		let movement_entire2Safe = []
		let movement_entire3Safe = []
		let movement_entire4Safe = []
		let movement_entire5Safe = []
		let movement_entire6Safe = []
		let movement_entire1UnSafe = []
		let movement_entire2UnSafe = []
		let movement_entire3UnSafe = []
		let movement_entire4UnSafe = []
		let movement_entire5UnSafe = []
		let movement_entire6UnSafe = []

		await db
			.collection(tug)
			.where('month', '==', thisMonthsValue)
			.get()
			.then((snap) => {
				dispatch({ type: 'GENERATING_REPORT', payload: 'Generating Report, plaese wait.' })

				//if doc exists condition
				snap.forEach((doc) => {
					tug_docDataArray.push(doc.data())
					console.log('call db returned data', tug_docDataArray)
					return tug_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))

		tug_docDataArray.map((n, idx) => {
			topside_formIds.push(n.formId)

			tug_entire1Safe.push(n.answer1Safe)
			tug_entire2Safe.push(n.answer2Safe)
			tug_entire3Safe.push(n.answer3Safe)
			tug_entire4Safe.push(n.answer4Safe)
			tug_entire5Safe.push(n.answer5Safe)
			tug_entire6Safe.push(n.answer6Safe)
			tug_entire1UnSafe.push(n.answer1UnSafe)
			tug_entire2UnSafe.push(n.answer2UnSafe)
			tug_entire3UnSafe.push(n.answer3UnSafe)
			tug_entire4UnSafe.push(n.answer4UnSafe)
			tug_entire5UnSafe.push(n.answer5UnSafe)
			tug_entire6UnSafe.push(n.answer6UnSafe)
		})

		await db
			.collection(topside)
			.where('month', '==', thisMonthsValue)
			.get()
			.then((snap) => {
				//if doc exists condition
				snap.forEach((doc) => {
					topside_docDataArray.push(doc.data())
					console.log('call db returned data', topside_docDataArray)
					return topside_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))

		topside_docDataArray.map((n, idx) => {
			topside_formIds.push(n.formId)

			topside_entire1Safe.push(n.answer1Safe)
			topside_entire2Safe.push(n.answer2Safe)
			topside_entire3Safe.push(n.answer3Safe)
			topside_entire4Safe.push(n.answer4Safe)
			topside_entire5Safe.push(n.answer5Safe)
			topside_entire6Safe.push(n.answer6Safe)
			topside_entire1UnSafe.push(n.answer1UnSafe)
			topside_entire2UnSafe.push(n.answer2UnSafe)
			topside_entire3UnSafe.push(n.answer3UnSafe)
			topside_entire4UnSafe.push(n.answer4UnSafe)
			topside_entire5UnSafe.push(n.answer5UnSafe)
			topside_entire6UnSafe.push(n.answer6UnSafe)
		})

		await db
			.collection(movement)
			.where('month', '==', thisMonthsValue)
			.get()
			.then((snap) => {
				//if doc exists condition
				snap.forEach((doc) => {
					movement_docDataArray.push(doc.data())
					console.log('call db returned data', movement_docDataArray)
					return movement_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))

		movement_docDataArray.map((n, idx) => {
			movement_formIds.push(n.formId)

			movement_entire1Safe.push(n.answer1Safe)
			movement_entire2Safe.push(n.answer2Safe)
			movement_entire3Safe.push(n.answer3Safe)
			movement_entire4Safe.push(n.answer4Safe)
			movement_entire5Safe.push(n.answer5Safe)
			movement_entire6Safe.push(n.answer6Safe)
			movement_entire1UnSafe.push(n.answer1UnSafe)
			movement_entire2UnSafe.push(n.answer2UnSafe)
			movement_entire3UnSafe.push(n.answer3UnSafe)
			movement_entire4UnSafe.push(n.answer4UnSafe)
			movement_entire5UnSafe.push(n.answer5UnSafe)
			movement_entire6UnSafe.push(n.answer6UnSafe)
		})

		let initialValue = 0

		let reducer = (accumulator, item) => {
			return accumulator + item
		}

		let movement_sum1Safe = movement_entire1Safe.reduce(reducer, initialValue)
		let movement_sum2Safe = movement_entire2Safe.reduce(reducer, initialValue)
		let movement_sum3Safe = movement_entire3Safe.reduce(reducer, initialValue)
		let movement_sum4Safe = movement_entire4Safe.reduce(reducer, initialValue)
		let movement_sum5Safe = movement_entire5Safe.reduce(reducer, initialValue)
		let movement_sum6Safe = movement_entire6Safe.reduce(reducer, initialValue)
		let movement_sum1UnSafe = movement_entire1UnSafe.reduce(reducer, initialValue)
		let movement_sum2UnSafe = movement_entire2UnSafe.reduce(reducer, initialValue)
		let movement_sum3UnSafe = movement_entire3UnSafe.reduce(reducer, initialValue)
		let movement_sum4UnSafe = movement_entire4UnSafe.reduce(reducer, initialValue)
		let movement_sum5UnSafe = movement_entire5UnSafe.reduce(reducer, initialValue)
		let movement_sum6UnSafe = movement_entire6UnSafe.reduce(reducer, initialValue)
		let tug_sum1Safe = tug_entire1Safe.reduce(reducer, initialValue)
		let tug_sum2Safe = tug_entire2Safe.reduce(reducer, initialValue)
		let tug_sum3Safe = tug_entire3Safe.reduce(reducer, initialValue)
		let tug_sum4Safe = tug_entire4Safe.reduce(reducer, initialValue)
		let tug_sum5Safe = tug_entire5Safe.reduce(reducer, initialValue)
		let tug_sum6Safe = tug_entire6Safe.reduce(reducer, initialValue)
		let tug_sum1UnSafe = tug_entire1UnSafe.reduce(reducer, initialValue)
		let tug_sum2UnSafe = tug_entire2UnSafe.reduce(reducer, initialValue)
		let tug_sum3UnSafe = tug_entire3UnSafe.reduce(reducer, initialValue)
		let tug_sum4UnSafe = tug_entire4UnSafe.reduce(reducer, initialValue)
		let tug_sum5UnSafe = tug_entire5UnSafe.reduce(reducer, initialValue)
		let tug_sum6UnSafe = tug_entire6UnSafe.reduce(reducer, initialValue)
		let topside_sum1Safe = topside_entire1Safe.reduce(reducer, initialValue)
		let topside_sum2Safe = topside_entire2Safe.reduce(reducer, initialValue)
		let topside_sum3Safe = topside_entire3Safe.reduce(reducer, initialValue)
		let topside_sum4Safe = topside_entire4Safe.reduce(reducer, initialValue)
		let topside_sum5Safe = topside_entire5Safe.reduce(reducer, initialValue)
		let topside_sum6Safe = topside_entire6Safe.reduce(reducer, initialValue)
		let topside_sum1UnSafe = topside_entire1UnSafe.reduce(reducer, initialValue)
		let topside_sum2UnSafe = topside_entire2UnSafe.reduce(reducer, initialValue)
		let topside_sum3UnSafe = topside_entire3UnSafe.reduce(reducer, initialValue)
		let topside_sum4UnSafe = topside_entire4UnSafe.reduce(reducer, initialValue)
		let topside_sum5UnSafe = topside_entire5UnSafe.reduce(reducer, initialValue)
		let topside_sum6UnSafe = topside_entire6UnSafe.reduce(reducer, initialValue)

		movement_holdSafeAnswer = [ movement_sum1Safe, movement_sum2Safe, movement_sum3Safe, movement_sum4Safe, movement_sum5Safe, movement_sum6Safe ]
		console.log('hold answer array', movement_holdSafeAnswer)

		movement_holdUnSafeAnswer = [ movement_sum1UnSafe, movement_sum2UnSafe, movement_sum3UnSafe, movement_sum4UnSafe, movement_sum5UnSafe, movement_sum6UnSafe ]
		console.log('hold answer array', movement_holdUnSafeAnswer)

		tug_holdSafeAnswer = [ tug_sum1Safe, tug_sum2Safe, tug_sum3Safe, tug_sum4Safe, tug_sum5Safe, tug_sum6Safe ]
		console.log('hold answer array', tug_holdSafeAnswer)

		tug_holdUnSafeAnswer = [ tug_sum1UnSafe, tug_sum2UnSafe, tug_sum3UnSafe, tug_sum4UnSafe, tug_sum5UnSafe, tug_sum6UnSafe ]
		console.log('hold answer array', tug_holdUnSafeAnswer)

		topside_holdSafeAnswer = [ topside_sum1Safe, topside_sum2Safe, topside_sum3Safe, topside_sum4Safe, topside_sum5Safe, topside_sum6Safe ]
		console.log('hold answer array', tug_holdSafeAnswer)

		topside_holdUnSafeAnswer = [ topside_sum1UnSafe, topside_sum2UnSafe, topside_sum3UnSafe, topside_sum4UnSafe, topside_sum5UnSafe, topside_sum6UnSafe ]
		console.log('hold answer array', tug_holdUnSafeAnswer)

		let movement_SEq1 = Math.round(movement_sum1Safe / (movement_sum1Safe + movement_sum1UnSafe) * 100)
		let movement_SEq2 = Math.round(movement_sum2Safe / (movement_sum2Safe + movement_sum2UnSafe) * 100)
		let movement_SEq3 = Math.round(movement_sum3Safe / (movement_sum3Safe + movement_sum3UnSafe) * 100)
		let movement_SEq4 = Math.round(movement_sum4Safe / (movement_sum4Safe + movement_sum4UnSafe) * 100)
		let movement_SEq5 = Math.round(movement_sum5Safe / (movement_sum5Safe + movement_sum5UnSafe) * 100)
		let movement_SEq6 = Math.round(movement_sum6Safe / (movement_sum6Safe + movement_sum6UnSafe) * 100)
		let tug_SEq1 = Math.round(tug_sum1Safe / (tug_sum1Safe + tug_sum1UnSafe) * 100)
		let tug_SEq2 = Math.round(tug_sum2Safe / (tug_sum2Safe + tug_sum2UnSafe) * 100)
		let tug_SEq3 = Math.round(tug_sum3Safe / (tug_sum3Safe + tug_sum3UnSafe) * 100)
		let tug_SEq4 = Math.round(tug_sum4Safe / (tug_sum4Safe + tug_sum4UnSafe) * 100)
		let tug_SEq5 = Math.round(tug_sum5Safe / (tug_sum5Safe + tug_sum5UnSafe) * 100)
		let tug_SEq6 = Math.round(tug_sum6Safe / (tug_sum6Safe + tug_sum6UnSafe) * 100)
		let topside_SEq1 = Math.round(topside_sum1Safe / (topside_sum1Safe + topside_sum1UnSafe) * 100)
		let topside_SEq2 = Math.round(topside_sum2Safe / (topside_sum2Safe + topside_sum2UnSafe) * 100)
		let topside_SEq3 = Math.round(topside_sum3Safe / (topside_sum3Safe + topside_sum3UnSafe) * 100)
		let topside_SEq4 = Math.round(topside_sum4Safe / (topside_sum4Safe + topside_sum4UnSafe) * 100)
		let topside_SEq5 = Math.round(topside_sum5Safe / (topside_sum5Safe + topside_sum5UnSafe) * 100)
		let topside_SEq6 = Math.round(topside_sum6Safe / (topside_sum6Safe + topside_sum6UnSafe) * 100)

		let movement_SEOverAllSafe = movement_holdSafeAnswer.reduce(reducer, initialValue)
		let movement_SEOverAllUnSafe = movement_holdUnSafeAnswer.reduce(reducer, initialValue)
		let movement_SERating = Math.round(movement_SEOverAllSafe / (movement_SEOverAllSafe + movement_SEOverAllUnSafe) * 100)

		let tug_SEOverAllSafe = tug_holdSafeAnswer.reduce(reducer, initialValue)
		let tug_SEOverAllUnSafe = tug_holdUnSafeAnswer.reduce(reducer, initialValue)
		let tug_SERating = Math.round(tug_SEOverAllSafe / (tug_SEOverAllSafe + tug_SEOverAllUnSafe) * 100)

		let topside_SEOverAllSafe = topside_holdSafeAnswer.reduce(reducer, initialValue)
		let topside_SEOverAllUnSafe = topside_holdUnSafeAnswer.reduce(reducer, initialValue)
		let topside_SERating = Math.round(topside_SEOverAllSafe / (topside_SEOverAllSafe + topside_SEOverAllUnSafe) * 100)

		let tugAuditCount = tug_docDataArray.length
		let movementAuditCount = movement_docDataArray.length
		let topSideAuditCount = topside_docDataArray.length

		let overallMonthlyRating = Math.round((topside_SERating + movement_SERating + tug_SERating) / 300 * 100)
		console.log('overall monthly value', overallMonthlyRating)

		let ref = db.collection(`monthly_reports`).doc(`month_${thisMonthsValue}`)

		ref.get().then((doc) => {
			if (doc.exists) {
				console.log('doc exists')

				return ref
					.update({
						overallMonthlyRating,
						tugAuditCount,
						movementAuditCount,
						topSideAuditCount,
						topside_formIds,
						topside_sum1Safe,
						topside_sum2Safe,
						topside_sum3Safe,
						topside_sum4Safe,
						topside_sum5Safe,
						topside_sum6Safe,
						topside_sum1UnSafe,
						topside_sum2UnSafe,
						topside_sum3UnSafe,
						topside_sum4UnSafe,
						topside_sum5UnSafe,
						topside_sum6UnSafe,
						topside_SEq1,
						topside_SEq2,
						topside_SEq3,
						topside_SEq4,
						topside_SEq5,
						topside_SEq6,
						topside_SEOverAllSafe,
						topside_SEOverAllUnSafe,
						topside_SERating,
						year,
						tug_formIds,
						monthValue: thisMonthsValue,
						tug_sum1Safe,
						tug_sum2Safe,
						tug_sum3Safe,
						tug_sum4Safe,
						tug_sum5Safe,
						tug_sum6Safe,
						tug_sum1UnSafe,
						tug_sum2UnSafe,
						tug_sum3UnSafe,
						tug_sum4UnSafe,
						tug_sum5UnSafe,
						tug_sum6UnSafe,
						tug_SEq1,
						tug_SEq2,
						tug_SEq3,
						tug_SEq4,
						tug_SEq5,
						tug_SEq6,
						tug_SEOverAllSafe,
						tug_SEOverAllUnSafe,
						tug_SERating,

						movement_formIds,
						movement_sum1Safe,
						movement_sum2Safe,
						movement_sum3Safe,
						movement_sum4Safe,
						movement_sum5Safe,
						movement_sum6Safe,
						movement_sum1UnSafe,
						movement_sum2UnSafe,
						movement_sum3UnSafe,
						movement_sum4UnSafe,
						movement_sum5UnSafe,
						movement_sum6UnSafe,
						movement_SEq1,
						movement_SEq2,
						movement_SEq3,
						movement_SEq4,
						movement_SEq5,
						movement_SEq6,
						movement_SEOverAllSafe,
						movement_SEOverAllUnSafe,
						movement_SERating,
						updated: new Date()
					})
					.then(() => {
						dispatch({ type: 'GENERATING_REPORT', payload: 'Completed, Please check your Email' })
						setTimeout(() => {
							dispatch({ type: 'GENERATING_REPORT', payload: '' })
						}, 2000)
					})
					.catch((err) => {
						dispatch({ type: 'GENERATING_REPORT', payload: 'Possible Error, Please check your Email' })

						console.log(err, ' issue')
					})
			} else {
				console.log('doc does not exist')
				return ref
					.set({
						overallMonthlyRating,
						tugAuditCount,
						movementAuditCount,
						topSideAuditCount,
						topside_formIds,
						topside_sum1Safe,
						topside_sum2Safe,
						topside_sum3Safe,
						topside_sum4Safe,
						topside_sum5Safe,
						topside_sum6Safe,
						topside_sum1UnSafe,
						topside_sum2UnSafe,
						topside_sum3UnSafe,
						topside_sum4UnSafe,
						topside_sum5UnSafe,
						topside_sum6UnSafe,
						topside_SEq1,
						topside_SEq2,
						topside_SEq3,
						topside_SEq4,
						topside_SEq5,
						topside_SEq6,
						topside_SEOverAllSafe,
						topside_SEOverAllUnSafe,
						topside_SERating,

						tug_formIds,
						monthValue: thisMonthsValue,
						tug_sum1Safe,
						tug_sum2Safe,
						tug_sum3Safe,
						tug_sum4Safe,
						tug_sum5Safe,
						tug_sum6Safe,
						tug_sum1UnSafe,
						tug_sum2UnSafe,
						tug_sum3UnSafe,
						tug_sum4UnSafe,
						tug_sum5UnSafe,
						tug_sum6UnSafe,
						tug_SEq1,
						tug_SEq2,
						tug_SEq3,
						tug_SEq4,
						tug_SEq5,
						tug_SEq6,
						tug_SEOverAllSafe,
						tug_SEOverAllUnSafe,
						tug_SERating,

						movement_formIds,
						movement_sum1Safe,
						movement_sum2Safe,
						movement_sum3Safe,
						movement_sum4Safe,
						movement_sum5Safe,
						movement_sum6Safe,
						movement_sum1UnSafe,
						movement_sum2UnSafe,
						movement_sum3UnSafe,
						movement_sum4UnSafe,
						movement_sum5UnSafe,
						movement_sum6UnSafe,
						movement_SEq1,
						movement_SEq2,
						movement_SEq3,
						movement_SEq4,
						movement_SEq5,
						movement_SEq6,
						movement_SEOverAllSafe,
						movement_SEOverAllUnSafe,
						movement_SERating
					})
					.then(() => {
						dispatch({ type: 'GENERATING_REPORT', payload: 'Completed, Please check your Email' })
						setTimeout(() => {
							dispatch({ type: 'GENERATING_REPORT', payload: '' })
						}, 2000)
					})
					.catch((err) => {
						dispatch({ type: 'GENERATING_REPORT', payload: 'Possible Error, Please check your Email' })

						console.log(err, ' issue')
					})
			}
		})
	}
}

// export const getSpecificReport = (formId, collection) => {
// 	return async (dispatch) => {

// 		await db
// 		.collection(`${collection}`)
// 		.doc(`${formId}`)
// 		.get()
// 		.then((doc) => {
// 			dispatch({ type: 'LOADING', isLoading: true })
// 				console.log('specific tug report info requested => ', doc.data())
// 				let hold = doc.data()
// 				dispatch({ type: 'SPECIFIC_REPORT', payload: hold })
// 			})
// 			.then(() => {
// 				dispatch({ type: 'LOADING', isLoading: false })
// 			})
// 	}
// }

//monthly			DO NOT TOUCH FOR MONTHLY SCOREBOARD
export const pushScoreboardToRedux = (collection) => {
	return (dispatch) => {
		let today = new Date()
		let thisMonth = today.getMonth() + 1
		let thisYear = today.getFullYear
		let holdSafeAnswer = []
		let holdUnSafeAnswer = []
		let docDataArray = []
		let entire1Safe = []
		let entire2Safe = []
		let entire3Safe = []
		let entire4Safe = []
		let entire5Safe = []
		let entire6Safe = []
		let entire1UnSafe = []
		let entire2UnSafe = []
		let entire3UnSafe = []
		let entire4UnSafe = []
		let entire5UnSafe = []
		let entire6UnSafe = []

		db
			.collection(collection)
			.where('month', '==', thisMonth)
			.get()
			.then((snap) => {
				console.log(snap)
				snap.forEach((doc) => {
					docDataArray.push(doc.data())
					console.log('call db returned data', docDataArray)
				})

				docDataArray.map((n, idx) => {
					let form = n.formCollection.toUpperCase()
					//this array will hold all subsequent values
					// let moddedAnswerKeyFormat = `answer${idx}UnSafe`
					// holdAnswer.push(n[moddedAnswerKeyFormat])
					// console.log('holdAnswer ', holdAnswer);

					entire1Safe.push(n.answer1Safe)
					entire2Safe.push(n.answer2Safe)
					entire3Safe.push(n.answer3Safe)
					entire4Safe.push(n.answer4Safe)
					entire5Safe.push(n.answer5Safe)
					entire6Safe.push(n.answer6Safe)
					entire1UnSafe.push(n.answer1UnSafe)
					entire2UnSafe.push(n.answer2UnSafe)
					entire3UnSafe.push(n.answer3UnSafe)
					entire4UnSafe.push(n.answer4UnSafe)
					entire5UnSafe.push(n.answer5UnSafe)
					entire6UnSafe.push(n.answer6UnSafe)

					const initialValue = 0

					const reducer = (accumulator, item) => {
						return accumulator + item
					}

					const sum1Safe = entire1Safe.reduce(reducer, initialValue)
					const sum2Safe = entire2Safe.reduce(reducer, initialValue)
					const sum3Safe = entire3Safe.reduce(reducer, initialValue)
					const sum4Safe = entire4Safe.reduce(reducer, initialValue)
					const sum5Safe = entire5Safe.reduce(reducer, initialValue)
					const sum6Safe = entire6Safe.reduce(reducer, initialValue)
					const sum1UnSafe = entire1UnSafe.reduce(reducer, initialValue)
					const sum2UnSafe = entire2UnSafe.reduce(reducer, initialValue)
					const sum3UnSafe = entire3UnSafe.reduce(reducer, initialValue)
					const sum4UnSafe = entire4UnSafe.reduce(reducer, initialValue)
					const sum5UnSafe = entire5UnSafe.reduce(reducer, initialValue)
					const sum6UnSafe = entire6UnSafe.reduce(reducer, initialValue)

					holdSafeAnswer = [ sum1Safe, sum2Safe, sum3Safe, sum4Safe, sum5Safe, sum6Safe ]
					console.log('hold answer array', holdSafeAnswer)

					holdSafeAnswer.map((n, idx) => {
						if (n === 0) {
							console.log(' unsafe reduced => ', n)
							dispatch({ type: `WEEKLY_SAFE_${form}_A${idx + 1}_VALUES`, payload: '0' })
						} else {
							console.log(' unsafe reduced => ', n)
							dispatch({ type: `WEEKLY_SAFE_${form}_A${idx + 1}_VALUES`, payload: n })
						}
					})

					holdUnSafeAnswer = [ sum1UnSafe, sum2UnSafe, sum3UnSafe, sum4UnSafe, sum5UnSafe, sum6UnSafe ]
					console.log('hold answer array', holdUnSafeAnswer)

					holdUnSafeAnswer.map((n, idx) => {
						if (n === 0) {
							console.log(' unsafe reduced => ', n)
							dispatch({ type: `WEEKLY_UNSAFE_${form}_A${idx + 1}_VALUES`, payload: '0' })
						} else {
							console.log(' unsafe reduced => ', n)
							dispatch({ type: `WEEKLY_UNSAFE_${form}_A${idx + 1}_VALUES`, payload: n })
						}
					})

					const findPerQuestionEfficiency = (idx, safe, unsafe) => {
						let s = safe
						let su = safe + unsafe
						let value = (s /= su)
						let calc = value * 100
						let percent = Math.floor(calc)
						console.log('safe', percent, '%', `SCOREBOARD_Q${idx}_${form}_SE`)

						return dispatch({ type: `SCOREBOARD_Q${idx}_${form}_SE`, payload: percent })
					}

					findPerQuestionEfficiency(1, sum1Safe, sum1UnSafe)
					findPerQuestionEfficiency(2, sum2Safe, sum2UnSafe)
					findPerQuestionEfficiency(3, sum3Safe, sum3UnSafe)
					findPerQuestionEfficiency(4, sum4Safe, sum4UnSafe)
					findPerQuestionEfficiency(5, sum5Safe, sum5UnSafe)
					findPerQuestionEfficiency(6, sum6Safe, sum6UnSafe)
				})
			})
			.catch((err) => console.log(err))
	}
}
