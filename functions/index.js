// const functions = require('firebase-functions')
// const admin = require('firebase-admin')

// admin.initializeApp()

// const sgMail = require('@sendgrid/mail')
// //const json2csv = require('json2csv').parse

// exports.tugSubmission = functions.firestore.document(`tug_audit/{tug_audit}`).onUpdate(async (change) => {
// 	const newValues = change.after.data()

// 	sgMail.setApiKey('API_KEY')
// 	let msg = {
// 		to: 'someEmail@gmail.com',
// 		from: 'someEmail@worldportups.com',
// 		templateId: 'd-996c2cdd91d54b1493c560b72d2a6332',
// 		html: '<strong>curtesy of Matt Wellman</strong>',
// 		dynamic_template_data: {
// 			formId: newValues.formId,
// 			efficiency: newValues.efficiency,
// 			date: newValues.date,
// 			label: newValues.formTitle,
// 			Observer_Name: newValues.Observer_Name,
// 			userId: newValues.userId,
// 			answer1Safe: newValues.answer1Safe,
// 			answer1UnSafe: newValues.answer1UnSafe,
// 			answer1FeedBack: newValues.answer1FeedBack,
// 			answer2Safe: newValues.answer2Safe,
// 			answer2UnSafe: newValues.answer2UnSafe,
// 			answer2FeedBack: newValues.answer2FeedBack,
// 			answer3Safe: newValues.answer3Safe,
// 			answer3UnSafe: newValues.answer3UnSafe,
// 			answer3FeedBack: newValues.answer3FeedBack,
// 			answer4Safe: newValues.answer4Safe,
// 			answer4UnSafe: newValues.answer4UnSafe,
// 			answer4FeedBack: newValues.answer4FeedBack,
// 			answer5Safe: newValues.answer5Safe,
// 			answer5UnSafe: newValues.answer5UnSafe,
// 			answer5FeedBack: newValues.answer5FeedBack,
// 			answer6Safe: newValues.answer6Safe,
// 			answer6UnSafe: newValues.answer6UnSafe,
// 			answer6FeedBack: newValues.answer6FeedBack,
// 			SV: newValues.Observer_Group,
// 			Employees_Observed: newValues.Employees_Observed,
// 			comments: newValues.comments,
// 			ramp: newValues.ramp,
// 			slic: newValues.SLIC,
// 			Form_Name: newValues.technicalFormName,
// 			question1: newValues.longQuestionOne,
// 			question2: newValues.longQuestionTwo,
// 			question3: newValues.longQuestionThree,
// 			question4: newValues.longQuestionFour,
// 			question5: newValues.longQuestionFive,
// 			question6: newValues.longQuestionSix,
// 			division: '2265-15-WINGS',
// 			Sender_Name: 'WorldPort Safety App',
// 			Sender_Address: '911 Grade Lane',
// 			Sender_City: 'Louisville,',
// 			Sender_State: 'Kentucky',
// 			Sender_Zip: '440509'
// 		}
// 	}
// 	await sgMail
// 		.send(msg)
// 		.then(() => {
// 			//Celebrate
// 			console.log('Email Sent!', msg)
// 		})
// 		.catch((error) => {
// 			//Log friendly error
// 			console.error(error.toString())
// 		})

// 	//return sgMail.send(msg)
// })

// exports.packageMovementSubmission = functions.firestore.document(`package_movement/{package_movement}`).onUpdate(async (change) => {
// 	const newValues = change.after.data()
// 	console.log('on create before: ', change.before.data(), 'on create After: ', change.after.data())
// 	console.log('newValues: ', newValues)

// 	sgMail.setApiKey('API_KEY')
// 	let msg = {
// 		to: 'someEmail@gmail.com',
// 		from: 'someEmail@worldportups.com',
// 		templateId: 'd-996c2cdd91d54b1493c560b72d2a6332',
// 		html: '<strong>curtesy of Matt Wellman</strong>',
// 		dynamic_template_data: {
// 			date: newValues.date,
// 			formId: newValues.formId,
// 			efficiency: newValues.efficiency,

