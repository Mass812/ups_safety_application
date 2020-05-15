import React, { useState } from 'react'
//import '../NotIdentifiedScreen.scss'
import '../CreateAccount.scss'
import '../../../App.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { auth, storage, db } from '../../Firebase/FirebaseConfig'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBasicUserDetails, addNameToUserDoc } from '../../../redux/actions/profileActions'

const CreateInfo = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const [
		typed,
		setTyped
	] = useState('')

	const displayNameChose = (e) => {
		setTyped(e.target.value)
	}

	const onEnter = (e) => {
		if (e.which === 13 || e.keyCode === 13) {
			submit()
		}
	}

	

	const submit = () => {
		dispatch(addNameToUserDoc(typed))
		setTimeout(() => {
			dispatch(getBasicUserDetails())
			dispatch({ type: 'LOADING', isLoading: false })
			history.push('/home')
		}, 400)
	}

	return (
		<div className='create-account-module'>
			<div className='inner-account-parent'>
				<div className='outer-text'>
					<div className='sign-title'>A few more details</div>
					<div>
						<span>
							<label>Please Enter Your Name</label>
							<div className='new-handle-block'>
								<input
									name='displayName'
									className='input'
									placeholder='Enter your User Handle'
									type='text'
									onBlur={displayNameChose}
									onKeyPress={onEnter}
									onChange={displayNameChose}
									autoFocus
								/>{' '}
								<button className='button' onClick={submit}>
									I'm Ready
								</button>
							</div>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CreateInfo
