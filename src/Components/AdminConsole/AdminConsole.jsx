import React, { Fragment, useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveSvs, getSVEmployees, addRemoveEmployees, getActiveSVs, getSVDocs } from '../../redux/actions/adminActions'
import { createMonthlyReportByDb, createWeeklyReports } from '../../redux/actions/reportListActions'
import './AdminConsole.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCheckCircle, faExclamationCircle, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { faUps } from '@fortawesome/free-brands-svg-icons'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
var moment = require('moment')

const AdminConsole = () => {
	const supList = useSelector((state) => state.admin.activeSVList)
	const changeSVEmployeeMessage = useSelector((state) => state.admin.changeSVEmployeeMessage)
	const changeSVActiveMessage = useSelector((state) => state.admin.changeSVActiveMessage)
	const reportStatus = useSelector((state) => state.reportList.reportStatus)
	const employeeList = useSelector((state) => state.admin.employeeList)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const dispatch = useDispatch()
	const [ selectedDate, setSelectedDate ] = useState(new Date())
	const [ disable, setDisable ] = useState()
	const [ svToEmployee, setSvToEmployee ] = useState({
		sv: '',
		employeeName: ''
	})
	const [ entered, setEntered ] = useState({
		name: '',
		shift: '',
		parenthesis: ''
	})
	const [ addSV, setAddSV ] = useState(false)
	const [ active, setActive ] = useState(false)
	const [ addEmployee, setAddEmployee ] = useState(false)
	const [ display, setDisplay ] = useState(false)
	const [ wantReport, setWantReport ] = useState(false)
	const [ reveal, setReveal ] = useState(false)

	useEffect(
		() => {
			const removeSVMessage = () => {
				if (changeSVActiveMessage !== '') {
					setTimeout(() => {
						dispatch({ type: 'SUCCESSFUL_CHANGE_ACTIVE_SV', payload: '' })
					}, 3500)
				}
			}
			const removeEmployeeMessage = () => {
				if (changeSVEmployeeMessage !== '') {
					setTimeout(() => {
						dispatch({ type: 'SUCCESSFUL_CHANGE_SV_TEAM', payload: '' })
					}, 3500)
				}
			}
			removeSVMessage()
			removeEmployeeMessage()
			//	console.log('entered value ', entered)
		},
		[ supList, changeSVActiveMessage, changeSVEmployeeMessage ]
	)

	const displaySVList = supList.svList.map((n, idx) => (
		<option className='options' key={idx} value={n}>
			{n}
		</option>
	))

	const enteredDeltaSupervisor = async (e) => {
		let name = e.target.value.trim()
		let capName = name.toUpperCase()
		//	console.log('capName ', capName.length)

		if (capName !== '') {
			setEntered({ ...entered, name: capName })
		}
	}
	const enteredDeltaShift = async (e) => {
		let name = e.target.value.trim()
		let capName = name.toLowerCase()
		//	console.log('capName ', capName.length)

		setEntered({ ...entered, shift: capName })
	}

	const enteredDeltaParenthesis = async (e) => {
		let name = e.target.value.trim()
		let capName = name.toLowerCase()
		//console.log('capName ', capName.length)

		setEntered({ ...entered, parenthesis: capName })
	}

	//console.log(entered.length === 0)

	const onSubmit = () => {
		if (entered.name && entered.shift && entered.parenthesis !== '') {
			setDisable(true)
			dispatch(changeActiveSvs(entered))
			setTimeout(() => {
				setEntered({ ...entered, shift: '', name: '', parenthesis: '' })
			}, 200)
			setTimeout(() => {
				setDisable(false)
			}, 2000)
		} else {
			dispatch({ type: 'SUCCESSFUL_CHANGE_ACTIVE_SV', payload: 'Please add all required info' })
		}
	}

	//delete

	const enteredAlphaSupervisor = (e) => {
		let name = e.target.value.trim()
		let capName = name.toUpperCase()
		//	let validate = supList.svList.includes(`${capName}`)

		if (supList.svList.includes(`${capName}`)) {
			console.log('hit')
			setEntered({ ...entered, name: capName })
		}
	}

	const removeSV = () => {
		if (entered.name !== '') {
			setDisable(true)
			dispatch(changeActiveSvs(entered))
			setTimeout(() => {
				setEntered({ ...entered, shift: '', name: '', parenthesis: '' })
			}, 200)
			setTimeout(() => {
				setDisable(false)
			}, 2000)
		} else {
			dispatch({ type: 'SUCCESSFUL_CHANGE_ACTIVE_SV', payload: 'please check your spelling, try again' })
		}
	}

	//---------------------------------------

	const enteredChangeEmployee = (e) => {
		let name = e.target.value.trim()
		let capName = name.toUpperCase()

		if (capName.length >= 1) {
			setSvToEmployee({ ...svToEmployee, employeeName: capName })
		}
	}

	const selectedSV = (e) => {
		let SV = e.target.value.trim()
		if (SV.length >= 1) {
			dispatch(getSVEmployees(SV))
			setSvToEmployee({ ...svToEmployee, sv: SV })
		}
		e.target.value = ''
	}

	const totalTeamChangeSubmit = () => {
		if (!!svToEmployee.sv && !!svToEmployee.employeeName) {
			setDisable(true)
			dispatch(addRemoveEmployees(svToEmployee))

			setTimeout(() => {
				dispatch(getSVEmployees(svToEmployee.sv))
			}, 3000)

			setTimeout(() => {
				setSvToEmployee({ sv: '', employeeName: '' })
				setDisable(false)
				setSvToEmployee('')
				setReveal(false)
			}, 500)
		} else {
			dispatch({ type: 'SUCCESSFUL_CHANGE_SV_TEAM', payload: 'Please give required information' })
		}
	}

	const displaySupervisors = supList.svList.map((n, idx) => (
		<div className='admin-sv' key={idx}>
			{' '}
			{n} {' '}
		</div>
	))

	const svCurrentTeam = employeeList.team.map((n, idx) => (
		<option className='admin-option' key={idx}>
			{n}
		</option>
	))
	const svCurrentTeamList = employeeList.team.map((n, idx) => (
		<div className={darkMode ? 'sv-active-dark' : 'sv-active-light'} key={idx}>
			{n}
		</div>
	))

	const selectedEmployee = (e) => {
		let name = e.target.value.trim()
		let capName = name.toUpperCase()

		if (capName.length >= 1) {
			setSvToEmployee({ ...svToEmployee, employeeName: capName })
		}
	}

	const selectDate = (date) => {
		setSelectedDate(date)
		dispatch({ type: 'SEND_SELECTED_DATE', payload: date })
	}
	//	console.log(selectedDate)

	const getAllReportsForTheSelectedWeek = () => {
		//	console.log(moment(`${selectedDate}`).format('w'))
		//	dispatch(createWeeklyReports('tug_audit', 'package_movement', 'topside_uld_movement', selectedDate))
	}
	const getMonthlyReport = (value, e) => {
		toggleConfirm()
		let month = moment(selectedDate).month() + 1
		dispatch(createMonthlyReportByDb('tug_audit', 'package_movement', 'topside_uld_movement', month, selectedDate))
		console.log(month, 'selected date', selectedDate);
	}

	const refresh = () => {
		dispatch(getSVDocs())
		dispatch(getActiveSVs())
	}

	const toggleConfirm = () => {
		setWantReport((wantReport) => !wantReport)
	}

	return (
		<Fragment>
			<Navbar />
			<Fragment>
				<div className={darkMode ? 'admin-parent-dark' : 'admin-parent-light'}>
					<Button onClick={refresh}>Refresh</Button>
					<div className={darkMode ? 'admin-card-dark' : 'admin-card-light'}>
						<div className={darkMode ? 'admin-section-title-dark' : 'admin-section-title-light'}>Add / Remove Active Supervisor</div>
						<div className={darkMode ? 'list-dark' : 'list-light'}> currently active supervisors </div>
						<div className={darkMode ? 'admin-sv-active-list-block-dark' : 'admin-sv-active-list-block-light'}>
							<div className={darkMode ? 'sv-active-dark' : 'sv-active-light'}>{displaySupervisors}</div>
							<div style={{ color: 'green' }}>{changeSVActiveMessage ? changeSVActiveMessage : null}</div>
						</div>
						<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>What would you like to do?</div>
						<div style={{ display: 'flex' }}>
							<button
								className={darkMode ? 'admin-option-tab-dark' : 'admin-option-tab-light'}
								onClick={() => {
									setAddSV(true)
									setActive(true)
									setEntered({ name: '', shift: '', parenthesis: '' })
								}}>
								Add Supervisor
							</button>
							<button
								className={darkMode ? 'admin-option-tab-dark' : 'admin-option-tab-light'}
								onClick={() => {
									setAddSV(false)
									setActive(true)
									setEntered({ name: '', shift: '', parenthesis: '' })
								}}>
								Remove Supervisor
							</button>
						</div>

						{active ? addSV ? (
							<Fragment>
								{' '}
								<br />
								<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>Supervisors Name </div>
								<Input onChange={enteredDeltaSupervisor} placeholder={'please enter name as displayed'} />
								<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>Select the supervisors shift</div>
								<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='shift' size={3} onChange={enteredDeltaShift}>
									<option className='admin-option'>6-hr</option>
									<option className='admin-option'>late-3</option>
									<option className='admin-option'>early-3</option>
									<option className='admin-option'>dr-disp</option>
									<option className='admin-option'>marshall</option>
									<option className='admin-option'>mil/dis</option>
									<option className='admin-option'>chsp</option>
								</select>
								<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>Parenthesis Value </div>
								<Input onChange={enteredDeltaParenthesis} placeholder={'please enter the number'} />
							</Fragment>
						) : (
							<Fragment>
								{' '}
								<br />
								<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>Supervisors Name </div>
								<Input onChange={enteredAlphaSupervisor} placeholder={'please enter name as displayed'} />
							</Fragment>
						) : null}

						<div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
							{entered.name !== '' ? <div className={darkMode ? 'returned-entered-value-text-dark' : 'returned-entered-value-text-light'}>{entered.name}</div> : null}
							{entered.shift !== '' ? <div className={darkMode ? 'returned-entered-value-text-dark' : 'returned-entered-value-text-light'}>{entered.shift}</div> : null}
							{entered.parenthesis !== '' ? <div className={darkMode ? 'returned-entered-value-text-dark' : 'returned-entered-value-text-light'}>{entered.parenthesis}</div> : null}
						</div>

						{active ? addSV ? <Button onClick={onSubmit}> Add Supervisor</Button> : <Button onClick={removeSV}> Remove Supervisor</Button> : null}
					</div>

					{/* <section>
						<div className={darkMode ? 'admin-card-dark' : 'admin-card-light'}>

						<div className={darkMode ? 'admin-section-title-dark' : 'admin-section-title-light'}>Change SV's Shift</div>
						<Fragment>
									<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>(1) Select a supervisor from the list below</div>
								
									<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='name' onChange={selectedSV} size={3}>
										{displaySVList}
									</select>
									<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>Select the supervisors shift</div>
								<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='shift' size={3} onChange={enteredDeltaShift}>
									<option className='admin-option'>6-hr</option>
									<option className='admin-option'>late-3</option>
									<option className='admin-option'>early-3</option>
									<option className='admin-option'>dr-disp</option>
									<option className='admin-option'>marshall</option>
									<option className='admin-option'>mil/dis</option>
									<option className='admin-option'>chsp</option>
								</select>
								</Fragment>
							
						<Input onChange={enteredChangeEmployee} onBlur={(e) => (e.target.value = '')} />
							<Button>Change Shift</Button>
							</div>
						</section> */}

					<div className={darkMode ? 'admin-card-dark' : 'admin-card-light'}>
						<div className={darkMode ? 'admin-section-title-dark' : 'admin-section-title-light'}>Add/ Remove Employees</div>
						<div>
							<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>What would you like to do?</div>
							<div style={{ display: 'flex' }}>
								<button
									className={darkMode ? 'admin-option-tab-dark' : 'admin-option-tab-light'}
									onClick={() => {
										setAddEmployee(false)
										setDisplay(true)
										setSvToEmployee({ ...svToEmployee, employeeName: '', sv: '' })
										setReveal(true)
									}}>
									Add Employee
								</button>
								<button
									className={darkMode ? 'admin-option-tab-dark' : 'admin-option-tab-light'}
									onClick={() => {
										setAddEmployee(true)
										setDisplay(true)
										setSvToEmployee({ ...svToEmployee, employeeName: '', sv: '' })
										setReveal(true)
									}}>
									Remove Employee
								</button>
							</div>
							{reveal ? (
								<Fragment>
									<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>(1) Select a supervisor from the list below</div>
									<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='name' onChange={selectedSV} size={5}>
										{displaySVList}
									</select>
								</Fragment>
							) : null}

							{display ? addEmployee ? (
								<Fragment>
									<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'}>
										{svCurrentTeam ? (
											<div className='e-list-block'>
												{svToEmployee.sv ? (
													<Fragment>
														<div className={darkMode ? 'admin-sv-active-list-block-dark' : 'admin-sv-active-list-block-light'}>
															<FontAwesomeIcon icon={faUps} /> <span style={{ color: 'goldenrod' }}> {svToEmployee.sv}'s TEAM (currently)</span>
															<Fragment>{svCurrentTeamList}</Fragment>
														</div>
													</Fragment>
												) : null}

												<div className={darkMode ? 'admin-employee-list-dark' : 'admin-employee-list-light'}>
													<div style={{ padding: '15px' }}>(2) Select an Employee to Remove </div>
													{svToEmployee.sv ? (
														<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='name' onChange={selectedEmployee} size={svCurrentTeam.length}>
															{svCurrentTeam}
														</select>
													) : null}{' '}
												</div>
											</div>
										) : null}
									</div>
									<div style={{ color: 'green' }}>{changeSVEmployeeMessage ? changeSVEmployeeMessage : null}</div>

									{svToEmployee.sv !== '' ? (
										<Fragment>
											<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>Verify the inputs you created</div>
											<br />
											<div>Required Fields</div>
											<div className={darkMode ? 'admin-show-as-typed-dark' : 'admin-show-as-typed-light'}>
												{!svToEmployee.sv ? <FontAwesomeIcon icon={faExclamationCircle} style={{ paddingRight: '5px', color: 'red', fontSize: '18px' }} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ paddingRight: '5px', color: 'green', fontSize: '18px' }} />}
												Supervisor:{''} {svToEmployee.sv}
											</div>
											<div className={darkMode ? 'admin-show-as-typed-dark' : 'admin-show-as-typed-light'}>
												{!svToEmployee.employeeName ? <FontAwesomeIcon icon={faExclamationCircle} style={{ paddingRight: '5px', color: 'red', fontSize: '18px' }} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ paddingRight: '5px', color: 'green', fontSize: '18px' }} />}
												Employee: {''} {svToEmployee.employeeName}
											</div>

											<Button disabled={disable} onClick={totalTeamChangeSubmit}>
												Remove Employee from Team
											</Button>
										</Fragment>
									) : null}
								</Fragment>
							) : (
								<Fragment>
									<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'}>
										{svCurrentTeam ? (
											<div className='e-list-block'>
												{svToEmployee.sv ? (
													<Fragment>
														<div className={darkMode ? 'admin-sv-active-list-block-dark' : 'admin-sv-active-list-block-light'}>
															<FontAwesomeIcon icon={faUps} /> <span style={{ color: 'goldenrod' }}> {svToEmployee.sv}'s TEAM (currently)</span>
															<Fragment>{svCurrentTeamList}</Fragment>
														</div>
													</Fragment>
												) : null}

												{/* <div style={{ padding: '15px' }}>	{svCurrentTeamList} </div> */}
												{/* <div className='admin-employee-list'>{svToEmployee.sv ? <div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-active-list-block-light'}>{svCurrentTeamList}</div> : null} </div> */}
											</div>
										) : null}
									</div>
									<div style={{ color: 'green' }}>{changeSVEmployeeMessage ? changeSVEmployeeMessage : null}</div>

									{svToEmployee.sv !== '' ? (
										<Fragment>
											<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>(2) Enter the employees name that you would like to add </div>
											<br />
											<div>Required Fields</div>
											<div className={darkMode ? 'admin-show-as-typed-dark' : 'admin-show-as-typed-light'}>
												{!svToEmployee.sv ? <FontAwesomeIcon icon={faExclamationCircle} style={{ paddingRight: '5px', color: 'red', fontSize: '18px' }} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ paddingRight: '5px', color: 'green', fontSize: '18px' }} />}
												Supervisor:{''} {svToEmployee.sv}
											</div>
											<div className={darkMode ? 'admin-show-as-typed-dark' : 'admin-show-as-typed-light'}>
												{!svToEmployee.employeeName ? <FontAwesomeIcon icon={faExclamationCircle} style={{ paddingRight: '5px', color: 'red', fontSize: '18px' }} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ paddingRight: '5px', color: 'green', fontSize: '18px' }} />}
												Employee: {''} {svToEmployee.employeeName}
											</div>

											<Input onChange={enteredChangeEmployee} onBlur={(e) => (e.target.value = '')} />

											<Button disabled={disable} onClick={totalTeamChangeSubmit}>
												Add Employee
											</Button>
										</Fragment>
									) : null}
								</Fragment>
							) : null}
						</div>
					</div>

					{/* <div className={darkMode ? 'admin-card-dark' : 'admin-card-light'}>
						<div className={darkMode ? 'admin-section-title-dark' : 'admin-section-title-light'}>Add Team Member to Crew</div>
						<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'}>
							<div>
								<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>(1) Select a supervisor from the list below</div>
								<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='name' onChange={selectedSV} size={displaySVList.length}>
									{displaySVList}
								</select>


								<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'}>
									{svCurrentTeam ? (
										<div className='e-list-block'>
											{svToEmployee.sv ? (
												<Fragment>
													<FontAwesomeIcon icon={faUps} /> <span style={{ color: 'goldenrod' }}> {svToEmployee.sv}</span>
												</Fragment>
											) : null}

											<div style={{ padding: '15px' }}>Current Employees </div>
											<div className='admin-employee-list'>{svToEmployee.sv ? 
												<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'}>

												<select className={darkMode ? 'admin-select-dark' : 'admin-select-light'} name='name' onChange={selectedEmployee} size={svCurrentTeam.length}>
											{svCurrentTeam} 

											</select>
											</div>
											: null} </div>
										</div>
									) : null}
								</div>
								<div style={{ color: 'green' }}>{changeSVEmployeeMessage ? changeSVEmployeeMessage : null}</div>
							</div>
						</div>

						{svToEmployee.sv !== '' ? (
							<Fragment>
								<div className={darkMode ? 'add-sv-question-dark' : 'add-sv-question-light'}>(2) Enter the associates name that you would like to add or remove</div>
								<br />
								<div>Required Fields</div>
								<div className={darkMode ? 'admin-show-as-typed-dark' : 'admin-show-as-typed-light'}>
									{!svToEmployee.sv ? <FontAwesomeIcon icon={faExclamationCircle} style={{ paddingRight: '5px', color: 'red', fontSize: '18px' }} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ paddingRight: '5px', color: 'green', fontSize: '18px' }} />}
									Supervisor:{''} {svToEmployee.sv}
								</div>
								<div className={darkMode ? 'admin-show-as-typed-dark' : 'admin-show-as-typed-light'}>
									{!svToEmployee.employeeName ? <FontAwesomeIcon icon={faExclamationCircle} style={{ paddingRight: '5px', color: 'red', fontSize: '18px' }} /> : <FontAwesomeIcon icon={faCheckCircle} style={{ paddingRight: '5px', color: 'green', fontSize: '18px' }} />}
									Employee: {''} {svToEmployee.employeeName}
								</div>

								<Input onChange={enteredChangeEmployee} onBlur={(e) => (e.target.value = '')} />

								<Button disabled={disable} onClick={totalTeamChangeSubmit}>
									Add/Remove Employee from Team
								</Button>
							</Fragment>
						) : null}
					</div> */}
					{/* <div>
						<Button onClick={() => dispatch(generateMonthlyReport(reportList))}>Generate Report</Button>
					</div> */}

					<div className={darkMode ? 'admin-card-dark' : 'admin-card-light'}>
						<div className={darkMode ? 'admin-section-title-dark' : 'admin-section-title-light'}>Get Monthly Reports</div>
						<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'} style={{ alignContent: 'center', justifyContent: 'center' }}>
							<div> 1) Select any day within the month that you wish to print the Month Report For </div>
							{/* <div>OR</div>
							<div>2) Please select any day in the week that you wish to print the Weeks Report For</div> */}
							<br />
							<div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
								<Calendar
									onClick={selectDate}
									defaultView={'month'}
									defaultValue={new Date()}
									showNavigation={true}
									prevLabel={<FontAwesomeIcon icon={faArrowCircleLeft} size={'lg'} />}
									nextLabel={<FontAwesomeIcon icon={faArrowCircleRight} size={'lg'} />}
									maxDetail={'month'}
									onChange={(date) => selectDate(date)}
									minDate={new Date('4/19/2020')}
									calendarType={'US'}
									value={selectedDate}
								/>
							</div>
							<div>
								{!!selectedDate ? (
									<h5>
										<span style={{ color: 'steelBlue' }}>Date Selected: </span> {selectedDate.toString()}
									</h5>
								) : null}
							</div>
						</div>

						<br />
						<div />
						<div style={{ display: 'flex' }} />

						<br />
						<div style={{ color: 'goldenrod' }}>{reportStatus} </div>
						<div style={{ padding: '12px' }}>
							{/* <Button onClick={getAllReportsForTheSelectedWeek}>Get Weekly Report</Button> */}

							{wantReport ? (
								<div className={darkMode ? 'admin-sv-list-block-dark' : 'admin-sv-list-block-light'}>
									<div style={{ padding: '15px' }}>You are are about to generate a data heavy response, ensure the date you selected is within the desired month, this area is to ensure that the request is verified.</div>
									<Button onClick={toggleConfirm}>Cancel</Button> <Button onClick={getMonthlyReport}>Generate Report</Button>
								</div>
							) : (
								<Button onClick={toggleConfirm}>Generate a Monthly Report</Button>
							)}
						</div>
					</div>
				</div>
			</Fragment>
			<Footer />
		</Fragment>
	)
}
export default AdminConsole
