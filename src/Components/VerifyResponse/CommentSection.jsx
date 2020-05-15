import React from 'react'
import './VerifyResponse.scss'

const CommentSection = ({ comment }) => {
	return (
		<section>
			<div className='form-info'>
				<div className='form-info-question'>'(1) Summarize feedback for each behavior for which feedback is provided (type prefix for each behavior, e.g. L/L-1'</div>
			</div>
			<div className='additional-comments'>{comment}</div>
		</section>
	)
}
export default CommentSection
