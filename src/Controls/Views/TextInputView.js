import React from 'react'
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

/**
 * How to use this control
 * 
    <TextField 
        name=""
        format={{
            id: "outlined-basic",
            label: "Outlined",
            variant: "outlined"
        }}
    />
 */

const TextInputView = props => {

    const classes = useStyles()
    const { format } = props

    return (<>
        <TextField
            {...format}
        />
    </>)
}

export default TextInputView
