import React, { Fragment, useRef, useEffect, useState } from 'react'
import './pdfFormat.scss'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/Button.jsx'
import { useHistory, useParams } from 'react-router-dom'
import { db } from '../Firebase/FirebaseConfig'
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
import Pdf from 'react-to-pdf'
import Spinner from '../Spinner/Spinner'

const PdfFormatAndPrintAudit = () => {
	const dispatch = useDispatch()
	//const specificReport = useSelector((state) => state.reportList.specificReport)
	const basicUserInfo = useSelector((state) => state.profile.basicUserInfo)
	const history = useHistory()

	const [ pdfIsLoading, setPdfIsLoading ] = useState(true)
	const [ report, setReport ] = useState()

	const params = useParams().id
	console.log(params)
	let formValue
	let collectionValue
	let separatedString = params.split('-')
	formValue = separatedString[0]
	collectionValue = separatedString[1]
	console.log('param', formValue, collectionValue)

	useEffect(() => {}, [])
	const awaitData = async () => {
		await db
			.collection(`${collectionValue}`)
			.doc(`${formValue}`)
			.get()
			.then((doc) => {
				console.log('doc', doc.data())
				hold.push(doc.data())
				setReport(hold)
				setPdfIsLoading(false)
			})
			.then(() => {
				console.log('report in Effect', report)
			})
			.catch((err) => console.log('error', err))
	}
	let hold = []
	useEffect(() => {
		setPdfIsLoading(true)
		awaitData()

	}, [])

	console.log(report, 'report')

	const submit = (e) => {
		history.push(`/${collectionValue}`)
	}

	//1063 x 1375 dimension
	const ref = useRef()
	// const options = {
	// 	orientation: 'landscape',
	// 	unit: 'in',
	// 	format: [ 4, 2 ]
	// }

	const printPDF = () => {
		const domElement = document.getElementById('root')
		html2canvas(domElement).then((canvas) => {
			const imgData = canvas.toDataURL('image/png')
			const pdf = new jsPdf()
			pdf.addImage(imgData, 'JPEG', 10, 5, 175, 265)
			pdf.save(`${new Date().toISOString()}.pdf`)
		})
	}

	return (
		<Fragment>
			{pdfIsLoading ? (
				<Spinner />
			) : (
				<Fragment>
					<div className='pdf-wrapper'>
						{report &&
							report.map((n, idx) => (
								<div ref={ref} className='pdf-parent' key={n.formId}>
									<div className='pdf-image-title-block'>
										<div className='pdf-form-title-report'>{n.formTitle ? n.formTitle : 'null'}</div>
										<div className='pdf-efficiency-block'>
											<span>Safety Efficiency {n.efficiency}%</span>
										</div>
									</div>
									<section className='pdf-section'>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Auditor</div>
											<div className='pdf-form-info-response'>{basicUserInfo.displayName}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Date</div>
											<div className='pdf-form-info-response'>{n.date}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Division:</div>
											<div className='pdf-form-info-response'>{n.Division}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>SLIC</div>
											<div className='pdf-form-info-response'>{n.SLIC}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Form Name</div>
											<div className='pdf-form-info-response'>{n.technicalFormName}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Employee's Audited</div>
											<div className='pdf-form-info-response'> {n.Employees_Observed}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Attending Supervisor</div>
											<div className='pdf-form-info-response'> {n.Observer_Group}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Ramp</div>
											<div className='pdf-form-info-response'> {n.ramp}</div>
										</div>
										<div className='pdf-form-info'>
											<div className='pdf-form-info-question'>Form ID: </div>
											<div className='pdf-form-info-response'> {n.formId}</div>
										</div>
										<br />
										<br />
									</section>

									<div className='pdf-table'>
										<div className='pdf-table-block'>
											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													Behavior
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														Safe
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														Unsafe
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														Feedback
													</div>
												</div>
											</div>

											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													{n.longQuestionOne}
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														{n.answer1Safe}
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														{n.answer1UnSafe}
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														{n.answer1FeedBack}
													</div>
												</div>
											</div>

											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													{n.longQuestionTwo}
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														{n.answer2Safe}
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														{n.answer2UnSafe}
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														{n.answer2FeedBack}
													</div>
												</div>
											</div>

											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													{n.longQuestionThree}
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														{n.answer3Safe}
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														{n.answer3UnSafe}
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														{n.answer3FeedBack}
													</div>
												</div>
											</div>
											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													{n.longQuestionFour}
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														{n.answer4Safe}
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														{n.answer4UnSafe}
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														{n.answer4FeedBack}
													</div>
												</div>
											</div>
											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													{n.longQuestionFive}
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														{n.answer5Safe}
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														{n.answer5UnSafe}
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														{n.answer5FeedBack}
													</div>
												</div>
											</div>
											<div className='pdf-row'>
												<div className='pdf-table--left' data-title='Behavior'>
													{n.longQuestionSix}
												</div>

												<div className='pdf-table-right'>
													<div className='pdf-right-cell' data-title='Safe'>
														{n.answer6Safe}
													</div>
													<div className='pdf-right-cell' data-title='Unsafe'>
														{n.answer6UnSafe}
													</div>
													<div className='pdf-right-cell' data-title='Feedback'>
														{n.answer6FeedBack}
													</div>
												</div>
											</div>
											<div className='pdf-section'>
												<div className='pdf-form-info'>
													<div className='pdf-comment-info-question'>Additional Comments: </div>
													<div className='pdf-additional-comments'>{n.comments}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>

					<div className='pdf-button-splay'>
						{/* <Pdf targetRef={ref} filename={n.formId} x={0.5} y={0.5}>
					{({ toPdf }) => <Button onClick={toPdf}>Generate Pdf</Button>}
				</Pdf> */}
						<Button onClick={submit}>Back</Button>
						<Button onClick={printPDF}>Create PDF</Button>
					</div>
				</Fragment>
			)}
		</Fragment>
	)
}
export default PdfFormatAndPrintAudit
