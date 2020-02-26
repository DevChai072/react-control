import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

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
        marginBottom: '20px',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        }
    },
}))

const ContentBlogView = props => {

    const { children } = props
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Grid item xs={12}>      
                {
                    children.map(item => {
                        return (
                            <Card className={classes.cardRoot}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {item.type.name}
                                    </Typography>
                                    <Divider style={{ marginTop: '20px', marginBottom: '20px' }}/>
                                    <Typography variant="body2" component="p">
                                        {item}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }
                </Grid>
            </Container>
        </div>
    )
}

export default ContentBlogView