// 			label: newValues.formTitle,
// 			Observer_Name: newValues.Observer_Name,
// 			userId: newValues.userId,
// 			answer1Safe: newValues.answer1Safe,
// 			answer1UnSafe: newValues.answer1UnSafe,
// 			answer1FeedBack: newValues.answer1FeedBack,
// 			answer2Safe: newValues.answer2Safe,
// 			answer2UnSafe: newValues.answer2UnSafe,
// 			answer2FeedBack: newValues.answer2FeedBack,
// 			answer3Safe: newValues.answer3Safe,
// 			answer3UnSafe: newValues.answer3UnSafe,
// 			answer3FeedBack: newValues.answer3FeedBack,
// 			answer4Safe: newValues.answer4Safe,
// 			answer4UnSafe: newValues.answer4UnSafe,
// 			answer4FeedBack: newValues.answer4FeedBack,
// 			answer5Safe: newValues.answer5Safe,
// 			answer5UnSafe: newValues.answer5UnSafe,
// 			answer5FeedBack: newValues.answer5FeedBack,
// 			answer6Safe: newValues.answer6Safe,
// 			answer6UnSafe: newValues.answer6UnSafe,
// 			answer6FeedBack: newValues.answer6FeedBack,
// 			SV: newValues.Observer_Group,
// 			Employees_Observed: newValues.Employees_Observed,
// 			comments: newValues.comments,
// 			Ramp: newValues.ramp,
// 			slic: newValues.SLIC,
// 			Form_Name: newValues.technicalFormName,
// 			question1: newValues.longQuestionOne,
// 			question2: newValues.longQuestionTwo,
// 			question3: newValues.longQuestionThree,
// 			question4: newValues.longQuestionFour,
// 			question5: newValues.longQuestionFive,
// 			question6: newValues.longQuestionSix,
// 			division: '2265-15-WINGS',
// 			Sender_Name: 'WorldPort Safety App',
// 			Sender_Address: '911 Grade Lane',
// 			Sender_City: 'Louisville,',
// 			Sender_State: 'Kentucky',
// 			Sender_Zip: '440509'
// 		}
// 	}
// 	await sgMail
// 		.send(msg)
// 		.then(() => {
// 			//Celebrate
// 			console.log('Email Sent!', msg)
// 		})
// 		.catch((error) => {
// 			//Log friendly error
// 			console.error(error.toString())
// 		})

// 	//return sgMail.send(msg)
// })

// exports.topsideSubmission = functions.firestore.document(`topside_uld_movement/{topside_uld_movement}`).onUpdate(async (change) => {
// 	const newValues = change.after.data()

// 	sgMail.setApiKey('API_KEY')
// 	let msg = {
// 		to: 'someEmail@gmail.com',
// 		from: 'someEmail@worldportups.com',
// 		templateId: 'd-996c2cdd91d54b1493c560b72d2a6332',
// 		html: '<strong>curtesy of Matt Wellman</strong>',
// 		dynamic_template_data: {
// 			date: newValues.date,
// 			formId: newValues.formId,
// 			efficiency: newValues.efficiency,

