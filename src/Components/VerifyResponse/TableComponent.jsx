import React from 'react'
import './VerifyResponse.scss'

const TableComponent = ({ col1, col2, col3, col4 }) => {
	return (
		<div className='display-banner'>
			<div className='table-left' data-title='Behavior'>
				<div className='table-left-text'>{col1}</div>
			</div>
			<div className='table-right'>
				<div className='cell' data-title='Safe'>
					{col2}
				</div>
				<div className='cell' data-title='Unsafe'>
					{col3}
				</div>
				<div className='cell' data-title='Feedback'>
					{col4}
				</div>
			</div>
		</div>
	)
}
export default TableComponent
