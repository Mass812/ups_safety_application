import React from 'react'
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'

// place this in a component so they can click it to download this pdf
// <Button>
// <div>
// <PDFDownloadLink document={<PdfAudit />} fileName="somename.pdf">
// {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
// </PDFDownloadLink>
// </div>
// </Button>

//import them into the component by
//import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer'
//import PdfAudit from '../PDF/PdfAudit'

// Create styles
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4'
	},
	header: {
		fontSize: '26px'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
})

// Create Document Component
const PdfAudit = () => (
	<Document>
		<Page size='A4' style={styles.page}>
			<View style={styles.header}>
				<Text>This will be a phone contact list</Text>
			</View>
			<View style={styles.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
)

export default PdfAudit