// 			label: newValues.formTitle,
// 			Observer_Name: newValues.Observer_Name,
// 			userId: newValues.userId,
// 			answer1Safe: newValues.answer1Safe,
// 			answer1UnSafe: newValues.answer1UnSafe,
// 			answer1FeedBack: newValues.answer1FeedBack,
// 			answer2Safe: newValues.answer2Safe,
// 			answer2UnSafe: newValues.answer2UnSafe,
// 			answer2FeedBack: newValues.answer2FeedBack,
// 			answer3Safe: newValues.answer3Safe,
// 			answer3UnSafe: newValues.answer3UnSafe,
// 			answer3FeedBack: newValues.answer3FeedBack,
// 			answer4Safe: newValues.answer4Safe,
// 			answer4UnSafe: newValues.answer4UnSafe,
// 			answer4FeedBack: newValues.answer4FeedBack,
// 			answer5Safe: newValues.answer5Safe,
// 			answer5UnSafe: newValues.answer5UnSafe,
// 			answer5FeedBack: newValues.answer5FeedBack,
// 			answer6Safe: newValues.answer6Safe,
// 			answer6UnSafe: newValues.answer6UnSafe,
// 			answer6FeedBack: newValues.answer6FeedBack,
// 			SV: newValues.Observer_Group,
// 			Employees_Observed: newValues.Employees_Observed,
// 			comments: newValues.comments,
// 			ramp: newValues.ramp,
// 			slic: newValues.SLIC,
// 			Form_Name: newValues.technicalFormName,
// 			question1: newValues.longQuestionOne,
// 			question2: newValues.longQuestionTwo,
// 			question3: newValues.longQuestionThree,
// 			question4: newValues.longQuestionFour,
// 			question5: newValues.longQuestionFive,
// 			question6: newValues.longQuestionSix,
// 			division: '2265-15-WINGS',
// 			Sender_Name: 'WorldPort Safety App',
// 			Sender_Address: '911 Grade Lane',
// 			Sender_City: 'Louisville,',
// 			Sender_State: 'Kentucky',
// 			Sender_Zip: '440509'
// 		}
// 	}
// 	await sgMail
// 		.send(msg)
// 		.then(() => {
// 			//Celebrate
// 			console.log('Email Sent!', msg)
// 		})
// 		.catch((error) => {
// 			//Log friendly error
// 			console.error(error.toString())
// 		})

// 	//	return sgMail.send(msg)
// })

// //axios call to https://us-central1-<project-id>.cloudfunctions.net/csvJasonReport

// // exports.csvJsonReport = functions.https.onRequest((request, response) => {
// // 	cors(request, response, () => {
// // 		// You should you how to prepare an object
// // 		// It could be anything that you like from your collections for example.

// // 		db
// // 			.collection('tug_audit')
// // 			.get()
// // 			.then((snap) =>
// // 				snap.doc.forEach((n) => {
// // 					let report = n.data()
// // 					return report
// // 				})
// // 			)
// // 			.then((report) => {
// // 				// Return JSON to screen
// // 				response.status(200).json(report)

// // 				// If you want to download a CSV file, you need to convert the object to CSV format
// // 				// Please read this for other usages of json2csv - https://github.com/zemirco/json2csv
// // 				const csv = json2csv(report)
// // 				response.setHeader('Content-disposition', 'attachment; filename=report.csv')
// // 				response.set('Content-Type', 'text/csv')
// // 				response.status(200).send(csv)
// // 			})
// // 	})
// // })

// exports.createMonthlyReport = functions.firestore.document(`monthly_reports/{monthlyReports}`).onCreate(async (snap, context) => {
// 	const newValues = snap.data()

