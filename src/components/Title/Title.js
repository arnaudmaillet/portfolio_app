import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'

import './Title.scss'

const style = makeStyles(theme => ({
    text: {
        "&:before": {
            backgroundColor: theme.palette.primary.main
        }
    }
}))

const Title = ({children, classSection}) => {
    const classes = style()
    return (
        <div>
            <Grid item className={classSection + '_title'}>
                <Typography variant='h6' className={['title-text', classes.text].join(' ')}>{children}</Typography>
            </Grid>
        </div>
    )
}

export default Title
