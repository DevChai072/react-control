import React from 'react'
import AppBarMui from '../../../Controls/Containers/AppBar/AppBarMui'
import ContentBlog from '../../Containers/Website/ContentBlog'
import { makeStyles } from '@material-ui/core/styles'

import TextInput from '../../../Controls/Containers/TextInput'
import DatePicker from '../../../Controls/Containers/DatePick'
import Virtualized from '../../../Controls/Containers/Table/Virtualized'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
}))

const WebLayoutView = props => {

    const classes = useStyles()

    return (<>
        <AppBarMui />
        <ContentBlog>

            {/* TextInput */}
            <TextInput 
                format={{
                    id: "outlined-basic",
                    label: "Outlined",
                    variant: "outlined"
                }}
            />
            
            {/* DatePick */}
            <DatePicker />
            
            {/* Virtualized */}
            <Virtualized style={{ height: '200px' }}/>
            
        </ContentBlog>
    </>)
}

export default WebLayoutView