// 	console.log('firing off month function for email', newValues)
// 	sgMail.setApiKey('API_KEY')
// 	let msg = {
// 		to: 'someEmail@gmail.com',
// 		from: 'someEmail@worldportups.com',
// 		templateId: 'd-c15cfc27d9d54e8d8344b984704d5c0f',
// 		html: '<strong>curtesy of Matt Wellman</strong>',
// 		dynamic_template_data: {
// 			tugAuditCount: newValues.tugAuditCount,
// 			movementAuditCount: newValues.movementAuditCount,
// 			topSideAuditCount: newValues.topSideAuditCount,
// 			topside_formIds: newValues.topside_formIds,
// 			topside_sum1Safe: newValues.topside_sum1Safe,
// 			topside_sum2Safe: newValues.topside_sum2Safe,
// 			topside_sum3Safe: newValues.topside_sum3Safe,
// 			topside_sum4Safe: newValues.topside_sum4Safe,
// 			topside_sum5Safe: newValues.topside_sum5Safe,
// 			topside_sum6Safe: newValues.topside_sum6Safe,
// 			topside_sum1UnSafe: newValues.topside_sum1UnSafe,
// 			topside_sum2UnSafe: newValues.topside_sum2UnSafe,
// 			topside_sum3UnSafe: newValues.topside_sum3UnSafe,
// 			topside_sum4UnSafe: newValues.topside_sum4UnSafe,
// 			topside_sum5UnSafe: newValues.topside_sum5UnSafe,
// 			topside_sum6UnSafe: newValues.topside_sum6UnSafe,
// 			topside_SEq1: newValues.topside_SEq1,
// 			topside_SEq2: newValues.topside_SEq2,
// 			topside_SEq3: newValues.topside_SEq3,
// 			topside_SEq4: newValues.topside_SEq4,
// 			topside_SEq5: newValues.topside_SEq5,
// 			topside_SEq6: newValues.topside_SEq6,
// 			topside_SEOverAllSafe: newValues.topside_SEOverAllSafe,
// 			topside_SEOverAllUnSafe: newValues.topside_SEOverAllUnSafe,
// 			topside_SERating: newValues.topside_SERating,

// 			tug_formIds: newValues.tug_formIds,
// 			monthValue: newValues.monthValue,
// 			tug_sum1Safe: newValues.tug_sum1Safe,
// 			tug_sum2Safe: newValues.tug_sum2Safe,
// 			tug_sum3Safe: newValues.tug_sum3Safe,
// 			tug_sum4Safe: newValues.tug_sum4Safe,
// 			tug_sum5Safe: newValues.tug_sum5Safe,
// 			tug_sum6Safe: newValues.tug_sum6Safe,
// 			tug_sum1UnSafe: newValues.tug_sum1UnSafe,
// 			tug_sum2UnSafe: newValues.tug_sum2UnSafe,
// 			tug_sum3UnSafe: newValues.tug_sum3UnSafe,
// 			tug_sum4UnSafe: newValues.tug_sum4UnSafe,
// 			tug_sum5UnSafe: newValues.tug_sum5UnSafe,
// 			tug_sum6UnSafe: newValues.tug_sum6UnSafe,
// 			tug_SEq1: newValues.tug_SEq1,
// 			tug_SEq2: newValues.tug_SEq2,
// 			tug_SEq3: newValues.tug_SEq3,
// 			tug_SEq4: newValues.tug_SEq4,
// 			tug_SEq5: newValues.tug_SEq5,
// 			tug_SEq6: newValues.tug_SEq6,
// 			tug_SEOverAllSafe: newValues.tug_SEOverAllSafe,
// 			tug_SEOverAllUnSafe: newValues.tug_SEOverAllUnSafe,
// 			tug_SERating: newValues.tug_SERating,

// 			movement_formIds: newValues.movement_formIds,
// 			movement_sum1Safe: newValues.movement_sum1Safe,
// 			movement_sum2Safe: newValues.movement_sum2Safe,
// 			movement_sum3Safe: newValues.movement_sum3Safe,
// 			movement_sum4Safe: newValues.movement_sum4Safe,
// 			movement_sum5Safe: newValues.movement_sum5Safe,
// 			movement_sum6Safe: newValues.movement_sum6Safe,
// 			movement_sum1UnSafe: newValues.movement_sum1UnSafe,
// 			movement_sum2UnSafe: newValues.movement_sum2UnSafe,
// 			movement_sum3UnSafe: newValues.movement_sum3UnSafe,
// 			movement_sum4UnSafe: newValues.movement_sum4UnSafe,
// 			movement_sum5UnSafe: newValues.movement_sum5UnSafe,
// 			movement_sum6UnSafe: newValues.movement_sum6UnSafe,
// 			movement_SEq1: newValues.movement_SEq1,
// 			movement_SEq2: newValues.movement_SEq2,
// 			movement_SEq3: newValues.movement_SEq3,
// 			movement_SEq4: newValues.movement_SEq4,
// 			movement_SEq5: newValues.movement_SEq5,
// 			movement_SEq6: newValues.movement_SEq6,
// 			movement_SEOverAllSafe: newValues.movement_SEOverAllSafe,
// 			movement_SEOverAllUnSafe: newValues.movement_SEOverAllUnSafe,
// 			movement_SERating: newValues.movement_SERating,

