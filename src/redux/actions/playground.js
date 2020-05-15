


export const getWeeksReports = (collection, date) => {
	return async (dispatch) => {
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
		let topside_storedValues = []
		const getThisWeeksValue = moment(`${date}`).format('w')
		console.log('date passed in to action generator', date)
		console.log('this is the sekected calander dates week num ', getThisWeeksValue)

		await db
			.collection(topside_collection)
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


			console.log('');


		topside_docDataArray.map((n, idx) => {
			formIds.push( n.formId)
			
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

		let initialValue = 0

		let reducer = (accumulator, item) => {
			return accumulator + item
		}

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

		topside_holdSafeAnswer = [ topside_sum1Safe, topside_sum2Safe, topside_sum3Safe, topside_sum4Safe, topside_sum5Safe, topside_sum6Safe ]
		console.log('hold answer array', holdSafeAnswer)

		topside_holdUnSafeAnswer = [ topside_sum1UnSafe, topside_sum2UnSafe, topside_sum3UnSafe, topside_sum4UnSafe, topside_sum5UnSafe, topside_sum6UnSafe ]
		console.log('hold answer array', holdUnSafeAnswer)

		let SEq1 = Math.round(topside_sum1Safe / (topside_sum1Safe + topside_sum1UnSafe) * 100)
		let SEq2 = Math.round(topside_sum2Safe / (topside_sum2Safe + topside_sum2UnSafe) * 100)
		let SEq3 = Math.round(topside_sum3Safe / (topside_sum3Safe + topside_sum3UnSafe) * 100)
		let SEq4 = Math.round(topside_sum4Safe / (topside_sum4Safe + topside_sum4UnSafe) * 100)
		let SEq5 = Math.round(topside_sum5Safe / (topside_sum5Safe + topside_sum5UnSafe) * 100)
		let SEq6 = Math.round(topside_sum6Safe / (topside_sum6Safe + topside_sum6UnSafe) * 100)

		let topside_SEOverAllSafe = topside_holdSafeAnswer.reduce(reducer, initialValue)
		let topside_SEOverAllUnSafe = topside_holdUnSafeAnswer.reduce(reducer, initialValue)
		let topside_SERating = topside_SEOverAllSafe / (topside_SEOverAllSafe + topside_SEOverAllUnSafe) * 100



		await db.collection(`weekly_reports`).doc(`${collection}_week_${getThisWeeksValue}`).set({
				topside_collection,
				topside_date,
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
				topside_SERating
			})

		.catch((err) => console.log(err, ' issue'))
	}
}






export const getWeeksReports = (collection, date) => {
	return async (dispatch) => {
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
		let tug_storedValues = []
	//	const getThisWeeksValue = moment(`${date}`).format('w')
	//	console.log('date passed in to action generator', date)
	//	console.log('this is the sekected calander dates week num ', getThisWeeksValue)



    //CHANGE THIS
		await db
			.collection(collection)
			.where('weekNumberInYear', '==', getThisWeeksValue)
			.get()
			.then((snap) => {
				//if doc exists condition
				snap.forEach((doc) => {
				
					tug_docDataArray.push(doc.data())
					console.log('call db returned data', docDataArray)
					return tug_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))




		tug_docDataArray.map((n, idx) => {
			formIds.push( n.formId)
			
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

		let initialValue = 0

		let reducer = (accumulator, item) => {
			return accumulator + item
		}

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

		tug_holdSafeAnswer = [ tug_sum1Safe, tug_sum2Safe, tug_sum3Safe, tug_sum4Safe, tug_sum5Safe, tug_sum6Safe ]
		console.log('hold answer array', holdSafeAnswer)

		tug_holdUnSafeAnswer = [ tug_sum1UnSafe, tug_sum2UnSafe, tug_sum3UnSafe, tug_sum4UnSafe, tug_sum5UnSafe, tug_sum6UnSafe ]
		console.log('hold answer array', holdUnSafeAnswer)

		let tug_SEq1 = Math.round(tug_sum1Safe / (tug_sum1Safe + tug_sum1UnSafe) * 100)
		let tug_SEq2 = Math.round(tug_sum2Safe / (tug_sum2Safe + tug_sum2UnSafe) * 100)
		let tug_SEq3 = Math.round(tug_sum3Safe / (tug_sum3Safe + tug_sum3UnSafe) * 100)
		let tug_SEq4 = Math.round(tug_sum4Safe / (tug_sum4Safe + tug_sum4UnSafe) * 100)
		let tug_SEq5 = Math.round(tug_sum5Safe / (tug_sum5Safe + tug_sum5UnSafe) * 100)
		let tug_SEq6 = Math.round(tug_sum6Safe / (tug_sum6Safe + tug_sum6UnSafe) * 100)

		let tug_SEOverAllSafe = tug_holdSafeAnswer.reduce(reducer, initialValue)
		let tug_SEOverAllUnSafe = tug_holdUnSafeAnswer.reduce(reducer, initialValue)
		let tug_SERating = tug_SEOverAllSafe / (tug_SEOverAllSafe + tug_SEOverAllUnSafe) * 100



		await db.collection(`weekly_reports`).doc(`${collection}_week_${getThisWeeksValue}`).set({
				tug_collection,
				tug_date,
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
				tug_SERating
			})

		.catch((err) => console.log(err, ' issue'))
	}
}



const getWeeksReports = (collection, date) => {
	return async (dispatch) => {
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
		let movement_storedValues = []
	//	const getThisWeeksValue = moment(`${date}`).format('w')
	//	console.log('date passed in to action generator', date)
	//	console.log('this is the sekected calander dates week num ', getThisWeeksValue)



    //CHANGE THIS
		await db
			.collection(collection)
			.where('weekNumberInYear', '==', getThisWeeksValue)
			.get()
			.then((snap) => {
				//if doc exists condition
				snap.forEach((doc) => {
				
					movement_docDataArray.push(doc.data())
					console.log('call db returned data', docDataArray)
					return movement_docDataArray
				})
			})
			.catch((err) => console.log(err, 'error in getting date'))




		movement_docDataArray.map((n, idx) => {
			formIds.push( n.formId)
			
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

		movement_holdSafeAnswer = [ movement_sum1Safe, movement_sum2Safe, movement_sum3Safe, movement_sum4Safe, movement_sum5Safe, movement_sum6Safe ]
		console.log('hold answer array', holdSafeAnswer)

		movement_holdUnSafeAnswer = [ movement_sum1UnSafe, movement_sum2UnSafe, movement_sum3UnSafe, movement_sum4UnSafe, movement_sum5UnSafe, movement_sum6UnSafe ]
		console.log('hold answer array', holdUnSafeAnswer)

		let movement_SEq1 = Math.round(movement_sum1Safe / (movement_sum1Safe + movement_sum1UnSafe) * 100)
		let movement_SEq2 = Math.round(movement_sum2Safe / (movement_sum2Safe + movement_sum2UnSafe) * 100)
		let movement_SEq3 = Math.round(movement_sum3Safe / (movement_sum3Safe + movement_sum3UnSafe) * 100)
		let movement_SEq4 = Math.round(movement_sum4Safe / (movement_sum4Safe + movement_sum4UnSafe) * 100)
		let movement_SEq5 = Math.round(movement_sum5Safe / (movement_sum5Safe + movement_sum5UnSafe) * 100)
		let movement_SEq6 = Math.round(movement_sum6Safe / (movement_sum6Safe + movement_sum6UnSafe) * 100)

		let movement_SEOverAllSafe = movement_holdSafeAnswer.reduce(reducer, initialValue)
		let movement_SEOverAllUnSafe = movement_holdUnSafeAnswer.reduce(reducer, initialValue)
		let movement_SERating = movement_SEOverAllSafe / (movement_SEOverAllSafe + movement_SEOverAllUnSafe) * 100



		await db.collection(`weekly_reports`).doc(`${collection}_week_${getThisWeeksValue}`).set({
				movement_collection,
				movement_date,
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

		.catch((err) => console.log(err, ' issue'))
	}
}