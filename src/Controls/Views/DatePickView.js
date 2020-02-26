import React from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { ThemeProvider } from '@material-ui/core/styles'
// can you import style sheets custom.css for design input datepicker

import { makeStyles } from '@material-ui/core/styles'
import {
    Grid,
    Divider,
    Typography,
    TextField,
    Card,
    CardActions,
    CardContent,
    Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(3)
    },
    cardRoot: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        }
    },
}))

const defaultTheme = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
}

const DatePickView = props => {

    const {
        startDate,
        onChange,
        setFormat
    } = props
    const classes = useStyles()

    return (<>
        <ThemeProvider theme={defaultTheme}>
            <DatePicker
                selected={startDate}
                onChange={onChange}
                {...setFormat}
            />
        </ThemeProvider>
    </>)
}

export default DatePickView