// 			overallMonthlyRating: newValues.overallMonthlyRating
// 		}
// 	}
// 	await sgMail
// 		.send(msg)
// 		.then(() => {
// 			//Celebrate
// 			console.log('Email Sent!', msg)
// 		})
// 		.catch((error) => {
// 			//Log friendly error
// 			console.error(error.toString())
// 		})

// 	//	return sgMail.send(msg)
// })

// exports.updateMonthlyReport = functions.firestore.document(`monthly_reports/{monthlyReports}`).onUpdate(async (change) => {
// 	const newValues = change.after.data()
// 	console.log('on create before: ', change.before.data(), 'on create After: ', change.after.data())

// 	console.log('firing off month function for email', newValues)

// 	sgMail.setApiKey(API_KEY)
// 	let msg = {
// 		to: 'someEmail@gmail.com',
// 		from: 'someEmail@worldportups.com',
// 		templateId: 'd-c15cfc27d9d54e8d8344b984704d5c0f',
// 		html: '<strong>curtesy of Matt Wellman</strong>',
// 		dynamic_template_data: {
// 			tugAuditCount: newValues.tugAuditCount,
// 			movementAuditCount: newValues.movementAuditCount,
// 			topSideAuditCount: newValues.topSideAuditCount,
// 			topside_formIds: newValues.topside_formIds,
// 			topside_sum1Safe: newValues.topside_sum1Safe,
// 			topside_sum2Safe: newValues.topside_sum2Safe,
// 			topside_sum3Safe: newValues.topside_sum3Safe,
// 			topside_sum4Safe: newValues.topside_sum4Safe,
// 			topside_sum5Safe: newValues.topside_sum5Safe,
// 			topside_sum6Safe: newValues.topside_sum6Safe,
// 			topside_sum1UnSafe: newValues.topside_sum1UnSafe,
// 			topside_sum2UnSafe: newValues.topside_sum2UnSafe,
// 			topside_sum3UnSafe: newValues.topside_sum3UnSafe,
// 			topside_sum4UnSafe: newValues.topside_sum4UnSafe,
// 			topside_sum5UnSafe: newValues.topside_sum5UnSafe,
// 			topside_sum6UnSafe: newValues.topside_sum6UnSafe,
// 			topside_SEq1: newValues.topside_SEq1,
// 			topside_SEq2: newValues.topside_SEq2,
// 			topside_SEq3: newValues.topside_SEq3,
// 			topside_SEq4: newValues.topside_SEq4,
// 			topside_SEq5: newValues.topside_SEq5,
// 			topside_SEq6: newValues.topside_SEq6,
// 			topside_SEOverAllSafe: newValues.topside_SEOverAllSafe,
// 			topside_SEOverAllUnSafe: newValues.topside_SEOverAllUnSafe,
// 			topside_SERating: newValues.topside_SERating,

