import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
	apiKey: 'AIzaSyCNeiWtanPUJN_ACLzJKqPw1wpmwplJEPQ',
	authDomain: 'upssafety-f8d4d.firebaseapp.com',
	databaseURL: 'https://upssafety-f8d4d.firebaseio.com',
	projectId: 'upssafety-f8d4d',
	storageBucket: 'upssafety-f8d4d.appspot.com',
	messagingSenderId: '106696386309',
	appId: '1:106696386309:web:c4ee4682416ae07218396c',
	measurementId: 'G-MFVQXJGZL7'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()

export default firebase
