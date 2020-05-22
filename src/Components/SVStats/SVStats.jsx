import React, { useState, useEffect, Fragment } from 'react'
import { Line, Bar } from 'react-chartjs-2'

const SVStats = ({ array }) => {
	//let madeData = [ 21, 45, 65, 75, 86, 22, 33, 44, 55, 22, 88, 99, 77, 87, 67, 87, 88, 65, 44 ]
	console.log('array props: ', array)
	let madeData = array
	let spreadNum = Array.from(madeData)

	const [ dataSet, setDatSet ] = useState({
		data: {
			labels: spreadNum,
			datasets: [
				{
					label: 'efficiency rate',
					backgroundColor: 'rgba(218,165,32, 0.75)',
					data: madeData
				}
			]
		}
	})

	return (
		<div className=' ' style={{ position: 'relative', width: '600', height: '550' }}>
			<Line
				options={{
					responsive: true
				}}
				data={dataSet.data}
			/>
		</div>
	)
}
export default SVStats