// 			tug_formIds: newValues.tug_formIds,
// 			monthValue: newValues.monthValue,
// 			tug_sum1Safe: newValues.tug_sum1Safe,
// 			tug_sum2Safe: newValues.tug_sum2Safe,
// 			tug_sum3Safe: newValues.tug_sum3Safe,
// 			tug_sum4Safe: newValues.tug_sum4Safe,
// 			tug_sum5Safe: newValues.tug_sum5Safe,
// 			tug_sum6Safe: newValues.tug_sum6Safe,
// 			tug_sum1UnSafe: newValues.tug_sum1UnSafe,
// 			tug_sum2UnSafe: newValues.tug_sum2UnSafe,
// 			tug_sum3UnSafe: newValues.tug_sum3UnSafe,
// 			tug_sum4UnSafe: newValues.tug_sum4UnSafe,
// 			tug_sum5UnSafe: newValues.tug_sum5UnSafe,
// 			tug_sum6UnSafe: newValues.tug_sum6UnSafe,
// 			tug_SEq1: newValues.tug_SEq1,
// 			tug_SEq2: newValues.tug_SEq2,
// 			tug_SEq3: newValues.tug_SEq3,
// 			tug_SEq4: newValues.tug_SEq4,
// 			tug_SEq5: newValues.tug_SEq5,
// 			tug_SEq6: newValues.tug_SEq6,
// 			tug_SEOverAllSafe: newValues.tug_SEOverAllSafe,
// 			tug_SEOverAllUnSafe: newValues.tug_SEOverAllUnSafe,
// 			tug_SERating: newValues.tug_SERating,

// 			movement_formIds: newValues.movement_formIds,
// 			movement_sum1Safe: newValues.movement_sum1Safe,
// 			movement_sum2Safe: newValues.movement_sum2Safe,
// 			movement_sum3Safe: newValues.movement_sum3Safe,
// 			movement_sum4Safe: newValues.movement_sum4Safe,
// 			movement_sum5Safe: newValues.movement_sum5Safe,
// 			movement_sum6Safe: newValues.movement_sum6Safe,
// 			movement_sum1UnSafe: newValues.movement_sum1UnSafe,
// 			movement_sum2UnSafe: newValues.movement_sum2UnSafe,
// 			movement_sum3UnSafe: newValues.movement_sum3UnSafe,
// 			movement_sum4UnSafe: newValues.movement_sum4UnSafe,
// 			movement_sum5UnSafe: newValues.movement_sum5UnSafe,
// 			movement_sum6UnSafe: newValues.movement_sum6UnSafe,
// 			movement_SEq1: newValues.movement_SEq1,
// 			movement_SEq2: newValues.movement_SEq2,
// 			movement_SEq3: newValues.movement_SEq3,
// 			movement_SEq4: newValues.movement_SEq4,
// 			movement_SEq5: newValues.movement_SEq5,
// 			movement_SEq6: newValues.movement_SEq6,
// 			movement_SEOverAllSafe: newValues.movement_SEOverAllSafe,
// 			movement_SEOverAllUnSafe: newValues.movement_SEOverAllUnSafe,
// 			movement_SERating: newValues.movement_SERating,
// 			overallMonthlyRating: newValues.overallMonthlyRating
// 		}
// 	}
// 	await sgMail
// 		.send(msg)
// 		.then(() => {
// 			//Celebrate
// 			console.log('Email Sent!', msg)
// 		})
// 		.catch((error) => {
// 			//Log friendly error
// 			console.error(error.toString())
// 		})

// 	//	return sgMail.send(msg)
// })

// // exports.addEditor = functions.onCall((data, context){
// // 	if(context.auth.token.auditor !== true){
// // 		return {
// // 			error: "Request not authorized. User muse be Admin to fulfill request."
// // 		};

// // 	}
// // 	const email = data.email;
// // 	return grantEditorRole(email).then(()=>{
// // 		return {
// // 			result: `Request Fulfilled: ${email} is now an auditor`
// // 		}
// // 	})
// // })

// // async function grantEditorRole(email){
// // 	const user = await admin.auth().getUserByEmail(email)
// // 	if(user.customClaims && user.customClaims.auditor === true){
// // 		return
// // 	}
// // 	return admin.auth().setCustomUserClaims(user.uid, {
// // 		auditor: true,
// // 		admin: false,
// // 		viewer: true
// // 	})

// // }
