import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import NavBar from '../Navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { getSVDocs } from '../../redux/actions/adminActions'
import './Ranks.scss'
import Button from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'

const Ranks = () => {
	const dispatch = useDispatch()
	const [ svListHasData, setSVListHasData ] = useState(true)
	const darkMode = useSelector((state) => state.darkMode.darkMode)
	const currentSVs = useSelector((state) => state.admin.svsDocs)
	const isLoading = useSelector((state) => state.admin.isLoading)
	const [ desiredShift, setDesiredShift ] = useState(currentSVs)
	const [ filterName, setFilterName ] = useState('All Teams')

	const [ active, setActive ] = useState(false)
	const [ allWs, setAllWs ] = useState()
	const [ allDs, setAllDs ] = useState()

	useEffect(() => {}, [ currentSVs, desiredShift, svListHasData ])

	const refresh = () => {
		dispatch(getSVDocs())
		setDesiredShift(currentSVs)
		setSVListHasData(false)
		setTimeout(() => {
			setSVListHasData(true)
			setDesiredShift(currentSVs)
		}, 5000)
	}

	const filterLateThree = () => {
		let hold = []
		currentSVs
			.filter((n) => {
				return n.shift === 'late-3'
			})
			.map((n, idx) => {
				console.log('heres n', n)
				hold.push(n)
			})
		setDesiredShift(hold)
		setFilterName('Late 3 Employees')
	}
	const filterEarlyThree = () => {
		let hold = []
		currentSVs
			.filter((n) => {
				return n.shift === 'early-3'
			})
			.map((n, idx) => {
				console.log('heres n', n)
				hold.push(n)
			})
		setDesiredShift(hold)
		setFilterName('Early 3 Employees')
	}
	const filterSixHour = () => {
		let hold = []
		currentSVs
			.filter((n) => {
				return n.shift === '6-hr'
			})
			.map((n, idx) => {
				console.log('heres n', n)
				hold.push(n)
			})
		setDesiredShift(hold)
		setFilterName('6 Hour Employees')
	}
	const filterDispatch = () => {
		let hold = []
		currentSVs
			.filter((n) => {
				return n.shift === 'dr-disp'
			})
			.map((n, idx) => {
				console.log('heres n', n)
				hold.push(n)
			})
		setDesiredShift(hold)
		setFilterName('Dispatch Driver Employees')
	}

	const filterDisability = () => {
		let hold = []
		currentSVs
			.filter((n) => {
				return n.shift === 'mil/dis'
			})
			.map((n, idx) => {
				console.log('heres n', n)
				hold.push(n)
			})
		setDesiredShift(hold)
		setFilterName('Military / Disability Employees')
	}

	const showHideWD = () => {
		setActive(!active)
		let employeeArrays = []
		let allW = []
		let allD = []

		currentSVs.map((n, idx) => {
			employeeArrays.push(n.team)
		})

		let everyEmployeeInOneArray = employeeArrays.flat()
		console.log('everyEmployeeInOneArray =>', everyEmployeeInOneArray)

		everyEmployeeInOneArray
			.filter((n) => {
				return n.substr(-3, 3) === '(W)'
			})
			.map((n, idx) => {
				console.log('in map', n)
				allW.push(n)
				return setAllWs(allW)
			})

		everyEmployeeInOneArray
			.filter((n) => {
				return n.substr(-3, 3) === '(D)'
			})
			.map((n, idx) => {
				console.log('in map', n)
				allD.push(n)
				return setAllDs(allD)
			})
	}

	const displayDs = allDs ? allDs.map((n, idx) => <div>{n}</div>) : null
	const displayWs = allWs ? allWs.map((n, idx) => <div>{n}</div>) : null

	const addSum = (array) => {
		let initialValue = 0

		let reducer = (accumulator, item) => {
			return accumulator + item
		}

		let all = array.reduce(reducer, initialValue)

		let number = array.length

		return all / number
	}

	let displaySVCards = desiredShift.map((n, idx) => (
		<div className={darkMode ? 'sv-card-dark' : 'sv-card-light'} key={idx}>
			<div className={darkMode ? 'top-of-card-dark' : 'top-of-card-light'}>
				{n.name}
				<div className='top-of-card-info' style={{ paddingLeft: '20px', fontFamily: 'Bellota Text', fontWeight: '100' }}>
					({n.parenthesis}) {n.shift}
				</div>
			</div>

			<div className={darkMode ? 'card-left-right-divider-dark' : 'card-left-right-divider-light'}>
				<div className={darkMode ? 'left-side-of-card-dark' : 'left-side-of-card-light'}>
					<div className={darkMode ? 'left-side-title-dark' : 'left-side-title-light'}>
						{' '}
						Employees (<span>
							<b>{n.team.length}</b>
						</span>)
					</div>
					<div className={darkMode ? 'left-side-body-dark' : 'left-side-body-light'}>
						{n.team.map((n, idx) => (
							<div className={darkMode ? 'employee-name-dark' : 'employee-name-light'} key={idx}>
								{n} ,
							</div>
						))}
					</div>
				</div>
				<div className={darkMode ? 'right-side-of-card-dark' : 'right-side-of-card-light'}>
					<div className={darkMode ? 'right-side-title-dark' : 'right-side-title-light'}>S.E.R.</div>
					<div className={darkMode ? 'right-side-stat-dark' : 'right-side-stat-light'}>
						{addSum(n.efficiency)}
						<span style={{ fontSize: '20px' }}>%</span>
					</div>
					<div className={darkMode ? 'right-side-title-dark' : 'right-side-title-light'}> </div>
				</div>
			</div>
		</div>
	))

	return (
		<Fragment>
			<NavBar />
			<div className={darkMode ? 'ranking-parent-dark' : 'ranking-parent-light'}>
				<div style={{ padding: '20px' }} className={darkMode ? 'ranking-page-refresh-dark' : 'ranking-page-refresh-light'}>
					{' '}
					<Button onClick={refresh} disable={!svListHasData}>
						<span style={{ paddingRight: '8px', color: '#F4F6F5' }}>Refresh</span> {svListHasData ? <FontAwesomeIcon icon={faSync} size={'sm'} color={'white'} /> : <FontAwesomeIcon icon={faSync} size={'sm'} color={'#F4F6F5'} spin />}
					</Button>
				</div>
				<div style={{ border: '2px inset silver' }} className={darkMode ? 'filter-box-dark' : 'filter-box-light'}>
					<div className={darkMode ? 'ranking-page-title-dark' : 'ranking-page-title-light'}>Select An Option</div>
					<div style={{ display: 'flex', padding: '20px 0px 5px 0px' }}>
						<button
							style={{ borderColor: '#f5f5f5', width: '24%' }}
							className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'}
							onClick={() => {
								setDesiredShift(currentSVs)
								setFilterName('All Teams')
							}}>
							All
						</button>
						<button style={{ borderColor: '#e80932', width: '24%' }} className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'} onClick={() => filterEarlyThree()}>
							Early-3
						</button>
						<button style={{ borderColor: '#0dde45', width: '24%' }} className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'} onClick={() => filterLateThree()}>
							Late-3
						</button>
						<button style={{ borderColor: '#e0d614', width: '24%' }} className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'} onClick={() => filterSixHour()}>
							6-hr
						</button>
					</div>
					<div style={{ display: 'flex', padding: '10px 0px 20px 0px' }}>
						<button style={{ borderColor: '#0d73e0', width: '28%' }} className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'} onClick={() => filterDispatch()}>
							Dispatch
						</button>
						<button style={{ borderColor: '#0bd8e3', width: '24%' }} className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'} onClick={() => filterDisability()}>
							Mil/Dis
						</button>

						<button style={{ borderColor: '#c70ee3', width: '45%', wordBreak: 'none' }} className={darkMode ? 'filter-tile-dark' : 'filter-tile-light'} onClick={() => showHideWD()}>
							{active ? <FontAwesomeIcon className={darkMode ? 'rank-toggle-wd-off-dark' : 'rank-toggle-wd-off-light'} icon={faToggleOn} /> : <FontAwesomeIcon className={darkMode ? 'rank-toggle-wd-on-dark' : 'rank-toggle-wd-on-light'} icon={faToggleOff} />}{' '}
							<span style={{ fontSize: '15px' }}>Walker/DeIce</span>
						</button>
					</div>
					{active ? (
						<div className='all-w-d'>
							<div>
								<div className={darkMode ? 'w-d-list-title-dark' : 'w-d-list-title-light'}>
									<div className={darkMode ? 'individual-wd-names-dark' : 'individual-wd-names-light'}>DeIce</div>
									{displayDs}
								</div>
							</div>

							<div>
								<div className={darkMode ? 'w-d-list-title-dark' : 'w-d-list-title-light'}>
									<div className={darkMode ? 'individual-wd-names-dark' : 'individual-wd-names-light'}>Walkers</div>
									{displayWs}
								</div>
							</div>
						</div>
					) : null}
				</div>
				<div className={darkMode ? 'ranking-page-title-dark' : 'ranking-page-title-light'}>{filterName}</div>

				{displaySVCards}
			</div>
			<Fragment />

			<Footer />
		</Fragment>
	)
}
export default Ranks
