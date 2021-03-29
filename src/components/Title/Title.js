import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import './Title.scss'

const Title = ({children, classSection}) => {
    return (
        <div>
            <Grid item className={classSection + '_title'}>
                <Typography variant='h6' className='title-text'>{children}</Typography>
            </Grid>
        </div>
    )
}

export default Title
