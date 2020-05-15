import firebase, { auth, db } from '../../Components/Firebase/FirebaseConfig'
import { LOADING } from '../types'
const moment = require('moment')

export const getMonthlyReport = (monthNum) => {
	return async (dispatch) => {
		let month = monthNum
		if (!month) {
			return (month = moment().format('ww'))
		}

		//get report

		db
			.collection('monthly_reports')
			.where('month', '==', month)
			.get()
			.then((doc) => {
				console.log('month action doc.data', doc.data())
				let array = []
				array.push(doc.data())
				dispatch({ type: 'GET_MONTHLY_REPORT', payload: array })
			})
			.catch((err) => console.log(err))
	}
}
