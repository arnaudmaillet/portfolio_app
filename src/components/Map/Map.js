import React from 'react'
import { Grid, Paper } from '@material-ui/core';
import MyData from "../../utils/Data.js";
import Iframe from 'react-iframe';

import './Map.scss'

const Map = () => {
    return (
        <Paper elevation={MyData.settings.cardElevation}>
            <div className='map'>
                <Grid container>
                    <Grid item xs={12}>
                        <Iframe
                            width='100%'
                            height='100%'
                            url={MyData.profile.map} />
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )
}

export default Map
