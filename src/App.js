import React from 'react'
import 'typeface-roboto'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Layout from './Components/Containers/Layout'

import Table from './Controls/Containers/Table'

const muiTheme = createMuiTheme({
	typography: {
	  // Use the system font.
	  fontFamily: 'Prompt, sans-serif',
	//   useNextVariants: true
	},
	breakpoints:{//For Responsive
	  values: {
		xs: 0,
		sm: 768,
		md: 960,
		lg: 1280,
		xl: 1920
	  }
	}
});

function App() {

	return (
		<ThemeProvider theme={muiTheme}>
			<Layout/>
		</ThemeProvider>

		// <div className={classes.root}>
		// 	{/* <FormLogin /> */}
		// 	{/* <DatePick 
		// 		funcName="timeOnly"
		// 		setFormat={{
		// 			showTimeSelect: true,
		// 			showTimeSelectOnly: true,
		// 			timeIntervals: 15,
		// 			timeCaption: "Time",
		// 			dateFormat: "h:mm aa"
		// 		}}
		// 	/> */}
		// 	<Table />
		// </div>
	)
}

export default App;