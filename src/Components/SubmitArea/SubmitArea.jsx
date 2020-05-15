import React, { Fragment } from 'react'

const SubmitArea = ({ submit, submitted }) => {
	return (
		<Fragment>
			<div className='button-block'>
				<button onClick={submit} className='button'>
					Submit Audit
				</button>
				{submitted ? <span className='post-success'>Posted Successfully!</span> : null}
			</div>
		</Fragment>
	)
}
export default SubmitArea
